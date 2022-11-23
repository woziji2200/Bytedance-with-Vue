<template>
    <div style="height: 64px;"></div>
    <div class="banner">
        <h1>我们在多个城市设有办公室</h1>
    </div>
    <div class="location">
        <locations v-for="location in locations" :location="location"></locations>
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