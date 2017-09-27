import {extendObservable} from 'mobx';

class myStore {
  constructor() {
    extendObservable(this, {
      todos: [],
      name: "Mishaal",
    })
  }
}
export default new myStore()
