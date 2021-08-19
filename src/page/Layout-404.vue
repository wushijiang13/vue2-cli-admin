<template>
    <div class="layout-404">
        <a-result status="404" title="404" sub-title="抱歉，页面走丢了。">
            <template #extra>
                <a-button type="primary" @click="goHome">
                    返回首页
                </a-button>
            </template>
        </a-result>
    </div>
</template>

<script>
    export default {
        methods:{
            goHome(){
                this.$message.success('模拟返回首页成功');
            }
        }
    }
</script>

<style scoped>
    .layout-404{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>