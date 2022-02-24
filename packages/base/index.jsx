
import $ from 'jquery';
import { providers, connectors } from "../providers";

import bgBtShow from "../assets/images/bgBtHide.png";
import bgBtHide from "../assets/images/bgBtShow.png";

const ETH_DAPP_WALLET_CONNECT_MODAL = "ETH_DAPP_WALLET_CONNECT_MODAL";
const CONNECT_EVENT = "connect";

const defaultOpt = {
  cacheProvider: false,
  disableInjectedProvider: false,
  network: ""
};

export class Base {
  userOptions = [];
  provider = null;
  constructor(opts = defaultOpt) {
    this.opts = opts
    this.renderModal();
  }

  // --------------- PUBLIC METHODS --------------- //

  connect = async () => {
    $("#ETH_DAPP_WALLET_CONNECT_MODAL").show()
    var provider = await this.monitoClick()
    return provider
  }
  monitoClick = () => {
    var _this = this
    return new Promise((resolve) => {
      $('#ETH_DAPP_WALLET_CONNECT_MODAL .connect').click(function () {
        var name = $(this).find('.cl-connect-btu').attr('alt')
        resolve(_this.connectTo(name))
      })
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
      }
    })
    var res = await awaitPromise
    return res
  }

  renderModal () {
    const el = document.createElement("div");
    el.id = ETH_DAPP_WALLET_CONNECT_MODAL;
    document.body.appendChild(el);
    var htmllet =
      `<div class="eth-warp">
            <div class="eth-main">
              <div class="eth-close"> 
                  <span class="eth-close-box"> </span>
              </div>
              <div class="eth-main-wallet">
              
                  <div class="cl-connect ${CONNECT_EVENT}" >
                    <button class="cl-connect-btu" alt='${providers.METAMASK.name}'>
                      <img src="${providers.METAMASK.logo}" width="30x"
                            class="img-MetaMask">
                      MetaMask
                    </button>
                  </div>
                  <div class="cl-connect ${CONNECT_EVENT}" >
                    <button class="cl-connect-btu" alt='${providers.WALLETCONNECT.name}'>
                      <img src="${providers.WALLETCONNECT.logo}" width="30x"
                            class="img-WalletConnect">
                      WalletConnect
                    </button>
                  </div>
              </div>
            </div>
        </div>
        <style> 
        #ETH_DAPP_WALLET_CONNECT_MODAL{
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
          border-radius: 18px;
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
    document.getElementById(ETH_DAPP_WALLET_CONNECT_MODAL).innerHTML = htmllet;



  }


}