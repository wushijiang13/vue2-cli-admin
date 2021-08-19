import Vue from 'vue';

Vue.prototype.$loading={
    open:()=>{global.isLoading=true},
    close:()=>{global.isLoading=false},
}

export const global={
    isLoading:false,
}
