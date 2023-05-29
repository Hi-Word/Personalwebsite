  
    /* 第一部分 触碰日期显示不同的案件过程 */
    function showEventId(){ 
        //获取时间线的按钮
        var timelines = document.getElementsByClassName("buttons");
        //定义一个数组，存放已被点击的日期按钮区内容和按钮
        var shows = new Array(document.getElementById("event7"),document.getElementsByClassName("buttonsOver")[0]);
        //被修改的图片
        var changeImg;
         for(i=0;i<timelines.length;i++){
             //当前按钮创建一个属性存放按钮序号
             timelines[i].ii = i;
             timelines[i].onmouseover = function(){
                 //如果之前已经触碰过按钮则把之前显示的内容隐藏
                 if(shows != null){
                    shows[0].setAttribute("style","display:none");
                    shows[1].setAttribute("class","buttons");
                 }
                 var eventId = "event"+this.ii;
                 //寻找日期对应内容
                 var event = document.getElementById(eventId);
                 //显示内容
                 event.setAttribute("style","");
                 this.setAttribute("class","buttonsOver");
                 shows[0] = event;
                 shows[1] = this;
             }     
         }
     }

     /* 第二部分点击案件经过或事件处置显示不同内容 */
     function changeBottom(caseButton){
        //事件处置区
        var container = document.getElementById("container");
        //事件处置按钮
        var case2 = document.getElementById("case2");
        //事件处置图片
        var caseImg2 = document.getElementById("caseImg2");
        //案件经过区
        var eventHandling = document.getElementById("eventHandling");
        //案件经过按钮
        var case1 = document.getElementById("case1");
        //案件经过图片
        var caseImg1 = document.getElementById("caseImg1");

         if(caseButton === case1){                       //案件经过
             casePassing();
         }
         else{                              //事件处置
             caseHandling();
         }
         //鼠标移开案件经过或事件处置按钮后，还原头顶的图片
        function defaultBottom(outButton,caseImgs){
            outButton.setAttribute("class","casebutton");      //改变非当前页按钮属性
            caseImgs.setAttribute("src","images/soneArrow.png");           //改变非当前页按钮头顶图片         
        }

        function casePassing(){
            container.setAttribute("style","display: none");          //案件处置隐藏
            eventHandling.setAttribute("style","");                 //事件经过显示
            caseImg1.setAttribute("src","images/stwoArrow.png");    //修改按钮1上图片
            case1.setAttribute("class","caseover");           //修改按钮1样式
            defaultBottom(case2,caseImg2);       //修改按钮2
        }

        function caseHandling(){
            eventHandling.setAttribute("style","display: none");      //事件经过隐藏
            container.setAttribute("style","");         //案件处置显示
            case2.setAttribute("class","caseover");           //修改按钮2样式
            caseImg2.setAttribute("src","images/stwoArrow.png");   //修改按钮2上图片
            defaultBottom(case1,caseImg1);       //修改按钮1
        }
     }
     
     window.onload = showEventId;
     
    /* //水平线宽度调整
     function hrWidth(){
         //得到时间框的宽度
         var timeline_width = timeline.offsetWidth;
         //设置第一个hr标签的宽度
         hr[0].style.width = (timeline_width - 38/100 * timeline_width) +"px";
         if(timeline_width < 1500){
             hr[0].style.width = (timeline_width -5/100 * timeline_width+"px");
         }
     }
     hrWidth();
     window.onresize = function () {
         //得到时间框的宽度
         var timeline_width = timeline.offsetWidth;
         hr[0].style.width = (timeline_width - 38 / 100 * timeline_width) + "px";
         if (timeline_width < 1500) {
             hr[0].style.width = (timeline_width - 5 / 100 * timeline_width + "px");
         }
     };*/