import layout from './Layout.vue';
export const PERMISSION_ROUTING=[
    {
        path:'/overview',
        code:'overview',
        icon: 'bars',
        name:'overview',
        label:'概览',
        component:layout,
        redirect: '/dataview',
        children: [
            {
                path: '/dataview',
                code: 'dataview',
                label:"看板",
                component:()=> import('@page/view/overview/dateview.vue')
            }
        ]
    },
    {
        path: 'business',
        code: 'business',
        icon: 'calculator',
        label:'业务',
        name: 'business',
        component: layout,
        children: [
            {
                path:'financeReport',
                code: 'financeReport',
                label:'财务报表',
                name:'financeReport',
                component:()=> import('@page/view/business/financeReport'),
            },
            { //没有code参数则认为成无需验权的页面
                path:'orderReport',
                label:'订单报表',
                name:'orderReport',
                component:()=> import('@page/view/business/orderReport'),
            }
        ]
    }
];