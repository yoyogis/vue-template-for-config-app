import {func_1234} from './func-1234'
import {func_001} from './func-001'

const functions = {
    func_1234,
    func_001
}

export default{
    install(Vue){
        Vue.prototype.$functions = functions;
    }
}