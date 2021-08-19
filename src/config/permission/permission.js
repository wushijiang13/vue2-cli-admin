import {perminssion as prl} from '@cli/cli.config';
/**
 * @params codeList 指代当前用户拥有的权限code集
 * @return 返回一个对象，根据codeList生成的，侧边导航以及路由对象
 * 实现思路:
 * 1.login请求后 得到权限code数组
 * 2.permission筛选，留下所有拥有code的权限和不需要code验证的数组，生成layoutList
 * 3.router数组 只拿拥有component的 并且生成的都是同级数组
 *
 */
export function initPermission(codeList){
    if (!Array.isArray(codeList)) {
        console.error("codeList Need type Array!")
        return ;
    }
    const perLayoutList = prl.map(item=>{
        if (Object.hasOwnProperty.call(item, "children")) {
           item.children=item.children.filter(childrenItem=>{
                return  (codeList.includes(childrenItem.code) || !Object.hasOwnProperty.call(childrenItem, "code"));
            })
        }
        return (codeList.includes(item.code)||!Object.hasOwnProperty.call(item, "code")) ? item : (item.children && item.children.length)  ? item : {};
    })
    let perRouter=[];
    perLayoutList.forEach(item=>{
        if (Object.hasOwnProperty.call(item, "component")) {
            perRouter.push(item);
        }
        if (Object.hasOwnProperty.call(item, "children")) {
            item.children.forEach(childrenItem=>{
                if (Object.hasOwnProperty.call(childrenItem, "component")) {
                    perRouter.push(childrenItem);
                }
            })
        }
    })
    return {perLayoutList,perRouter};
}