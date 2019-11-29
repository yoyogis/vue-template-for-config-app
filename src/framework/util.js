import Vue from 'vue'

function valueFuncPromise(obj, name, value){
    if(value && typeof value==='string'&&value.indexOf('func_'!==-1)){
        console.log(Vue.prototype);
        
        let p = Vue.prototype.$functions[value]()
        if(p instanceof Promise){
            p.then((v)=>{
                Vue.set(obj, name, v)
            })
        }else{
            Vue.set(obj, name, p)
        }
    }else{
        Vue.set(obj, name, value)
    }
}

export default {valueFuncPromise}