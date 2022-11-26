<template>
<div class="product" :style="b">
    <img :src="tag.img" alt="">
    <p data-aos="fade-up" data-aos-duration="800">{{tag.name}}</p>
    <!-- {{index+1}} -->
</div>

</template>
<style scoped>
    .product{
        margin-left: 15px;
        margin-right: 15px;
    }
    .product:hover p{
        color: dodgerblue;
    }
    .product:hover img{
        transform: scale(1.2);
        box-shadow:0px 0px 20px rgba(1, 1, 1, 0.4);
    }
    p{
        text-align: center;
        font-size: 14px;
        cursor: pointer;
    }
    img{
        width: 64px;
        height: 64px;
        border-radius: 16px ;
        transform-origin: bottom;
        transition: all 0.2s;
    }
</style>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos/dist/aos.js'

export default{
    name:"products",
    props:{
        tag:Object,
        index:Number
    },
    data(){
        return{
            b:""
        }
    },
    mounted(){
        // if(this.index+1==7) this.b="margin-top:0px"
        this.b="margin-top:"+ 180/14*Math.abs(7.5-(this.index+1)) +"px"
    }
}
</script>