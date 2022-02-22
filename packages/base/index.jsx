
import { createApp } from 'vue'

import {
  ETH_DAPP_WALLET_CONNECT_MODAL_ID,
  CONNECT_EVENT,
  ERROR_EVENT,
  CLOSE_EVENT
} from "../constants";

import { themesList } from "../themes";

import Modal from "../components/Modal";
import { EventController, ProviderController } from "../controllers";

const INITIAL_STATE = { show: false };
const defaultOpt = {
  theme: themesList.default.name,
  cacheProvider: false,
  disableInjectedProvider: false,
  providerOptions: {},
  network: ""
};

export class Base {
  show = INITIAL_STATE.show;
  themeColors;
  eventController = new EventController();
  providerController;
  userOptions = [];

  constructor(opts = defaultOpt) {
    const options = {
      ...opts
    };

    this.providerController = new ProviderController({
      disableInjectedProvider: options.disableInjectedProvider,
      cacheProvider: options.cacheProvider,
      providerOptions: options.providerOptions,
      network: options.network
    });

    this.providerController.on(CONNECT_EVENT, provider =>
      this.onConnect(provider)
    );
    this.providerController.on(ERROR_EVENT, error => this.onError(error));

    this.userOptions = this.providerController.getUserOptions();
    this.renderModal();
  }

  get cachedProvider () {
    return this.providerController.cachedProvider;
  }

  // --------------- PUBLIC METHODS --------------- //

  connect = () => {

    new Promise((resolve, reject) => {
      (async () => {
        try {
          this.on(CONNECT_EVENT, provider => resolve(provider));
          this.on(ERROR_EVENT, error => reject(error));
          this.on(CLOSE_EVENT, () => reject("Modal closed by user"));
          await this.toggleModal();
        } catch (err) {
          reject(err)
        }
      })()
    });
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

    if (this.cachedProvider) {
      await this.providerController.connectToCachedProvider();
      return;
    }


    if (this.userOptions && this.userOptions.length === 1 && this.userOptions[0].name) {
      await this.userOptions[0].onClick();
      const el = document.getElementById('eth-warp');
      el.style.display="block"
      // console.log(this.userOptions[0].onClick())
      document.getElementsById()
      return;
    }

    await this._toggleModal();
  }

  on (event, callback) {
    this.eventController.on({
      event,
      callback
    });

    return () =>
      this.eventController.off({
        event,
        callback
      });
  }

  off (event, callback) {
    this.eventController.off({
      event,
      callback
    });
  }

  clearCachedProvider () {
    this.providerController.clearCachedProvider();
  }

  setCachedProvider (id) {
    this.providerController.setCachedProvider(id);
  }

  // --------------- PRIVATE METHODS --------------- //

  renderModal () {

    const el = document.createElement("div");
    el.id = ETH_DAPP_WALLET_CONNECT_MODAL_ID;
    document.body.appendChild(el);
    var _this = this
    const app = createApp({

      render () {
        console.log('_this.userOptions',_this.userOptions)
        return (
           <Modal
              show={INITIAL_STATE.show}
              userOptions={_this.userOptions}
              resetState={_this.resetState}>
          </Modal>
        )
      }
    })
    app.mount("#" + ETH_DAPP_WALLET_CONNECT_MODAL_ID)

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
    this.eventController.trigger(ERROR_EVENT, error);
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
