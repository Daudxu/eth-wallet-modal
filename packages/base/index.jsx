
import $ from 'jquery';
import { providers } from "../providers";
// assets
import bgBtShow from "../assets/images/bgBtHide.png";
import bgBtHide from "../assets/images/bgBtShow.png";

import {
  ETH_DAPP_WALLET_CONNECT_MODAL_ID,
  CONNECT_EVENT,
  ERROR_EVENT,
  CLOSE_EVENT
} from "../constants";

// import Modal from "../components/Modal";
// import { ProviderController } from "../controllers";

const INITIAL_STATE = { show: false };
const defaultOpt = {
  cacheProvider: false,
  disableInjectedProvider: false,
  providerOptions: {},
  network: ""
};

export class Base {
  show = INITIAL_STATE.show;
  providerController;
  providerOptions;
  userOptions = [];

  constructor(opts = defaultOpt) {
    const options = {
      ...opts
    };
    console.log(options)
    // this.userOptions = this.providerController.getUserOptions();
    console.log(providers.METAMASK.logo)
    this.renderModal();
  }

  get cachedProvider () {
    return this.providerController.cachedProvider;
  }

  // --------------- PUBLIC METHODS --------------- //

  connect = () => {
    $("#ETH_DAPP_WALLET_CONNECT_MODAL_ID").show()
    new Promise((resolve, reject) => {
      (async () => {
        try {
          $(document).on('click', '.connect', function (e) {
            console.log(e)
          });
          await this.toggleModal();
        } catch (err) {
          reject(err)
        }
      })()
    });

    // console.log(123123)
    // this.on(CONNECT_EVENT, 123123123);
    // new Promise((resolve, reject) => {
    //   (async () => {
    //     try {
    //       this.on(CONNECT_EVENT, provider => resolve(provider));
    //       this.on(ERROR_EVENT, error => reject(error));
    //       this.on(CLOSE_EVENT, () => reject("Modal closed by user"));
    //       await this.toggleModal();
    //     } catch (err) {
    //       reject(err)
    //     }
    //   })()
    // });
  }

  connectTo = (id) => {
    new Promise((resolve, reject) => {
      (async () => {
        try {
          this.on(CONNECT_EVENT, provider => resolve(provider));
          this.on(ERROR_EVENT, error => reject(error));
          this.on(CLOSE_EVENT, () => reject("Modal closed by user"));
          const provider = this.providerController.getProvider(id);
          if (!provider) {
            return reject(
              new Error(
                `Cannot connect to provider (${id}), check provider options`
              )
            );
          }
          await this.providerController.connectTo(provider.id, provider.connector);
        } catch (err) {
          reject(err)
        }
      })()
    });

  }

  async toggleModal () {

    // if (this.cachedProvider) {
    //   await this.providerController.connectToCachedProvider();
    //   return;
    // }

    // if (this.userOptions && this.userOptions.length === 1 && this.userOptions[0].name) {
    //   await this.userOptions[0].onClick();
    //   return;
    // }

    // await this._toggleModal();
  }

  // --------------- PRIVATE METHODS --------------- //
  // tocTest () {
  //   alert(1)
  // }

  renderModal () {
    const el = document.createElement("div");
    el.id = ETH_DAPP_WALLET_CONNECT_MODAL_ID;
    document.body.appendChild(el);

    // var _this = this
    var htmllet =
      `<div class="eth-warp">
            <div class="eth-main">
              <div class="eth-close"> 
                  <span class="eth-close-box"> </span>
              </div>
              <div class="eth-main-wallet">
              
                  <div class="cl-connect ${CONNECT_EVENT}" alt='${providers.METAMASK.name}'>
                    <button class="cl-connect-btu">
                      <img src="${providers.METAMASK.logo}" width="30x"
                            class="img-MetaMask">
                      MetaMask
                    </button>
                  </div>
                  <div class="cl-connect ${CONNECT_EVENT}" alt='${providers.WALLETCONNECT.name}'>
                    <button class="cl-connect-btu">
                      <img src="${providers.WALLETCONNECT.logo}" width="30x"
                            class="img-WalletConnect">
                      WalletConnect
                    </button>
                  </div>
              </div>
            </div>
        </div>
        <style> 
        #ETH_DAPP_WALLET_CONNECT_MODAL_ID{
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
          display: flex;
          border: 1px solid #faba30;
          border-radius: 5px;
          width: 450px;
          padding: 30px;
          background: #363636;
        }
        .eth-warp .eth-main .eth-close {
          display: flex;
          justify-content: right;
          margin-bottom: 20px;
        }
        .eth-warp .eth-main .eth-close span {
          background: url("../../assets/images/close.png") no-repeat;
          height: 24px;
          width: 24px;
          cursor: pointer;
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
    document.getElementById(ETH_DAPP_WALLET_CONNECT_MODAL_ID).innerHTML = htmllet;



  }

  _toggleModal = async () => {
    const d = typeof window !== "undefined" ? document : "";
    const body = d ? d.body || d.getElementsByTagName("body")[0] : "";
    if (body) {
      if (this.show) {
        body.style.overflow = "";
      } else {
        body.style.overflow = "hidden";
      }
    }
    await this.updateState({ show: !this.show });
  };

  onError = async (error) => {
    if (this.show) {
      await this._toggleModal();
    }
    console.log(error)
    // this.eventController.trigger(ERROR_EVENT, error);
  };

  onConnect = async (provider) => {
    if (this.show) {
      await this._toggleModal();
    }
    this.eventController.trigger(CONNECT_EVENT, provider);
  };

  updateState = async (state) => {
    Object.keys(state).forEach(key => {
      this[key] = state[key];
    });
    await window.updateWeb3Modal(state);
    this.show = false
  };

  resetState = () => this.updateState({ ...INITIAL_STATE });
}
