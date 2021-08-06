//派发器
import reducer from '@/reducer/counter'
import { PLUS, MINUS } from '@/actions/counter'

export default (ctx) => {
  const {plus,minus} = reducer(ctx.$data) //$data是vue中的数据劫持
  return function(type, ...args) {
    switch(type) {
      case PLUS:
        ctx.$data.result = plus(...args)
        break
      case MINUS:
        ctx.$data.result = minus(...args)
        break
      default:
        break
    }
  }
}
