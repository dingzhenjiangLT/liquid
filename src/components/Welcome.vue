<template>
<div id="home" ><div class="content">
<div class="slides">
    <div class="slide" style="display: block;">
        <div class="poster" style='background-image: url("static/img/logo2.png");'></div>
        <div class="slide-content">
            <div class="logos">
                <img src="static/img/logo2.png" style="animation:home-logos-image 0.6s 0.3s backwards;"> 
                <div class="plus" style="animation:home-logos-plus 0.9s 0.6s backwards;">-</div>
                <h1 class="plus" style="animation:home-logos-plus 0.9s 0.6s backwards;">摇滚分类学</h1>
            </div>
            
            <h1 class="title" style="opacity: 1;">
                
                    <div class="line">
                        <div class="sizer">"Well I love your screams of passion"</div>
                        <div class="display" style="animation:home-line-display-one 0.6s 0.3s backwards;">"Well I love your screams of passion"</div>
                    </div>
                
                    <div class="line">
                        <div class="sizer">"我爱你那充满激情的尖叫"</div>
                        <div class="display" style="animation:home-line-display-three 0.9s 0.6s backwards;">"我爱你那充满激情的尖叫"</div>
                    </div>
                     <div class="line">
                        <div class="sizer">"In the long hot summer night"</div>
                        <div class="display" style="animation:home-line-display-one 1.2s 0.9s backwards;">"In the long hot summer night"</div>
                    </div>
                     <div class="line">
                        <div class="sizer">"在这漫长而炎热的夏夜" -- 《Don't Stop》</div>
                        <div class="display" style="animation:home-line-display-one 1.5s 1.2s backwards;">"在这漫长而炎热的夏夜"  -- 《Don't Stop》</div>
                    </div>  
            </h1>
</div>
    </div>

</div>
 <div id="open-the-sound" style="transform: matrix(1, 0, 0, 1, 0, 0);" @click="Soundcontrol" >
         <div class="label" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);" >Satisfaction</div>
           </div>
</div>
<div class="media">
<div class="splash">
    <video ref="myvideo" width="1536" height="864" style="margin-top: -58.5px; margin-left: 0px; opacity: 1;" src="static/video/TheRollingStones.mp4" autoplay="" type="video/mp4" controls muted></video>
    <div class="splash-overlay-black" style="width: 100%; height: 100%; position: absolute; opacity: 0.6;"></div>
</div>
</div>
</div>
</div>

</template>

<script>
import Vue from 'vue'

export default {  
  data () {  
    return {  
        
    }  
  },      
  methods: {  
    Soundcontrol: function () {
    const self = this;  
    if(this.$refs.myvideo.muted){
        this.$refs.myvideo.muted=false;
    }else{
        this.$refs.myvideo.muted=true;
    }
    }  
  }

} 


function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}



function Broadcast (){
var vList = ["static/video/TheRollingStones.mp4","static/video/TheNumber1.mp4","static/video/U-MEN The Fumes LIVE.mp4" ];
var vlabel = ["(I Can't Get No) Satisfaction","Number of the Beast","The Fumes LIVE"] 
var vLen = vList.length; 
var display = document.getElementsByClassName("display")

var curr = 0; 
var myvideo = document.getElementsByTagName("video")[0]
var songname = document.getElementsByClassName("label")[0]


myvideo.addEventListener('ended', play);

play();
function play(e) {
    for(var n=0;n<display.length;n++){
               display[n].style.color="#ffffff"
       }
   songname.innerHTML = vlabel[curr]
   display[curr].style.color = "#FF4500"
   display[curr].style.transition = "all 0.3s ease"
   myvideo.src = vList[curr];
   myvideo.play();
   curr++;
   if (curr >= vLen) curr = 0; 
   }
}
 addLoadEvent(Broadcast)


</script>

<style>


#home {
    width: 100%;
    height: 100%;
}

html, body {
    font: normal normal normal 10pt / normal Arial, Helvetica, sans-serif;
    color: #9e9e9e;
    overflow-x: hidden; overflow-y: hidden;
}

#home .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1002;
}
#home .media {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1001;
    width: 100%;
    height: 100%;
}
.splash {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
}
.splash img, .splash video {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
}
.splash-overlay-black {
    background-color: #000000;
}


#home .slides {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
#home .slides .slide {
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1;
}
#home .poster {
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
    transform-origin: 0% 0%;
}
#home .slides .slide .slide-content {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 90%;
    height: 80%;
    pointer-events: none;
}
#home .slides .logos {
    position: relative;
    height: 140px;
    line-height: 140px;
    margin-bottom: 10vh;
    transition: all 2s ease;
}
#home .slides .title {
    text-transform: uppercase;
    color: white;
    font-family: gothic,Arial,Helvetica,sans-serif;
    font-size: 4.5em;
    line-height: 0.9;
    letter-spacing: 0.1em;
}

#home .slides .title .line {
    overflow: hidden;
    position: relative;
    float: left;
    clear: both;
    transition: all 1s ease;
}
#home .slides .title .line .sizer {
    opacity: 0;
}
#home .slides .title .line .display{
    position: absolute;
    top: 0px;
    left: 0px;
    transform-origin: 0% 0%;

}
#home .slides .logos img {
    height: 100%;
    display: inline-block;
    float: left;
   transform-origin: 0% 0%;
}
#home .slides .logos .plus {
    color: white;
    font-size: 3em;
    display: inline-block;
    float: left;
    margin: 0 .5em;
    transform-origin: 0% 0%;
   
}

#home .tabs .tab {
    width: 40px;
    height: 2px;
    margin-bottom: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateX(-100%);
    overflow: hidden;
    position: relative;
    display: inline-block;
}
#home .tabs .tab .slider {
    background-color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);

}

#home #open-the-sound {
    position: absolute;
    top: 20%;
    right: -3px;
    border: rgba(255, 255, 255, 0.5) solid 3px;
    z-index: 1002;
    overflow: hidden;
    display: block;
    font-size: 16px;
    background: none;
    width: 240px;
    padding: 15px;
    text-align: left;
    font-family: gothic,Arial,sans-serif;
    color: #fff;
    letter-spacing: 2px;
    /* text-transform: uppercase; */
    cursor: pointer;
    transition: color .2s;
}

/* #home #open-the-sound:before, */

#home #open-the-sound:after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height:100%;
  background-color: white;
/*   transition: all 0.2s cubic-bezier(0.15, 0.75, 0.49, 0.93); */
  transform:scaleY(0);
  z-index: -1;
}

#home #open-the-sound:after {
  transform-origin: top left;
/*   bottom: 0; */
  right: 0;
}
#home #open-the-sound:hover {
  color:#ff0000;
  transition: color .2s ;
}

#home #open-the-sound:hover:after {
  animation: view-reel-hover 0.5s cubic-bezier(0.15, 0.75, 0.49, 0.93) both;
} 


@keyframes view-reel-hover {
  0% {
    transform:scaleY(1) scaleX(0);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
} 

@keyframes home-line-display-one {
  from {
    opacity: 0;
    transform: matrix(1, 0, 0, 1 ,0 , 80);
  }
  to {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0)；
  }
}
@keyframes home-line-display-two {
  from {
    opacity: 0;
    transform: matrix(1, 0, 0, 1 ,0 , 80);
  }
  to {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0)；
  }
}
@keyframes home-line-display-three {
  from {
    opacity: 0;
    transform: matrix(1, 0, 0, 1 ,0 , 80);
  }
  to {
    opacity: 1;
    transform: matrix(1, 0, 0, 1, 0, 0)；
  }
}
@keyframes home-logos-image {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes home-logos-plus {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
