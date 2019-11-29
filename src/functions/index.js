import {func_1234} from './func-1234'

const functions = {
    func_1234
}

export default{
    install(Vue){
        Vue.prototype.$functions = functions
    }
}