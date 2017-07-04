/**
 * Created by ming on 2017/6/19.
 */
$(function () {



    var main = function () {
        this.ids = [];
    };

    main.prototype = {
        init: function () {
            // this.initData()
            this.getTreeData()
            this.initEvent();



        },


        initEvent:function() {
            var self = this;
          $("#save").on("click",function() {
            window.location.href = "./entry.html?tagIds="+self.ids.join(",")
          })
        },
        getTreeData: function () {
            var self = this;

            // 目录树
            $.ajax({
                url:"/powerinner/showOrgList",
                dataType: "json",
                success:function(data) {
                    if(data&&data.meta&&data.meta.success) {
                        $("#jstree_demo_div").treeview({
                            data:data.data,
                            showCheckbox:true,
                        })

                        $("#jstree_demo_div").on("nodeChecked",function(e,node) {
                           self.ids.push(node.id)
                            // console.log(node);


                        });
                        $("#jstree_demo_div").on("nodeUnchecked",function(e,node) {
                           $.each(self.ids,function(i,v) {
                               if(node.id==v) {
                                   self.ids.splice(i,1)
                                   return false;
                               }
                           })
                            console.log(self.ids);

                        });

                    }
                },
				error:function(data){
					data = {"data":[{"text":"杭州营销分中心","state":{"selected":true},"nodes":[{"text":"城东供电公司","nodes":[{"text":"城东供电所","nodes":[],"id":"344010101"},{"text":"城东三所","nodes":[{"text":"shaoyangtestorg","id":"34401010301"}],"id":"344010103"}],"id":"3440101"},{"text":"城北供电公司","nodes":[{"text":"城北供电所01所","nodes":[{"text":"城北供电所1","id":"34401020101"}],"id":"344010201"},{"text":"城北供电02所","nodes":[{"text":"上新供电营业所(测试)","id":"34401020201"},{"text":"邱玛供电所","id":"34401020202"},{"text":"上新供电营业02所","id":"34401020203"},{"text":"府新供电所","id":"34401020204"}],"id":"344010202"},{"text":"三墩供电所","nodes":[{"text":"测试服务区域","id":"34401020501"},{"text":"测试","id":"34401020502"}],"id":"344010205"},{"text":"文三供电所","nodes":[],"id":"344010209"},{"text":"城北供电10所","nodes":[],"id":"344010210"},{"text":"直供电单位","nodes":[],"id":"344010215"},{"text":"测算2","nodes":[{"text":"测算3","id":"344013101"}],"id":"3440131"}],"id":"3440102"},{"text":"富阳供电公司","nodes":[],"id":"3440103"},{"text":"侵权请求","nodes":[],"id":"3440105"},{"text":"城东四所","nodes":[],"id":"3440106"},{"text":"服务中心","nodes":[],"id":"3440107"},{"text":"分公司测试1","nodes":[],"id":"3440109"},{"text":"测试供电单位","nodes":[],"id":"3440110"},{"text":"test","nodes":[],"id":"3440111"},{"text":"测试供电单位","nodes":[],"id":"3440112"},{"text":"测试供电单位","nodes":[],"id":"3440113"},{"text":"城南供电公司","nodes":[],"id":"3440116"},{"text":"拱墅供电公司（切换电费年月）","nodes":[],"id":"3440118"},{"text":"2323","nodes":[],"id":"3440119"},{"text":"河南融合县公司11","nodes":[{"text":"文三路供电所","nodes":[],"id":"344012101"}],"id":"3440121"},{"text":"余杭供电公司","nodes":[],"id":"3440140"},{"text":"周转柜测试单位","nodes":[],"id":"3440199"}],"id":"34401"}],"meta":{"code":"","message":"成功","success":true}};
					  if(data&&data.meta&&data.meta.success) {
                        $("#jstree_demo_div").treeview({
                            data:data.data,
                            showCheckbox:true,
                        })

                        $("#jstree_demo_div").on("nodeChecked",function(e,node) {
                           self.ids.push(node.id)
                            // console.log(node);


                        });
                        $("#jstree_demo_div").on("nodeUnchecked",function(e,node) {
                           $.each(self.ids,function(i,v) {
                               if(node.id==v) {
                                   self.ids.splice(i,1)
                                   return false;
                               }
                           })
                            console.log(self.ids);

                        });

                    }
					
				}
            })
            // $("#jstree_demo_div").treeview({
            //     data:data.data,
            //     showCheckbox:true,
            // })
            // $("#jstree_demo_div").on("nodeChecked",function(e,node) {
            //     self.ids.push(node.id)
            //     // console.log(node);
            //
            //
            // });
            // $("#jstree_demo_div").on("nodeUnchecked",function(e,node) {
            //     $.each(self.ids,function(i,v) {
            //         if(node.id==v) {
            //             self.ids.splice(i,1)
            //             return false;
            //         }
            //     })
            //     console.log(self.ids);
            //
            // });
            $("#jstree_demo_div").niceScroll({
                cursorcolor: "#2A71AF",//#CC0071  83D7D5光标颜色
                cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: true, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "5px", //像素光标的宽度
                cursorborder: "0", // 游标边框css定义
                cursorborderradius: "5px",//以像素为光标边界半径
                autohidemode: true //是否隐藏滚动条,鼠标移上去才显示
            })

        },





    }

    var index = new main();
    index.init()

})