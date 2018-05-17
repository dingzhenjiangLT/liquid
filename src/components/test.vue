<template>
<div id="box">                                                   
    位置
    <h1>x:{{val.x}}</h1> <h1>y:{{val.y}}</h1>
    <div v-roll="greet" :style="style">
    
    </div>
</div>
</template>

<script>
import Vue from 'vue'
 Vue.directive('roll',//自定义指令                                   
        {bind:function (el, binding) {
                let oDiv = el;   //当前元素
                let self = this;  //上下文
                let clientWidth = document.documentElement.clientWidth
                oDiv.onmousedown = function (e) {
                 //鼠标按下，计算当前元素距离可视区的距离
                    let disX = e.clientX - oDiv.offsetLeft;
                   
                    document.onmousemove = function (e) {
                      //通过事件委托，计算移动的距离 
                        let l = e.clientX - disX;
                       
                      //移动当前元素  
                      if(l<0) {
                         l=0;
                        }else if(l> clientWidth - oDiv.offsetWidth){
                         l = clientWidth - oDiv.offsetWidth;
                         }

                        oDiv.style.left = l + 'px';
                        binding.value({x:l})
                         
                       
                    };
                    document.onmouseup = function (e) {
                    
                        document.onmousemove = null;
                        document.onmouseup = null;
                     };
                };
            }
        }
    );

        export default {
  
            data(){
              return{
                val: '',
                style: {
                    width: "100px",
                    height: "100px",
                    background: "aqua",
                    position: "absolute",
                    right: "30px",
                    top: 0
                  }
                
            }
            },
            methods:{
            //接受传来的位置数据，并将数据绑定给data下的val
                greet(val){
                    this.val = val;
                }
            } ,
            
      };
</script>

<style>
.select-item {
  background-color: #5bc0de;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  margin-right: 10px;
  cursor:pointer;
  padding: 6px 20px;
  color: #fff;
}
 .cursored{
  cursor: default;
}
.project-content,.people-content {
    margin: 30px 50px;
}
.people-content {
    margin-top: 30px;
}
.drag-div {
    border: 1px solid #5bc0de;
    padding:10px;
    margin-bottom: 10px;
    width: 800px;
    cursor: pointer;
}
.select-project-item {
    display: inline-block;
    text-align: center;
    border-radius: 3px;
}
.drag-people-label{
  margin-bottom:0;
  padding-right:10px;
}
[v-cloak]{
    display:none;
}
/* #box > div{
   width: 100px;
                    height: 100px;
                    background: aqua;
                    position: absolute;
                    right: 30px;
                    top: 0
} */
</style>


