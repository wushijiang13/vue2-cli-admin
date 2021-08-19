import VueRouter from 'vue-router'
import Vue from "vue";
import {PERMISSION_ROUTING} from '@cli/cli.config';
Vue.use(VueRouter);

/****
 * 此页面加入的路由，需要保证是无需鉴权页面。
 * 在此页面加入code 也不判断
 *
 * 动态路由实现逻辑
 * 默认可以写入login、404等，无需鉴权页面
 * 然后 根据权限生成当前用户路由表，通过vuex读取
 * 在后缀追加路由。
 *
 * @type {VueRouter}
 */
const router = new VueRouter({
    routes :[
        {
            path: '/login',
            component:()=> import('@page/Login')
        },
        {
            path: "/404",
            component:()=> import("@page/404")
        }
    ]
})

console.log(PERMISSION_ROUTING);

PERMISSION_ROUTING.forEach(item=>{
    router.addRoute(item);
})



router.beforeEach((to, from, next) => {
    next();
});

export default  router;
