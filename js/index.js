var json = [];

json=   {
        name: "浙江华莱士食品有限公司",
        score: "70",
        tag: " 分数居中",
        money: "1681",
        radarNum:"70.5",
        arr: [{
            title:"电价选择",
            type:"price",
            text:"根据您3月份的用电情况，若选择大工业电价可节约电费约1681元。",
            subData:{
                x:["10月","11月","12月","1月","2月","3月"],
                legend:["商业电价","工业电价"],
                data:[
                    [132978 ,	143055 ,	149499 ,	80785 ,	81812 	,79679],
                    [123515 ,	132200 ,	137719 ,	78858 ,	79816 ,	77998]

                ]
            }
        },
        ],
        homeLineText:["0.93","0.84","同比-3.4%"],
        homeLine:{
            x:["10月","11月","12月","1月","2月","3月"],
            legend:["本企业","本行业"],
            data:[
                [0.87 ,	0.87, 	0.87 	,0.88 ,	0.89 	,0.85],
                [0.94 ,	0.93 	,0.93 	,0.93 	,1.02 ,	0.93]

            ]
        },
        slideLineText:[{
            num:"82.7%",
            text:"的综合零售企业",
        },
            {
                num:"63.2%",
                text:"的综合零售企业",
            },
            {
                num:"39.0%",
                text:"的综合零售企业",
            }
        ],


        slideLine:[{
            x:  ["10月","11月","12月","1月","2月","3月"],
            legend:["本企业","本行业"],
            data:[
                [0.86 ,	0.87 ,	0.87 ,	0.87 	,0.84 ,	0.98],
                [0.87 ,	0.86 ,	0.87 	,0.87 ,	0.80 ,0.86]

            ]
        },
            {
                x:  ["10月","11月","12月","1月","2月","3月"],
                legend:["本企业","本行业"],
                data:[
                    [0.34 ,	0.35 ,	0.35 ,	0.33 ,	0.32, 	0.37],
                    [0.34 	,0.34 	,0.34 	,0.34, 	0.35 ,	0.33]

                ]
            },
            {
                x:  ["10月","11月","12月","1月","2月","3月"],
                legend:["本企业","本行业"],
                data:[
                    [0.95 ,	0.91 ,	0.93 	,0.93 	,0.90 ,	0.93],
                    [0.68 	,0.66 ,	0.68 	,0.59 ,	0.62 ,	0.68]

                ]
            },
        ],
        radar: {
            text: [
                {text: '负载率'},
                {text: '尖峰谷'},
                {text: '功率因数'}
            ],
            data:[0,81,1]

        }
    };


if(json.score) {
	$("#lineFlash").css("left",json.score/100*4.12+"rem")
}


$("#company").html(json.name||"××××××××××");
$("#money").html(json.money||"0");

if(json.homeLineText){
    $("#pm").find(".pm1").html(json.homeLineText[0])
    $("#pm").find(".pm2").html(json.homeLineText[1])

    $("#pm").find(".pm3").html(json.homeLineText[2])

}
if(json.radarNum) {
    $("#radarNum").html(json.radarNum)
}

if(json.slideLineText) {
    $("#effect").find(".num1").html(json.slideLineText[0].num)
    $("#effect").find(".num2").html(json.slideLineText[1].num)
    $("#effect").find(".num3").html(json.slideLineText[2].num)

    $("#effect").find(".filltext").html(json.slideLineText[0].text)

}


$("body").removeClass("hid");
var lists = $("#lists");
if(json.length != 0){
	for(var i =0;i<json.arr.length;i++) {
		var html =  '<li data-text=\"'+json.arr[i].subtext+'\" class='+'\"cli '+json.arr[i].type+'\">'+
			'<div class="title clearfix">'+
			'<i class="ico "></i>'+
			'<h4>'+json.arr[i].title+'</h4>'+
			'<i class="go"></i>'+
			'</div>'+
			'<p  class="fenxi"><span>分析：</span>'+json.arr[i].text+'</p>'+
		'</li>'

		lists.append(html)
	}
}

function getDashboard() {


    var myChart = echarts.init(document.getElementById('dashboard'));

    var option = {
        animation: false,
        series: [
            {
                name: '电力',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 11,
                startAngle: 210,
                endAngle: -30,
                center: ['50%', '50%'],
                radius: '90%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.01, 'lime'], [1, 'gray']],
                        width: 3,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {
                    show: false,        // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: false
                },
                splitLine: {
                    show: false,           // 分隔线
                    length: 25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {
                    show: false,       // 分隔线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5,
                    offsetCenter: [0, 0],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        color: '#fff',
                        fontSize: 50
                    }
                },
                data: [{value: 1, name: json.tag}]
            },
            {
                name: '虚线',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 15,
                startAngle: 210,
                endAngle: -30,
                center: ['50%', '50%'],
                radius: '80%',
                axisLine: {
                    show: false,            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.01, 'lime'], [1, 'gray']],
                        width: 0,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {
                    show: false,        // 坐标轴小标记
                },
                axisTick: {            // 坐标轴小标记
                    length: 2,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10,
                        width: 2,
                    }
                },
                splitLine: {
                    show: false           // 分隔线
                },
                pointer: {
                    show: false
                },
                detail: {
                    show: false
                }
            }

        ]
    };

    myChart.setOption(option);
    chartExt(option, json.score||0);
}

function getCategory() {
    var myChart = echarts.init(document.getElementById('category'));
    var colors = ['#CDF83E', '#90EE90', '#675bba'];


    if(!json.homeLine) {
        json.homeLine={}
    }

    var option = {
        color: colors,
        title: {
            text: '平均电价对比',
            textStyle: {
                color: 'white'
            }
        },
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: json.homeLine.legend||['本企业', '本行业'],
            right: 5,
            top: 20,
            textStyle: {
                color: 'white'
            }
        },
        grid: {
            top: 50,
            bottom: 30,
            left: 40,
            right: 30
        },
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "#515D73"
                }
            },
            boundaryGap: false,
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return params.value + '：' + params.seriesData[0].data;
                    }
                }
            },
            data: json.homeLine.x||["7月", "8月", "9月", "10月", "11月", "12月"]
        },
        yAxis: {
            type: 'value',

            axisLine: {
                lineStyle: {
                    color: "#515D73"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#515D73"
                }
            }
        },
        series: [
            {
                name: (json.homeLine.legend&&json.homeLine.legend[0])||'本企业',
                type: 'line',
                // smooth: true,
                data: json.homeLine.data&&json.homeLine.data[0]||[0, 0, 0, 0, 0, 0],
                areaStyle: {
                    normal: {
                        color: "#3F503E"
                    }
                },
                lineStyle: {
                    normal: {
                        color: "#CDF83E"
                    }
                }
            },
            {
                name: (json.homeLine.legend&&json.homeLine.legend[1])|| '本行业',
                type: 'line',
                // smooth: true,

                data:  json.homeLine.data&&json.homeLine.data[1]|| [0, 0, 0, 0, 0, 0],
                areaStyle: {
                    normal: {
                        color: "#3AB682"
                    }
                },
                lineStyle: {
                    normal: {
                        color: "#3AB682"
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}


function getDetail(id,obj) {
    // $('#'+id).empty();
    var myChart = echarts.init(document.getElementById(id));

    if(!obj) {
        obj = {};
    }

    if (myChart) {
        myChart.clear();
    }


    var colors = ['#EFB741', '#45B88B'];


    var option = {
        color: colors,
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: obj.legend||['本企业', '本行业'],
            left: 30,
            top: 5
        },
        grid: {
            top: 30,
            bottom: 30,
            left: 30,
            right: 20
        },
        xAxis: [
            {
                boundaryGap: false,
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: "#B7B7B9"
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return  params.value + '：' + params.seriesData[0].data;
                        }
                    }
                },
                data: obj.x||["7月", "8月", "9月", "10月", "11月", "12月"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: "#B7B7B9"
                    }
                },
            }
        ],
        series: [
            {
                name: obj.legend&&obj.legend[0]||'本企业',
                type: 'line',
                // smooth: true,
                data: obj.data&&obj.data[0]||[0, 0, 0, 0, 0, 0],

                areaStyle: {normal: {}},
            },
            {
                name: obj.legend&&obj.legend[1]||'本行业',
                type: 'line',
                // smooth: true,
                data: obj.data&&obj.data[1]||[0, 0, 0, 0, 0, 0],
                areaStyle: {normal: {}},
            }
        ]
    };
    myChart.setOption(option);
}


function chartExt(option, value) {
    setTimeout(function () {

        var myChart = echarts.init(document.getElementById('dashboard'));

        option.series[0].axisLine.lineStyle.color[0][0] += 0.03;
        option.series[0].data[0].value += 3;
        option.series[1].axisLine.lineStyle.color[0][0] += 0.03;
        myChart.setOption(option);
        if (option.series[1].axisLine.lineStyle.color[0][0] * 100 < value) {
            chartExt(option, value);
        } else {
            option.series[0].axisLine.lineStyle.color[0][0] = parseFloat(value / 100).toFixed(2);
            option.series[1].axisLine.lineStyle.color[0][0] = parseFloat(value / 100).toFixed(2);
            option.series[0].data[0].value = value;
            myChart.setOption(option);
        }
    }, 1);
}


function getRadar() {
    var myChart = echarts.init(document.getElementById('radarChart'));

    if(!json.radar){
        json.radar = {};
    }
    var option = {
        radar: [
            {
                indicator: json.radar.text||[
                    {text: '负载率'},
                    {text: '尖峰谷'},
                    {text: '功率因数'}
                ],
                center: ['50%', '50%'],
                radius: 68,
                startAngle: 45,
                splitNumber: 2,
                shape: 'circle',
                name: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#686B70'
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['#F4FAF8'],
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 10
                    }
                },

                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#E1E7E5'
                    }
                }
            }
        ],
        series: [
            {
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        // color: 各异,
                        lineStyle: {
                            width: 4,
                            color: "#95D3CE"
                        }
                    }
                },
                data: [
                    {
                        value:json.radar.data|| [0, 0, 0, 0],
                        name: '图一',
                        symbol: 'rect',
                        symbolSize: 6,
                        lineStyle: {
                            normal: {
                                width: 0,
                                color: "#95D3CE"
                            }
                        },
                        // label:{
                        //     color:"#95D3CE"
                        // },
                        areaStyle: {
                            normal: {
                                color: "rgba(98,214,206,0.9)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0,
                                color: "#95D3CE"
                            }
                        }
                    }
                ]
            }
        ]
    }
    myChart.setOption(option);
}


$(function () {
    getDashboard();

    getCategory();
})

$(".ui-dialog").dialog("hide");
// $('#doc-modal-1').modal({content: 'Popover via JavaScript'});

$(function () {




    var swiper = ""

    // 按钮1点击
    $("#btn1").tap(function () {
        var dia2 = $("#pointDetail").dialog("show");

        getRadar();
    });
    $("#pointDetail span.closed").tap(function () {
        $("#pointDetail").dialog("hide");
    })

    var timeout = "";
    // 长按钮点击
    $('#uButton').tap(function () {
        var pro = $("#process").find("span");
        $("#fly_next").css("display", "none");
        $("#fly").css("display", "block")
        pro.css("width", "1%")

        var num = 0;
        var dia = $("#updateDetail").dialog("show");

        var timeout = setInterval(function () {
            num++;
            pro.css("width", parseInt(pro.css("width")) + 1 + "%")
            if (num >= 99) {
                clearInterval(timeout);
                $("#fly").css("display", "none")
                $("#fly_next").css("display", "block")
            }
        }, 25)

    })
    $("#updateDetail span.closed").tap(function () {
        $("#updateDetail").dialog("hide")
    })

    // 按钮2点击
    $('#detail1').tap(function () {
        var dia1 = $("#effect").dialog("show");
        getDetail('line1',json.slideLine&&json.slideLine[0]);

        if (!swiper) {

            swiper = new Swiper('.swiper-container', {
                //  direction: 'vertical',
                loop: false,
                autoHeight: true,

                // 如果需要分页器
                pagination: '.swiper-pagination',

                onSlideChangeEnd: function (swiper) {
                    var title = '';


                    getDetail('line' + (swiper.realIndex + 1),json.slideLine&&json.slideLine[swiper.realIndex]);
                }


            })
        }


    })
    $("#effect span.closed").tap(function () {
        $("#effect").dialog("hide")
    })


    $("#updateDetail .content li.cli").tap(function (e) {


        var modal = $(this).hasClass("modal");
        var modal = $(this).hasClass("modal");

        var suggest = $(this).hasClass("suggest");
        var expect = $(this).hasClass("expect");
        var rate = $(this).hasClass("rate");
        var price = $(this).hasClass("price");
        if(modal) {
            var text = $(this).attr("data-text") || "";
            $("#subtext").html(text);
            $("#updateDetail").dialog("hide")
            $("#goto").dialog("show")
        }else if(suggest){
            $("#updateDetail").dialog("hide")
            $("#suggest").dialog("show")

        }else if(expect){
            $("#updateDetail").dialog("hide")
            $("#expect").dialog("show")

        }else if(rate){
            $("#updateDetail").dialog("hide")
             $("#chartRate").dialog("show")
            drawChart("chartRateA",json.arr[0].subData&&json.arr[0].subData.legend,json.arr[0].subData&&json.arr[0].subData.x,json.arr[0].subData&&json.arr[0].subData.data)

        }else if(price){
            $("#updateDetail").dialog("hide")
             $("#chartPrice").dialog("show")
            drawChart("chartPriceA",json.arr[0].subData&&json.arr[0].subData.legend,json.arr[0].subData&&json.arr[0].subData.x,json.arr[0].subData&&json.arr[0].subData.data)

        }else{
            window.location.href = "http://127.0.0.1:38080/powerinner/showDetailPage?consNo=" + json.consNo;
            return false;
        }

    })
    $("#goto span.closed").tap(function () {
        $("#updateDetail").dialog("show")

        $("#goto").dialog("hide")
    })
    $("#suggest span.closed").tap(function () {
        $("#suggest").dialog("hide")
    })
    $("#expect span.closed").tap(function () {
        $("#expect").dialog("hide")
    })
    $("#chartRate span.closed").tap(function () {
        $("#chartRate").dialog("hide")
    })
    $("#chartPrice span.closed").tap(function () {
        $("#chartPrice").dialog("hide")
    })

    $(".showExpect").tap(function() {
        $("#expect").dialog("show")
    })




    // var myChart = echarts.init(document.getElementById("chartPriceA"));




});


function drawChart(domId,legend,xAxis,data) {
    var myChart = echarts.init(document.getElementById(domId));

    var option = {
        color: ["#2EA9DC","#ABF0C3"],
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: legend,
            left: 5,
            top: 0,
            // orient:'vertical',
            textStyle: {
                color: '#979998'
            }
        },
        grid: {
            top: 55,
            bottom: 30,
            left: 30,
            right: 20
        },
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: "#515D73"
                }
            },

            boundaryGap: false,
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '月份  ' + params.value;
                    }
                }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    color: "#ccc"
                }
            },
            data: xAxis
        },
        yAxis: {
            type: 'value',

            // name:"(月为单位)",
            axisLine: {
                lineStyle: {
                    color: "#515D73"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#ccc"
                }
            },
            axisTick:{
              show:false
            },
            axisLabel:{
                show:false
            }
        },
        series: [
            {
                name: legend[0],
                type: 'line',
                smooth: true,
                data: data[0],
                areaStyle: {
                    normal: {
                        color: "#2EA9DC"
                    }
                },
                lineStyle: {
                    normal: {
                        color: "#2EA9DC"
                    }
                }
            },
            {
                name: legend[1],
                type: 'line',
                smooth: true,

                data: data[1],
                areaStyle: {
                    normal: {
                        color: "#ABF0C3"
                    }
                },
                lineStyle: {
                    normal: {
                        color: "#ABF0C3"
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}