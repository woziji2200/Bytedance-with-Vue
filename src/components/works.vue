<template>
    <div class="works" v-if="index!=7">
        <div class="img1"> 
            <img :src="tag.img" alt="">
        </div>
        <p  data-aos="fade-up" data-aos-duration="800">{{ tag.name }}</p>
    </div>

    <div class="work2" v-if="index==7">
        <div class="img1"> 
            <div class="img1-black"></div>
            <img :src="tag.img" alt="">
        </div>
        <p><br></p>
        <div class="all">
            <p class="all-p">全部职位</p>
            <svg class="arrow-more_svg__icon" viewBox="0 0 1450 1024" width="32" height="32"><path fill="white" d="M1390.933 546.133L972.8 964.267c-17.067 17.066-51.2 17.066-68.267 0L896 955.733c-17.067-17.066-17.067-51.2 0-68.266l324.267-332.8H76.8c-25.6 0-42.667-17.067-42.667-42.667v-8.533c0-25.6 17.067-42.667 42.667-42.667h1160.533L896 119.467c-17.067-17.067-17.067-51.2 0-68.267l8.533-8.533c17.067-17.067 51.2-17.067 68.267 0L1390.933 460.8c8.534 8.533 8.534 17.067 17.067 25.6v8.533c0 34.134-8.533 42.667-17.067 51.2z"></path></svg>
        </div>
    </div>
</template>
<style scoped>
.work2{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
}
.work2:hover img{
    transform: scale(1.2);
}
.work2:hover .img1{
    box-shadow:0px 0px 25px rgba(1, 1, 1, 0.4);
}
.img1-black{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.404);
    z-index: 5;
}
.all{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    transform: translateY(-45px);
    z-index: 6;

}
.all-p{
    color: white;
    font-weight: bolder;
}
.works {
    width: 25%;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
}
.works:hover img{
    transform: scale(1.2);
}
.works:hover .img1{
    box-shadow:0px 0px 20px rgba(1, 1, 1, 0.7);
}
.works:hover p{
    color: dodgerblue;
}
.img1{
    height: 216px;
    height: 216px;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.4s;
    position: relative;
}
img {
    width: 216px;
    transition: all 0.3s;
    border-radius: 50%;
    height: 216px;
}

p {
    cursor: pointer;
    font-size: 24px;
    transition: all 0.4s;
}
</style>
<script>
export default {
    name: "works",
    props: {
        tag: Object,
        index: Number
    }
}
</script>