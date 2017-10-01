import {extendObservable} from 'mobx';

class myStore {
  constructor() {
    extendObservable(this, {
      todos: [],
      name: "Mishaal",
      loaded: false,
    })
  }
}
export default new myStore()
