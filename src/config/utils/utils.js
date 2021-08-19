import Vue from 'vue';

const UTILS={
    setLocalData:(name="",value="")=>{
        localStorage.setItem(name, JSON.stringify(value));
    },
    getLocalData:(name="")=>{
       return  JSON.parse(localStorage.getItem(name));
    },
    clearLocalData:()=>{
        return  localStorage.clear();
    }
}

Vue.prototype.$utils=UTILS;
