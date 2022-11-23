<template>
<h4  data-aos="fade-up" data-aos-duration="800">{{title}}</h4>
<p v-for="name in content"  data-aos="fade-up" data-aos-duration="800">{{name}}</p>
<br>
</template>
<style scoped>
h4{
    font-size: 20px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}
p{
    font-size: 13px;
    line-height: 10px;
    letter-spacing: 1px;
    color: #646a73;
    display: inline;
}
</style>
<script>
export default{
    name:"detail1",
    props:{
        title:String,
        content:Array
    }
}
</script>