/**
 * Created by ming on 2017/6/19.
 */
$(function () {

/*    jQuery(".txtMarquee-top").slide({
        mainCell: ".bd ul",
        autoPlay: false,
        effect: "topMarquee",
        vis: 5, interTime: 50
    });*/


    var main = function () {

    };

    main.prototype = {
        init: function () {
        	this.initData();
        	this.doClick();
        },
        initData: function () {
            var self = this;
            // 请求全部企业数据
        	var data={
        		    "meta": {
        		        "success": true,
        		        "code": "",
        		        "message": ""
        		    },
        		    "data":[]
        	};
			var consJson = [{"consName":"\tLB","consNo":"0004669076","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":"  ZBL                                        ","consNo":"0166341870","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10501","consNo":"3098733645","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10502","consNo":"3098733658","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10503","consNo":"3098733661","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10504","consNo":"3098733674","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10505","consNo":"3098733687","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10506","consNo":"3098733690","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10507","consNo":"3098733704","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元10508","consNo":"3098733717","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元11501","consNo":"3098733720","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元11502","consNo":"3098733733","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元11503","consNo":"3098733746","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元11504","consNo":"3098733759","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0},{"consName":" 1幢 1单元11505","consNo":"3098733762","currentPage":0,"orgName":"","orgNo":"3440102","orgNos":"","orgType":"","pOrgNo":"","pageCount":0,"pageSize":0,"tagIds":"","total":0}];
        	for(var item in consJson){
        		var tmpJson = {};
        		tmpJson.consName = consJson[item].consName;
        		tmpJson.consNo = consJson[item].consNo;
        		data.data.push(tmpJson);
        	}
            if (data.meta && data.meta.success) {
//                console.log(data);
                self.refreshCompany(data.data)
            }

        },

        refreshCompany: function (dataArr) {
            // 请在下面添加url
            var html = "";
            $.each(dataArr, function (i, v) {
                html += '<li style="height:15px;"> ' +
                    '<a href="index.html?index&consNo=' + v.consNo + '" >' +
                    v.consName +
                    ' </a>' +
                    ' </li>';
            });
            $("#companyList").html(html)

        },
        doClick:function(){
        	var self = this;
        	$("#imgForword").click(function(){
        		if(page<=1){
        			alert("已经是第一页了！");
        			return;
        		}
        		page--;
        		onload();
        		$.ajax({
        			url:"elecIndex.do?action=ajax&pageSize="+pageSize+"&pageCount="+pageCount+"&currentPage="+page+"&tagIds="+tagIds,
        		    type:"get",
        		    success:function(resData) {
        		    	hideWait();
        		    	self.changePage(resData);
        		    }
        		});
        	});
        	$("#imgNext").click(function(){
        		if(page>=pageSize){
        			alert("已经是最后一页了！");
        			return;
        		}
        		page++;
        		onload();
        		$.ajax({
        		    url:"elecIndex.do?action=ajax&pageSize="+pageSize+"&pageCount="+pageCount+"&currentPage="+page+"&tagIds="+tagIds.join(","),
        		    type:"get",
        		    success:function(resData) {
        		    	hideWait();
        		    	 // 请求全部企业数据
        		    	self.changePage(resData);
        		    }
        		});
        	});
        },
        changePage:function(resData){
        	resData=JSON.parse(resData);
        	var self=this;
        	var data={
        		    "meta": {
        		        "success": true,
        		        "code": "",
        		        "message": ""
        		    },
        		    "data":[]
        	};
        	for(var item in resData){
        		var tmpJson = {};
        		tmpJson.consName = resData[item].consName;
        		tmpJson.consNo = resData[item].consNo;
        		data.data.push(tmpJson);
        	}
            if (data.meta && data.meta.success) {
//                console.log(data);
                self.refreshCompany(data.data)
            }
        }

    }

    var index = new main();
    index.init()

})