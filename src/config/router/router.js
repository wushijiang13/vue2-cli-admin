import VueRouter from 'vue-router'
import Vue from "vue";
import {PERMISSION_ROUTING} from '@cli/cli.config';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
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
            component:()=> import("@page/Layout-404")
        },
    ]
})


PERMISSION_ROUTING.forEach(item=>{
    router.addRoute(item);
})

NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
})

export default  router;
