
//定义两个组件
var video={
    template:`
       <div style="margin-top: 15px;padding-bottom: 10px;">
                <div style="padding: 50px;background-color: rgb(94,156,211);width:600px; margin-bottom: 15px">广告栏</div>
                <div style="padding: 100px;background-color: rgb(94,156,211);width:100px;margin: auto">视频内容</div>
            </div>
    `
}
var Home={
    template:`  <div style="margin-top: 15px;padding-bottom: 10px;">
                <div style="float:right;padding: 100px;background-color: rgb(94,156,211);width:100px;">文章列表</div>
                <div style="float: left;padding: 100px;background-color: rgb(94,156,211);width:100px;">视频列表</div>
            </div>`
}

var News={
    template:`
      <ul style="padding: 13px;margin-left: -6px;" >
      <li style="margin-bottom: 10px;"> 新闻1</li>
      <li style="margin-bottom: 10px;"> 新闻2</li>
      <li style="margin-bottom: 10px;"> 新闻3</li>
      <li style="margin-bottom: 10px;"> 新闻4</li>
</ul>

`,
}


//设定路径跟组件之间的关系 数组中定义两个对象，每个对象中有两个属性  映射到我们新建的router对象
var routes=[
    {
        path:"/",
        component:Home,
        name:"homepath"
    },
    {
        path:"/news",
        component:News,
         name:"newspath"
    },
    {
        path:"/videos",
        component:video,
        name:"videospath",
    },

]

//新建VueRouter对象，讲ROUTER关系设置给信的VueRouter对象
var router = new VueRouter({
    routes
})


//添加VueRouter，进行关联
var vm=new Vue({
    el:"#app",
    router


})