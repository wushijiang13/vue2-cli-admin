import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        perLayoutList:[],
        perRouter:[],
    },
    mutations:{
        perInfo(state,perResult){
            this.state.perLayoutList=perResult.perLayoutList;
            this.state.perRouter=perResult.perRouter;
        },
        clearAll(){
            this.state.perLayoutList=[];
            this.state.perRouter=[];
        }
    },
})

export default store