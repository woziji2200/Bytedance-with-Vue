<template>
<div>
    <h2 :class="type=='type1'?'typeh1':'typeh2'" data-aos="fade-up" data-aos-duration="800">{{t1}}</h2>
    <p :class="type=='type1'?'type1':'type2'"  data-aos="fade-up" data-aos-duration="800">{{t2}}</p>
    <p class="detail" v-if="type=='type1'?false:true"  data-aos="fade-up" data-aos-duration="800">{{detail}}</p>
</div>
</template>
<style scoped>
.detail{
    position: static;
    color: #646a73;
    letter-spacing: 1.5px;
    line-height: 18px;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
}
.detail::after{
    content: '';
    width: 100%;
    height: 1px;
    background-color: #cacaca;
    margin-top: 40px;
    display: block;
}
div{
    position: relative;
}
.typeh1{
    font-size: 32px;
}
.typeh2{
    font-size: 28px;
}

p{
    position: absolute;
    color: rgb(239, 239, 239);
    font-weight: bolder;
    letter-spacing: 10px;
    z-index: -2;
}
.type1{
    font-size: 40px;
    top:-44px;
}
.type2{
    font-size: 90px;
    top:-131px;
    font-weight: bold;
}
</style>
<script>
export default{
    name:"title",
    props:{
        t1:String,
        t2:String,
        type:String,
        typeh:String,
        detail:String
    }
}
</script>