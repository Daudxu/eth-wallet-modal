
import $ from 'jquery';
import { providers, connectors } from "../providers";

import bgBtShow from "../assets/images/bgBtHide.png";
import bgBtHide from "../assets/images/bgBtShow.png";
import closeMode from "../assets/images/close.png";

const ETH_WALLET_MODAL = "ETH_WALLET_MODAL";

const INITIAL_STATE = { show: false };

const defaultOpt = {
  logo: '',
  chainId: ""
};

export class Base {
  show = INITIAL_STATE.show;
  options = [];
  providers = null;
  walletOptions = [];

  constructor(options = defaultOpt) {
    this.options = options
    this.walletOptions = options.walletOptions
    this.providers = Object.keys(connectors).map((id) => {
      let providerInfo;
      providerInfo = this.getProviderInfoById(id);

      if (this.walletOptions[id]) {
        const options = this.walletOptions[id];
        if (typeof options.displayView !== "undefined") {
          providerInfo = {
            ...providerInfo,
            ...this.walletOptions[id].displayView,
          };
        }
      }

      return {
        ...providerInfo,
        connector: connectors[id],
      };
    });
    this.renderModal();
  }
  getProviderInfoById (id) {
    return this.filterProviders("id", id);
  }

  filterProviders (param, value) {
    const match = this.filterMatches(
      Object.values(providers),
      x => x[param] === value,
    );
    return match
  }

  filterMatches (array, condition) {
    let result = null;
    const matches = array.filter(condition);
    if (!!matches && matches.length) {
      result = matches[0];
    }
    return result;
  }

  getUserOptions () {
    const providerList = this.providers.map(({ id }) => id);
    const userOptions = [];

    providerList.forEach((id) => {
      let provider = this.getProvider(id);
      if (typeof provider !== "undefined") {
        const { id, name, logo, connector } = provider;
        userOptions.push({
          id,
          name,
          logo,
          connector
        });
      }
    });
    // var connector = this.getProvider('walletconnect').connector;
    // console.log('connector', connector(this.walletOptions['walletconnect'].options))
    // const providerList = [];

    // defaultProviderList.forEach((id) => {
    //   const result = this.shouldDisplayProvider(id);
    //   console.log('result', result)
    //   if (result) {
    //     providerList.push(id);
    //   }
    // });
    return userOptions;

  }

  shouldDisplayProvider (id) {
    const provider = this.getProvider(id);
    if (typeof provider !== "undefined") {
      const providerPackageOptions = this.walletOptions[id];
      if (providerPackageOptions) {
        const isProvided = !!providerPackageOptions.package;
        if (isProvided) {
          const requiredOptions = provider.package
            ? provider.package.required
            : undefined;
          if (requiredOptions && requiredOptions.length) {
            const providedOptions = providerPackageOptions.options;
            if (providedOptions && Object.keys(providedOptions).length) {
              const matches = this.findMatchingRequiredOptions(
                requiredOptions,
                providedOptions
              );
              if (requiredOptions.length === matches.length) {
                return true;
              }
            }
          } else {
            return true;
          }
        }
      }
    }
    return false;
  }
  getProvider (id) {
    return this.filterMatches(
      this.providers,
      x => x.id === id,
    );
  }
  findMatchingRequiredOptions (requiredOptions, providedOptions) {
    const matches = requiredOptions.filter(requiredOption => {
      if (typeof requiredOption === "string") {
        return requiredOption in providedOptions;
      }
      const matches = this.findMatchingRequiredOptions(
        requiredOption,
        providedOptions
      );
      return matches && matches.length;
    });
    return matches;
  }


  connect = async () => {
    // this.addOnClose()
    return await new Promise((resolve, reject) => {
      (async () => {
        $("#ETH_WALLET_MODAL .eth-close-box").click(function () {
          $("#ETH_WALLET_MODAL").hide()
        })
        if (localStorage.getItem("injected")) {
          await this.toLink(localStorage.getItem("injected")).then((res) => {
            resolve(res)
          }).catch((e) => {
            reject(e)
          })
        } else {
          var _this = this
          $("#ETH_WALLET_MODAL").show()
          $('#ETH_WALLET_MODAL .connect').click(async function () {
            var name = $(this).find('.cl-connect-btu').attr('alt')
            var connector = _this.getProvider(name).connector;
            connector(_this.walletOptions[name].options).then((res) => {
              console.log(1, res)
            }).catch((error) => {
              $("#ETH_WALLET_MODAL").hide()
              $('#ETH_WALLET_MODAL .connect').unbind();
              reject(error)
            })
            resolve(name)
          })
        }
      })().catch(e => console.log("error: " + e));
    });
  }

  async toLink (name) {
    return new Promise((resolve) => {
      resolve(this.connectTo(name))
    })
  }
  connectTo = async (name) => {
    var _this = this
    var awaitPromise = new Promise(function (resolve, reject) {
      if (name.toLowerCase() === 'metamask') {
        connectors.metamask().then((res) => {
          _this.provider = res
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      } else if (name.toLowerCase() === 'walletconnect') {
        connectors.walletconnect(_this.opts.walletconnect).then((res) => {
          _this.provider = res
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      } else if (name.toLowerCase() === 'coinbase') {
        connectors.coinbase(_this.opts.coinbase).then((res) => {
          _this.provider = res
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      }

    })
    var res = await awaitPromise
    return res
  }

  disconnect = async (provider) => {
    if (provider) {
      if (localStorage.getItem("injected") === "walletconnect") {
        provider.connector.killSession()
        localStorage.removeItem('walletconnect')
        localStorage.removeItem('loglevel:webpack-dev-server')
      }
    }
    localStorage.removeItem('injected')
  }



  renderModal () {
    var userWalletProviderList = this.getUserOptions();
    const el = document.createElement("div");
    el.id = ETH_WALLET_MODAL;
    document.body.appendChild(el);
    var htmllet =
      `<div class="eth-warp">
            <div class="eth-main">
              <div class="eth-close"> 
                  <span class="eth-close-box" > </span>
              </div>
              <div class="eth-main-wallet">
              `;
    if (typeof (this.options.logo) !== 'undefined') {
      htmllet += `
                  <div class="eth-main-wallet-logo"> 
                       <img src="${this.options.logo}" width="100px" class="img-MetaMask"> 
                  </div>
                 `
    }
    userWalletProviderList.forEach((item) => {
      htmllet += `
                  <div class="cl-connect connect" >
                    <button class="cl-connect-btu" alt='${item.name}'>
                      <img src="${item.logo}" width="30px"
                            class="img-MetaMask">
                            ${item.name}
                    </button>
                  </div>
      `
    })
    htmllet += `
          </div>
          </div>
      </div>
      <style> 
      #ETH_WALLET_MODAL{
        display:none
      }
      .eth-warp {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(30, 30, 30, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .eth-warp .eth-main {
        position: relative;
        display: flex;
        border: 1px solid #faba30;
        border-radius: 18px;
        width: 450px;
        padding: 30px;
        background: #363636;
        display: flex;
        justify-content: center;
    }
      .eth-warp .eth-main .eth-main-wallet{      
          text-align: center;
      }
      }
      .eth-warp .eth-main .eth-close {
        display: flex;
        justify-content: right;
        margin-bottom: 20px;
      }
      .eth-warp .eth-main .eth-close span {
        background: url("${closeMode}") no-repeat;
        height: 24px;
        width: 24px;
        cursor: pointer;
        position: absolute;
        right: 12px;
         top: 14px;
      }
      .eth-warp .eth-main .eth-main-wallet {
        color: #faba30;
      }
      .eth-warp .eth-main .eth-main-wallet div:nth-child(n+2){
        margin-top: 20px;
      }
      .cl-bottom {
        margin-bottom: 20px;
      }
      .eth-main-wallet .cl-connect-btu {
        display: flex;
        align-items: center;
        width: 390px;
        height: 40px;
        padding-left: 20px;
        padding-right: 20px;
        border: none;
        color: #000000;
        background: url("${bgBtShow}") no-repeat;
        text-align: left;
        color: #fff;
        font-size: 16px;
      }
      .eth-main-wallet .cl-connect-btu:hover {
        background: url("${bgBtHide}") no-repeat;
      }
      .eth-main-wallet .img-MetaMask {
        margin-right: 17px;
      }
      .eth-main-wallet .img-WalletConnect {
        margin-right: 14px;
      }
      </style>
    `
    document.getElementById(ETH_WALLET_MODAL).innerHTML = htmllet;
  }


}
