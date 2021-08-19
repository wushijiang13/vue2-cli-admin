权限实现思路  
1.权限code和路由融合,通过自定义指令的v-permission 来控制layout是否显示
这样的话，只需要将权限list存放在lcoalstorage里即可 实现刷新不会清除权限问题  
2.由于内部路由是通过import() 动态引入的所以，只要控制侧边导航实际上就控制了页面加载
并且只需要在router 切换的时候验证当前跳转传入的对象code 是否能通过v-permission就可以判断是否
可以跳转。