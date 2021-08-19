<template>
    <div class="login">
        <div class="login_module">
            <a-form-model class="form_box" layout="horizontal" :model="formInline" @submit="handleSubmit" >
                <a-form-model-item  class="admin_name">
                   {{CLI_CONFIG.TITLE}}
                </a-form-model-item>
                <a-form-model-item>
                    <a-input v-model="formInline.user" size="large" placeholder="请输入账号">
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item>
                    <a-input-password v-model="formInline.password" size="large" type="password" placeholder="请输入密码">
                        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                    </a-input-password>
                </a-form-model-item>
                <a-form-model-item class="login_box">
                    <a-button class="login_btn" type="primary" block  @click="login">登陆</a-button>
                </a-form-model-item>
            </a-form-model>
        </div>
    </div>
</template>

<script>
    // import {initPermission} from '@config/permission/permission'
    export default {
        name: "login",
        data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                },
            };
        },
        methods: {
            handleSubmit() {
                console.log(this.formInline);
            },
            login(){
                //理应是login 请求完事后 获取code 比对
                /*const mockCheckList=[
                    "overview",
                    "report",
                    "financeReport"
                ]
                this.$utils.setLocalData("mockCheckList",mockCheckList);
                const perInfo=initPermission(mockCheckList)
                this.$store.commit("perInfo",perInfo);
                perInfo.perRouter.forEach( item=>{
                    this.$router.addRoute(this.CLI_CONFIG.perminssionParnent,item);
                })*/
                this.$router.push('/overview');
            }
        },
    }
</script>

<style scoped>
    .login{
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F2F6FC;
    }
    .login_module{
        width: 350px;
        height: 350px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #ffffff;
    }
    .admin_name{
        font-size: 18px;
        text-align: center;
        font-weight: 600;
    }
    .form_box{
        width: 300px;
    }
    .login_box{
        text-align: center;
    }
    .login_btn{
        line-height: 40px;
        height: 40px;
        font-size: 16px;
    }
</style>