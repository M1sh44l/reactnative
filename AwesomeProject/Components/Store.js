import {extendObservable} from 'mobx';

class myStore {
  constructor() {
    extendObservable(this, {
      todos: [],
      name: "mishaal",
      username: "",
      password: "",
      loaded: false,
      token: '',
    })
  }
}
export default new myStore()
