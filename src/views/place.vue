<template>
    <div style="height: 64px;"></div>
    <div class="banner2">
        <h1>我们在多个城市设有办公室</h1>
    </div>
    <div class="location">
        <locations v-for="location in locations" :location="location"></locations>
        <button class="button1">查看更多城市在招职位</button>

    </div>
</template>


<script>
import locations from '@/components/locations.vue'
export default{
    name:"place",
    components:{
        locations,
    },
    data(){
        return{
            locations:[
                {
                    img:require('@/assets/location/1.png'),
                    name:"北京",
                    pinyin:"BEIJING"
                },
                {
                    img:require('@/assets/location/1.png'),
                    name:"北京",
                    pinyin:"BEIJING"
                },
                {
                    img:require('@/assets/location/1.png'),
                    name:"北京",
                    pinyin:"BEIJING"
                },
                {
                    img:require('@/assets/location/1.png'),
                    name:"北京",
                    pinyin:"BEIJING"
                },
                {
                    img:require('@/assets/location/1.png'),
                    name:"北京",
                    pinyin:"BEIJING"
                },
                {
                    img:require('@/assets/location/1.png'),
                    name:"北京",
                    pinyin:"BEIJING"
                }
            ]
        }
    }
}
</script>
<style scoped>
@import '@/css/placeStyle.css';
</style>