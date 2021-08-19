import './antd-theme.less';
import {UI_CONFIG} from '@cli/cli.config';
import Vue from 'vue';

console.log(UI_CONFIG);
console.log(`当前引入:${UI_CONFIG.introduce}`);

function installUi(){
    return Promise.all(UI_CONFIG.introduce.map(async(item)=>{
        console.log((await import('ant-design-vue'))[item]);
        Vue.use((await import('ant-design-vue'))[item]);
        return item;
    }))
}

export function initUiImport(){
    return new Promise((resolve)=>{
        const isAll=!UI_CONFIG || (typeof UI_CONFIG.introduce === 'string' && UI_CONFIG.introduce === 'all') //是否加载全部
        const isArray=UI_CONFIG.introduce instanceof Array //按需引入
        resolve(isAll ? import("ant-design-vue").then(res=>{Vue.use(res.default)}) : isArray ? installUi(Vue) : undefined);
    })
}







