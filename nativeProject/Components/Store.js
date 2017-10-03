import {extendObservable} from 'mobx';

class Store {
  constructor() {
    extendObservable(this, {
      name: "",
      username: "",
      token: "",
      authenticated: false,
      loaded: false,

    })
  }
}
export default new Store()
