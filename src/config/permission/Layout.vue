<template>
    <div class="layout">
        <a-spin :spinning="global.isLoading">
            <a-layout  id="components-layout-custom-trigger">
                <a-layout-sider  v-model="collapsed"  collapsible>
                    <div class="logo" :style="collapsed ? {textAlign:'center'} :'' ">
                        <img src="favicon.ico"/>
                        <span v-show="!collapsed">{{CLI_CONFIG.TITLE}}</span>
                    </div>
                    <a-menu v-model="menuSelected" mode="inline" theme="dark">
                        <template v-for="item in CLI_CONFIG.PERMISSION_ROUTING">
                            <template v-if="item.children">
                                <a-sub-menu :key="item.path">
                                    <span slot="title">
                                         <a-icon :type="item.icon"/>
                                        <span>{{item.label}}</span>
                                    </span>
                                    <template v-if="item.children">
                                        <a-menu-item v-for="childItem in item.children" :key="childItem.path">
                                            {{childItem.label}}
                                        </a-menu-item>
                                    </template>
                                </a-sub-menu>
                            </template>
                            <template v-else>
                                <a-menu-item :key="item.path">
                                    <a-icon :type="item.icon" />
                                    <span>{{item.label}}</span>
                                </a-menu-item>
                            </template>
                        </template>
                    </a-menu>
                </a-layout-sider>
                <a-layout>
                    <a-layout-header theme="light"  class="layout_header">
                        <a-icon
                                class="trigger"
                                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                                @click="() => (collapsed = !collapsed)"
                        />
                        <a-breadcrumb :style="{ display:'inline-block', verticalAlign:'text-bottom'}">
                            <a-breadcrumb-item  href="/">
                                <a-icon type="home" @click="goHome" />
                            </a-breadcrumb-item>
                            <a-breadcrumb-item :key="breadcrumbSelected.path">
                                <span>{{breadcrumbSelected.label}}</span>
                            </a-breadcrumb-item>
                        </a-breadcrumb>
                        <a-dropdown class="drop_user">
                            <p>
                                <a-icon type="user"/> 管理员
                            </p>
                            <a-menu class="drop_down" slot="overlay">
                                <a-menu-item @click="quit">退出</a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-layout-header>
                    <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff'}">
                        <router-view/>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </a-spin>
    </div>
</template>
<script>
    import {global} from '@config/ui/ui-global'
    export default {
        name:'layout',
        data:()=>{
            return {
                global,
                collapsed: true,
                menuSelected:[''],
                breadcrumbSelected:{},//面包屑
                firstPageRouter:"", //默认首页
            }
        },
        mounted(){
            console.log(this.CLI_CONFIG.PERMISSION_ROUTING);
        },
        methods:{
            quit(){
                this.$utils.clearLocalData();
                this.$store.commit("clearAll");
                this.$router.replace('/login');
            },
            goHome(){
                this.$router.push(this.firstPageRouter);
            }
        },
        watch:{
            menuSelected(){
            }
        },
        created() {
            console.log(this.$router.getRoutes());
        },
    };
</script>
<style>
    #components-layout-custom-trigger{
        height:100vh;
        overflow: hidden;
    }
    #components-layout-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-custom-trigger .logo {
        height: 32px;
        line-height: 32px;
        margin: 16px;
        font-size: 16px;
        color: #ffffff;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap;
    }
    #components-layout-custom-trigger .logo  img{
        height: 18px;
        text-align: center;
    }
    #components-layout-custom-trigger .logo  span{
        margin-left: 10px;
        line-height: 32px;
    }
    .layout_header{
        background: #fff;
        padding: 0;
    }
    .drop_user{
        float: right;
        padding: 0 24px;
    }
    .drop_down{
        text-align: center;
    }
</style>
