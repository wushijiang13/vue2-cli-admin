import {PERMISSION_ROUTING} from '@config/permission/permission-routing'

const TITLE="Vue2-Admin"; //项目名称
const perminssionParnent="layout"; //项目名称
const UI_CONFIG={
         introduce:'all', // 支持 字符串 all 全局引入 和 数组 按需引入["Button","Icon","Table","Layout","Menu","Input","FormModel"]
};

export default {
    TITLE,
    perminssionParnent,
    PERMISSION_ROUTING,
    UI_CONFIG,
}

export {
    // CLI_CONFIG,
    TITLE,
    perminssionParnent,
    PERMISSION_ROUTING,
    UI_CONFIG
};