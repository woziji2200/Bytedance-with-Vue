<template>
<div class="story">
    <div class="story-img">
        <img :src="msg.img" alt="">
    </div>
    <p class="story-title"  data-aos="fade-up" data-aos-duration="800">{{msg.title}}</p>
    <div class="story-name"  data-aos="fade-up" data-aos-duration="800">
        {{msg.name}}
        <span></span>
        {{msg.position}}
    </div>
    <p class="story-detail"  data-aos="fade-up" data-aos-duration="800">
        {{msg.detail}}
    </p>
    <button>
        <svg class="arrow-more_svg__icon" viewBox="0 0 1450 1024" width="32" height="32"><path fill="currentColor" d="M1390.933 546.133L972.8 964.267c-17.067 17.066-51.2 17.066-68.267 0L896 955.733c-17.067-17.066-17.067-51.2 0-68.266l324.267-332.8H76.8c-25.6 0-42.667-17.067-42.667-42.667v-8.533c0-25.6 17.067-42.667 42.667-42.667h1160.533L896 119.467c-17.067-17.067-17.067-51.2 0-68.267l8.533-8.533c17.067-17.067 51.2-17.067 68.267 0L1390.933 460.8c8.534 8.533 8.534 17.067 17.067 25.6v8.533c0 34.134-8.533 42.667-17.067 51.2z"></path></svg>
    </button>
</div>
</template>

<style scoped>
span{
    height: 12px;
    width: 1px;
    display: inline-block;
    background-color: #1f2329;
    margin-left: 3px;
    margin-right: 3px;
    transform: translateY(1px);
}
img{
    width: 216px;
    height: 216px;
}
.story{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 300px;
    height: 470px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 40px;
    cursor: pointer;
    border-radius: 15px;
}
.story:hover{
    /* box-shadow: ; */
    box-shadow:0px 0px 16px rgba(1, 1, 1, 0.209);

}
.story-title{
    font-size: 22px;
    color: #1f2329;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.story-name{
    font-size: 14px;
    color: #1f2329;
}
.story-detail{
    font-size: 14px;
    color: #646a73;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 1px;
}
button{
    margin-top: 20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #8f8f8f;
    border: solid 1px #8f8f8f;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}
.story:hover button{
    color: #007aff;
    border:  solid 1px #007aff;
}
</style>
<script>
export default{
    name:"bdstory",
    props:{
        msg:Object
    }
}
</script>