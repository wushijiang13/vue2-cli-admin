import Vue from 'vue'
import App from '@/App.vue'
import {router,store,initUiImport} from '@config'

Vue.config.productionTip = false;

async function init() {
  //这边只需要Vue.use 绑定接受 initUiImport 返回的值 就可
  await initUiImport();

  await new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}

init()


