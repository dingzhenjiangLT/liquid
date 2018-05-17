<template>
  <div id="app">
  <div class="header" id="navi">
        <div class="menu-current" style="left: 0px; width: 219px;" slug="home">
            <div>
               <router-link to="/Welcome"><h1>首页</h1></router-link>
                <span class="block">
                </span>
                <span>
                </span>
            </div>
            <div>
                <h1>首页</h1>  
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div>
        </div> 
    <div class="button-base"  style="left:220px; width: 219px;" slug="硬摇滚">
            <div>
              <router-link to="/Hardrock"><h1>硬摇滚</h1></router-link>
                <span class="block">
                </span>
                <span>
                </span>
            </div>
            <div>
              <h1>硬摇滚</h1>
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div>
        </div> 
        <div class="button-base"  style="left:440px; width: 219px;" slug="重金属">
            <div>
             <router-link to="/Heavymetal"><h1>重金属</h1></router-link>
                <span class="block"></span>
            </div>
            <div>
                <h1>重金属</h1>
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div> 
        </div>
         <div class="button-base"  style="left:660px; width: 219px;" slug="迷幻摇滚">
            <div>
            <router-link to="/PsychedelicRock"><h1>迷幻摇滚</h1></router-link>
                <span class="block"></span>
            </div>
            <div>
                <h1>迷幻摇滚</h1>
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div>
        </div>
        <div class="button-base"  style="left:880px; width: 219px;" slug="垃圾摇滚">
            <div>
            <router-link to="/Grunge"><h1>垃圾摇滚</h1></router-link>
                <span class="block"></span>
            </div>
            <div>
                <h1>垃圾摇滚</h1>
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div>
        </div>
          <div class="button-base"  style="left:1100px; width: 219px;" slug="艺术摇滚">
            <div>
            <router-link to="/ProgRock"><h1>前卫摇滚</h1></router-link>
                <span class="block"></span>
            </div>
            <div>
                <h1>前卫摇滚</h1>
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div>
        </div> 
            <div class="button-base"  style="left:1320px; width:219px;" slug="艺术摇滚">
            <div>
            <router-link to="/Punk"><h1>朋克</h1></router-link>
                <span class="block"></span>
            </div>
            <div>
                <h1>朋克</h1>
                <span class="block">
                </span>
                <span class="bottom-border">
                </span>
            </div>
        </div> 
        
    </div>
<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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


function menucurrent(){
    var header = document.getElementsByClassName("header")[0]
    var odiv = header.getElementsByTagName("div")
    var odiv = header.childNodes
    for(var i=0;i<odiv.length;i++){
        odiv[i].index=i;
        odiv[i].onclick=function(){
           var odiv = header.childNodes
            for(var n=0;n<odiv.length;n++){
                odiv[n].className="button-base"
       }
              odiv[this.index].className="menu-current"
     }
   }
}






addLoadEvent(menucurrent)

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body, div, span, object, iframe,a, h1, h2, h3, h4, h5, h6, p, blockquote, pre, hr, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-weight: normal;
    background: transparent;
    font-family: inherit;
    color: inherit;
    text-transform: inherit;
    pointer-events: inherit;
    opacity: inherit;
    
    text-decoration:none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
}

.header#navi {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9000;
    width: 100%;
    height: 50px;
    background-color: #ddd;
}


.header{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9000;
    width: 100%;
    height: 50px;
    background-color: #ddd;
}
.header .button-base, .menu-current {
  text-decoration:none;
    position: absolute;
    top: 0px;
    height: 50px;
    box-sizing: border-box;
    perspective: 1000px;
}
.header .button-base > div, .menu-current > div {
    position: absolute;
    height: 50px;
    
    width: 100%;
    padding-left: 28px;
    padding-top: 10px;
    box-sizing: border-box;
    transition: all 0.2s ease;
    transform-origin: 50% 50% -25px;
 
}
.header .button-base > div:nth-child(1){
    color: #808080;
    background-color: #000000;
    transform: rotateX(90deg);
}

.header .button-base > div:nth-child(2){
    color: #808080;
    background-color: #ffffff;
    transform: rotateX(0deg);
}
.header .button-base > div h1, .menu-current > div h1 {
    font-family: "TrumpGothicEastBold",Arial,Helvetica,sans-serif;
    font-size: 16px;
    font-smooth: always;
    line-height: 30px;
    letter-spacing: 1px;
}
.header .button-base > div:nth-child(2) .block, .menu-current > div:nth-child(2) .block{
    background-color: #c7c7c7;
}
.header .button-base > div .block {
    display: block;
    width: 4px;
    height: 16px;
    margin-left: -10px;
    margin-top: -23px;
    background-color: #c7c7c7
}

.header .button-base > div .bottom-border, .menu-current > div .bottom-border {
    position: absolute;
    top: 49px;
    left: 0px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ddd;
}

.header .menu-current > div {
    transition: all 0.2s ease;
}

.header .menu-current > div:nth-child(1){
    color: #808080;
    background-color: #000000;
    transform: rotateX(0deg);
}

.header .menu-current > div:nth-child(2){
    color: #808080;
    background-color: #ffffff;
    transform: rotateX(-90deg);
}
.header .menu-current > div .block{
    display: block;
    width: 4px;
    height: 16px;
    margin-left: -10px;
    margin-top: -23px;
    background-color: #c7c7c7;
}
.header .button-base:hover {
  cursor: pointer;
}
.header .button-base:hover > div {
  transition: all 0.2s ease;
}
.header .button-base:hover > div .bottom-border {
  background-color: #000000;
}
.header .button-base:hover > div:nth-child(1) {
  color: #ffffff;
  transform: rotateX(0deg);
}
.header .button-base:hover > div:nth-child(2) {
  color: #000000;
  background-color: #000000;
  transform: rotateX(-90deg);
}


#navi.header .menu-current > div .bottom-border {
  background-color: #000000;
}
#navi.header .menu-current > div:nth-child(1) {
  color: #ffffff;
  transform: rotateX(0deg);

}
#navi.header .menu-current > div:nth-child(1) .block {
  background-color: #ff0000;
}
#navi.header .menu-current > div:nth-child(2) {
  color: #000000;
  background-color: #000000;
  transform: rotateX(-90deg);
}



html, body {
  font: normal normal normal 10pt / normal Arial, Helvetica, sans-serif;
  color: #9e9e9e;
}
</style>
