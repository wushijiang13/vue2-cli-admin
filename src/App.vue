<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // import {initPermission} from '@config/permission/permission'
  export default {
    name: 'App',
    methods:{
      /*init(){
        //现在是App 和login 上都重新判断遍历路由树
        //如果想直接拿结果的话，必须要解决component 懒加载无法保存到localstorage 的问题
        let mockCheckList =  this.$utils.getLocalData("mockCheckList")
        if (mockCheckList) {
          const perInfo=initPermission(mockCheckList)
          this.$store.commit("perInfo",perInfo);
          perInfo.perRouter.forEach(item=>{
            this.$router.addRoute(this.CLI_CONFIG.perminssionParnent,item);
          })
          console.log(this.$router.getRoutes());
        }
      },*/
    },
    created() {
      // this.init();
    }
  }
</script>
<style>
  @import "assets/css/app.css";
</style>
