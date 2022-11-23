<template>
<div>
    <p class="mod2-title-2" >{{t2}}</p>
    <p class="mod2-title-1" data-aos="fade-up" data-aos-duration="800">{{t1}}</p>
</div>
</template>
<style scoped>
div{
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
}
.mod2-title-1{
    width: 100%;
    font-size: 28px;
    font-weight:bolder;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 100px;
    z-index: 1;
}
.mod2-title-2{
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    transform: translateY(52px);
    /* top: -52px; */
    letter-spacing: 7px;
    color: rgb(230, 229, 229);
    z-index: 0;
}
</style>
<script>
export default{
    name:"mainTitle",
    props:{
        t1:String,
        t2:String
    }
}
</script>