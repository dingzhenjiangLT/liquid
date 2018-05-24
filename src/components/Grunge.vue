<template>
<div id="Rock">
    <div>
     <div class="band mouse" :style = "style[0]">
  <!-- 图片信息 -->
        <div :style="{ width: clientWidth/4 + 'px', backgroundImage : 'url(' + items[m[0].ind].backgroundImage + ')'}" style='animation:band-image-in 0.6s 0.3s backwards;'>
            
        </div>
 <!-- 文字说明 -->
       <div style="animation:band-label-in 0.5s 0.4s backwards; ">
        <div>
            <h2>"{{items[m[0].ind].title}}"</h2>
            <h1>{{items[m[0].ind].band}}</h1>
            <h3>
                <a href="#">优秀专辑推荐</a> 
            </h3>
            <h3>{{items[m[0].ind].age}}</h3>
            <h4>{{items[m[0].ind].AlbumFirst}}</h4>
            <h4>{{items[m[0].ind].AlbumSecond}}</h4>
            <h4>{{items[m[0].ind].AlbumThird}}</h4>
        </div>
    </div>

     </div>

     <div class="band mouse" :style = "style[1]" >
  <!-- 图片信息 -->
        <div :style="{ width: clientWidth/4 + 'px',  backgroundImage : 'url(' + items[m[1].ind].backgroundImage + ')' }" style='animation:band-image-in 0.6s 0.3s backwards;'>
            
        </div>
 <!-- 文字说明 -->
       <div style="animation:band-label-in 0.5s 0.4s backwards; ">
        <div>
             <h2>"{{items[m[1].ind].title}}"</h2>
            <h1>{{items[m[1].ind].band}}</h1>
            <h3>
                <a href="#">优秀专辑推荐</a> 
            </h3>
            <h3>{{items[m[1].ind].age}}</h3>
            <h4>{{items[m[1].ind].AlbumFirst}}</h4>
            <h4>{{items[m[1].ind].AlbumSecond}}</h4>
            <h4>{{items[m[1].ind].AlbumThird}}</h4>
        </div>
    </div>

     </div>
     <div class="band mouse" :style = "style[2]">
     <div :style="{ width: clientWidth/4 + 'px' , backgroundImage : 'url(' + items[m[2].ind].backgroundImage + ')' }" style='animation:band-image-in 0.6s 0.3s backwards;'>
            
        </div>
 <!-- 文字说明 -->
       <div style="animation:band-label-in 0.5s 0.4s backwards;">
        <div>
           <h2>"{{items[m[2].ind].title}}"</h2>
            <h1>{{items[m[2].ind].band}}</h1>
            <h3>
                <a href="#">优秀专辑推荐</a> 
            </h3>
            <h3>{{items[m[2].ind].age}}</h3>
            <h4>{{items[m[2].ind].AlbumFirst}}</h4>
            <h4>{{items[m[2].ind].AlbumSecond}}</h4>
            <h4>{{items[m[2].ind].AlbumThird}}</h4>
        </div>
    </div>

     </div>
        <div class="band mouse"  :style = "style[3]">
     <div :style="{ width: clientWidth/4 + 'px', backgroundImage : 'url(' + items[m[3].ind].backgroundImage + ')' }" style='animation:band-image-in 0.6s 0.3s backwards;'>
            
        </div>
 <!-- 文字说明 -->
       <div style="animation:band-label-in 0.5s 0.4s backwards; ">
        <div>
             <h2>"{{items[m[3].ind].title}}"</h2>
            <h1>{{items[m[3].ind].band}}</h1>
            <h3>
                <a href="#">优秀专辑推荐</a> 
            </h3>
            <h3>{{items[m[3].ind].age}}</h3>
            <h4>{{items[m[3].ind].AlbumFirst}}</h4>
            <h4>{{items[m[3].ind].AlbumSecond}}</h4>
            <h4>{{items[m[3].ind].AlbumThird}}</h4>
        </div>
    </div>

     </div>
 <div class="band mouse" :style = "style[4]" >
     <div :style="{ width: clientWidth/4 + 'px', backgroundImage : 'url(' + items[m[4].ind].backgroundImage + ')' }" style='animation:band-image-in 0.6s 0.3s backwards;'>
            
        </div>
 <!-- 文字说明 -->
       <div style="animation:band-label-in 0.5s 0.4s backwards; ">
        <div>
             <h2>"{{items[m[4].ind].title}}"</h2>
            <h1>{{items[m[4].ind].band}}</h1>
            <h3>
                <a href="#">优秀专辑推荐</a> 
            </h3>
            <h3>{{items[m[4].ind].age}}</h3>
            <h4>{{items[m[4].ind].AlbumFirst}}</h4>
            <h4>{{items[m[4].ind].AlbumSecond}}</h4>
            <h4>{{items[m[4].ind].AlbumThird}}</h4>
        </div>
    </div>

     </div>
    </div>
<div class="scrollbar"  style="bottom:42px; width: 1536px; height: 15px;">
    <div  v-roll="greet" ref="roll" id="roll" :style="{ width: clientWidth/bandlength*4 + 'px', left : '0px'}" >
    </div>
</div>
</div>
</template>
<script>
import Vue from 'vue'
   Vue.directive('roll',                                
        {
        bind:function (el, binding) {
                let oDiv = el;   
                let self = this; 
                let clientWidth = document.documentElement.clientWidth
                oDiv.onmousedown = function (e) {
                
                    let disX = e.clientX - oDiv.offsetLeft;

                  
                    document.onmousemove = function (e) {
                    let l = e.clientX - disX;
                   
                    if(l < 0) {
                         l = 0;
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
              m: [{ind:0},{ind:1},{ind:2},{ind:3},{ind:4}],
              items: [],
              bandlength: "" ,
              clientWidth: document.documentElement.clientWidth,
              val: '',
              y: ''  ,
              vals:'' ,
              style:[{
                  left: '0px' , 
                  width: document.documentElement.clientWidth/4 + 'px', 
                  transform:''},
                  {
                  left:  document.documentElement.clientWidth/4 + 'px' , 
                  width: document.documentElement.clientWidth/4 + 'px', 
                  transform: ''},
                   {
                  left:  document.documentElement.clientWidth/2 + 'px' , 
                  width: document.documentElement.clientWidth/4 + 'px', 
                  transform: ''},
                  {
                  left:  document.documentElement.clientWidth/4*3 + 'px' , 
                  width: document.documentElement.clientWidth/4 + 'px', 
                  transform: ''},
                  {
                  left:  document.documentElement.clientWidth + 'px' , 
                  width: document.documentElement.clientWidth/4 + 'px', 
                  transform: ''},

              ]  
            }
            },           
       methods:{
          
                greet(val){
                    var _this = this;
                    var y = val.x *_this.bandlength/4;
                    var Unit = _this.clientWidth/_this.bandlength
                    let Remainder = (val.x - Unit)/Unit
                    let floor = Math.floor(Remainder);
                    for(var i = 0; i < _this.style.length; i++){                 
                     _this.style[i].transform = 'translateX(' + -y + 'px)'
                     }

                     _this.val = floor
                }
                  
},
          watch:{
                   val: function (newVal, oldVal) {
                    var _this = this
                    var x = _this.val
                    var y = x + 1
                    var clientWidth = _this.clientWidth
                    if(newVal > oldVal & newVal >= 0){
                    _this.style[x].left =  clientWidth + clientWidth/4*y + 'px';
                    _this.m[x].ind += 5 
                    }else if(newVal < oldVal & newVal >= 0){
                    _this.style[y].left =  clientWidth/4*y + 'px';
                    _this.m[y].ind -= 5 
                    }else{
                     _this.style[0].left = 0 + 'px';
                      _this.m[0].ind = 0;
                    }
                 }
            },

            
      created () { 
      this.$http.get('/api/Grunge').then((data) => { 
      this.items = data.body.data;
      this.bandlength = data.body.data.length;
      });
  
  } ,
       
      };


</script>

<style>

</style>
