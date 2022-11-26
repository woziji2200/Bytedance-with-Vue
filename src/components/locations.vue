<template>
<div class="l1">
    <div class="l2">
        <span class="s1">{{location.name}}</span>&nbsp
        <span class="s2">{{location.pinyin}}</span>
    </div>
    <div class="l3">
        <button>了解更多</button>
        <button>查看职位</button>
    </div>
    <div class="black"></div>
    <img :src="location.img" alt="">

</div>
</template>
<style scoped>
.black{
    width: 100%;
    height: 100%;
    background-color: black;
    display: none;
    opacity: 0.3;
    z-index: 0;
}
.l1{
    width:473px;
    height: 282px;
    position: relative;
    overflow: hidden;
    margin-top: 40px;
    border-radius: 20px;
    
    /* margin-bottom: 40px; */
}
.l1:hover .black{
    display: block;
}
.l1 img{
    width:100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0px;
}
.l2{
    position: absolute;
    top: 20px;
    left: 20px;
}
.l3{
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 1;
}
button{
    width: 80px;
    height: 28px;
    border: solid 2px white;
    background-color: transparent;
    margin-right: 20px;
    border-radius: 2px;
    color: white;
}
button:hover{
    background-color: #3370ff;
    border: solid 2px #185dff;
}
.s1{
    color: white;
    font-size: 28px;
    font-weight: bolder;
}
.s2{
    color: rgb(255, 255, 255,0.5);
    font-size: 24px;
    font-weight: bolder;
}

</style>
<script>
export default{
    name:'locations',
    props:{
        location:Object
    }
}
</script>