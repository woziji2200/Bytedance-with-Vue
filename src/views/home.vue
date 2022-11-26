<template>


<div class="banner">
    <div class="banner-title">
        <p class="banner-title-title">激发创造，丰富生活</p>
        <p class="banner-title-title2">JOIN BYTEDANCE</p>
        <div class="banner-title-search">
            <input type="text" placeholder="输入城市或职位进行搜索">
            <button><svg class="search_svg__icon" viewBox="0 0 1024 1024" width="20px" height="20px" fill="white"><defs></defs><path d="M769.13 673.493l144.683 144.683a21.333 21.333 0 0 1 0 30.165l-36.202 36.203a21.333 21.333 0 0 1-30.166 0L706.56 743.68A361.259 361.259 0 0 1 469.333 832c-200.298 0-362.666-162.368-362.666-362.667s162.368-362.666 362.666-362.666S832 269.035 832 469.333c0 75.712-23.19 146.006-62.87 204.16zM469.334 742.4C620.16 742.4 742.4 620.16 742.4 469.333S620.16 196.267 469.333 196.267s-273.066 122.24-273.066 273.066S318.507 742.4 469.333 742.4z"></path></svg></button>
        </div>

    </div>
    <div class="banner-buttom" @click="pageDown()">
        <button><svg class="arrow-down_svg__icon" viewBox="0 0 1024 1024" width="18px" height="18px" fill="white"><path d="M486.969 1014.101l-.683-.625-306.745-315.279a34.133 34.133 0 0 1 0-47.616l3.015-3.072a34.133 34.133 0 0 1 48.242-.682l.683.682 238.478 245.078-.057-858.454A34.133 34.133 0 0 1 504.036 0h3.3a34.133 34.133 0 0 1 34.132 34.133v870.97l250.653-257.594a34.133 34.133 0 0 1 48.242-.682l.682.682 3.015 3.072a34.133 34.133 0 0 1 0 47.616l-306.744 315.279a34.076 34.076 0 0 1-26.909 10.24h-2.105a34.02 34.02 0 0 1-21.333-9.615z"></path></svg></button>
        <div class="banner-buttom-line">
        </div>
    </div>
    <div class="banner-video">
        <video muted autoplay loop src="@/assets/gongquhunjian_1080.min.mp4"></video>
    </div>
</div>


<div class="mod1">
    <div class="mod1-title">
        <!-- <maintitle t1="Inspire creativity, enrich life" t2="Our Mission"></maintitle> -->

        <p class="mod1-title-2" data-aos="fade-up" data-aos-duration="800">Our Mission</p>
        <p class="mod1-title-1" data-aos="fade-up" data-aos-duration="800">Inspire creativity, enrich life</p>
        <p class="mod1-title-3"  data-aos="fade-up" data-aos-duration="800">字节跳动在全球推出了多款有影响力的产品，公司业务覆盖 150 个国家和地区</p>
    </div>
    <div class="mod1-products">
        <products v-for="(product,num) in products" :tag="product" :index="num"></products>
    </div>
    <div class="mod1-more">
        <button data-aos="fade-up" data-aos-duration="800">了解更多</button>
    </div>
</div>


<div class="mod2">
    <div class="mod2-title">
        <maintitle t1="探索你感兴趣的职位" t2="WHAT'S YOUR PASSION"></maintitle>

        <!-- <p class="mod2-title-2" data-aos="fade-up" data-aos-duration="800">WHAT'S YOUR PASSION</p>
        <p class="mod2-title-1" data-aos="fade-up" data-aos-duration="800">探索你感兴趣的职位</p> -->
    </div>

    <div class="mod2-works">
        <works v-for="(work,num) in works" :index="num" :tag="work"></works>
    </div>
</div>
 
<div class="mod3">
    <div class="mod3-title">
        <title2 t1="字节范" t2="BYTESTYLE" type="type1" typeh="typeh1"></title2>
        <p class="mod3-title-3"  data-aos="fade-up" data-aos-duration="800">字节范是字节跳动企业文化的重要组成部分，是我们共同认可的行为准则</p>
    </div>
    <div class="mod3-body">
        <div class="mod3-body-img">
            <img data-aos="fade-right" data-aos-duration="800" src="@/assets/detail/1.png" alt="" srcset="">
        </div>
        <div class="mod3-body-detail">
            <h3  data-aos="fade-up" data-aos-duration="800">始终创业</h3>
            <p data-aos="fade-up" data-aos-duration="800"> 保持创业心态，始终开创而不守成，创新而非依赖资源
                敏捷有效，最简化流程，避免简单事情复杂化
                对外敏锐谦逊，避免自满或优越感</p>
            <ul data-aos="fade-up" data-aos-duration="800">
                <li>多元兼容</li>
                <li>坦诚清晰</li>
                <li>求真务实</li>
                <li>敢为极致</li>
                <li>共同成长</li>
            </ul>
        </div>
    </div>
</div>

<div class="mod4">
    <div class="mod4-title">
        <title2 t1="字节生活" t2="BYTELIFE" type="type1"></title2>
    </div>

    <div class="mod4-1">
        <div class="mod4-1-detail">
            <title2 t1="我们的工作氛围" t2="01" type="type2"></title2>
            <detail1 title="务实高效的工作方式" :content="['关注本质，不形式主义，重视用户反馈和实际效果',
                '提倡创新创造，像创业第一天那样思考，保持活力',
                '坚持高标准，鼓励为更好的结果做突破性尝试']"></detail1>
            <detail1 title="平等坦诚的协作氛围" :content="['不讲 title，不论资排辈，可以对你的 Leader 直呼其名',
                '不做“向上管理”，避免过度包装而忽略实际效果',
                '内部信息公开透明，多数文档默认公开，群聊优于私聊']"></detail1>
            <detail1 title="多元兼容的工作环境" :content="['尊重个体差异，相信全球化的多元视角能带来更多启发',
                '招人不唯背景和资历，只要本质优秀，都能获得发展机会']"></detail1>
        </div>
        <div class="mod4-1-img">
            <img data-aos="fade-left" data-aos-duration="800" src="@/assets/detail/2.png" alt="">
        </div>
    </div>

    <div class="mod4-1">
        <div class="mod4-1-img">
            <img data-aos="fade-right" data-aos-duration="800" src="@/assets/detail/3.png" alt="">
        </div>
        <div class="mod4-1-detail">
            <title2 t1="字节式成长" t2="02" type="type2" detail="我们认为，为优秀人才提供好的成长土壤和多维度的实战机会，可以充分激发人才潜力，做出更有创造力的事"></title2>
            <ul data-aos="fade-up" data-aos-duration="800">
                <li>在鼓励真实成长的工作环境中，激发人才潜质</li>
                <li>通过开放的学习资源和针对性培训，拓宽思维边界</li>
                <li>团队人才密度高，和优秀的人同行，共同成长</li>
                <li>在多维度的实战机会中，实现能力跃升</li>
                <li>设置有区分度的激励，让优秀的人脱颖而出</li>
            </ul>
        </div>
    </div>

    <div class="mod4-1">
        <div class="mod4-1-detail">
            <title2 t1="全方位关爱你的生活" t2="03" type="type2"></title2>
            <detail1 title="营养均衡的餐饮和就近租房补贴" :content="['丰富的餐饮、零食、下午茶，及时补充能量；就近租房补贴，有效节省通勤时间，把精力投资在更有意义的事情上']"></detail1>
            <detail1 title="完善的商业保险" :content="['五险一金及补充商业保险，公司是你前进路上的坚实后盾']"></detail1>
            <detail1 title="多样的健康关怀" :content="['年度体检，配套健身设施，康体娱乐活动，“字节心晴”心理关怀，帮助大家健康快乐地工作和生活']"></detail1>
        </div>
        <div class="mod4-1-img">
            <img data-aos="fade-left" data-aos-duration="800" src="@/assets/detail/4.png" alt="">
        </div>
    </div>

    <div class="mod4-1">
        <div data-aos="fade-right" data-aos-duration="800" class="mod4-1-img">
            <img src="@/assets/detail/5.png" alt="">
        </div>
        <div class="mod4-1-detail">
            <title2 t1="感恩家人的支持与陪伴" t2="04" type="type2"></title2>
            <detail1 title="温暖的节日礼物" :content="['儿童节亲子礼物，春节家书礼盒，你和家人在一起的每个珍贵瞬间，我们都记在心上']"></detail1>
            <detail1 title="欢乐有趣的家庭活动日" :content="['请家人来看看 ByteDancer 们每天创造成绩的地方']"></detail1>
        </div>
    </div>

    <div class="mod4-1" style="flex-wrap: wrap;">
        <div class="mod4-1-detail">
            <title2 t1="信息助力公益 创造社会价值" t2="05" type="type2"></title2>
            <detail1 title="头条寻人 科技向善" :content="['“头条寻人”是一个面向全国的公益寻人项目。基于庞大的用户量，“头条寻人”根据走失人员的走失位置，回溯其有可能出现的地点，精确地将走失信息推送给该位置附近的用户。每一位打开定位和弹窗功能的用户，都有可能参与到寻人的公益活动中，帮助失散家庭团圆。截至 2021 年 8 月 26 日，已经帮助 16992 个家庭团圆，最快找到走失者仅用时 60 秒。']"></detail1>
            <div style="height: 50px;"></div>
        </div>
        <div class="mod4-1-img">
            <img data-aos="fade-left" data-aos-duration="800" src="@/assets/detail/7.jpg" alt="" style="border-radius: 8px;">
        </div>
        <div class="mod4-1-detail2">
            <div class="mod4-1-detail2-p">
                <detail1 title="抖音助力文旅扶贫" :content="['通过字节跳动在流量倾斜、人才培训、产品扶持和抖音认证的四个方面投入及运营，帮助国家级贫困县的特色文旅资源打造品牌，提升拉动当地文旅品牌影响力并持续带动相关产业的经营发展。截至目前，“山里 DOU 是好风光”已落地实施河南栾川、山西永和、四川甘孜稻城亚丁等项目']"></detail1>
            </div>
            <div class="mod4-1-detail2-img">
                <img data-aos="fade-left" data-aos-duration="800" src="@/assets/detail/8.jpg" alt="">
                <img data-aos="fade-left" data-aos-duration="800" src="@/assets/detail/9.jpg" alt="">
            </div>
        </div>
    </div>

</div>

<div class="mod5">
    <div class="mod5-title">
        <maintitle t1="员工故事" t2="BYTEDANCER STROY"></maintitle>
    </div>

    <div class="mod5-story">
        <bdstory v-for="story in storys" :msg="story"></bdstory>
    </div>


</div>
 

<br>
<br>
<br>
</template>
<style scoped>
@import '@/css/homeStyle.css';
</style>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos/dist/aos.js'
import products from "@/components/products.vue"
import works from "@/components/works.vue"
import title2 from "@/components/title.vue"
import detail1 from '@/components/detail1.vue'
import maintitle from '@/components/maintitle.vue'
import bdstory from '@/components/story.vue'
export default {
    name: "home",
    created(){
        AOS.init({once:true,offset:60});
        document.title="加入字节跳动";
    },
    methods:{
        pageDown(){
            document.documentElement.scrollTop =window.innerHeight
        },
    },
    data(){
        return{
            products:[
                {
                    name:123,
                    img:require("@/assets/products/1.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/2.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/3.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/4.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/5.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/6.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/7.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/8.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/9.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/10.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/11.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/12.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/13.png")
                },
                {
                    name:233,
                    img:require("@/assets/products/14.png")
                },
            ],
            works:[
                {
                    name:"研发",
                    img:require("@/assets/rd/1.png")
                },
                {
                    name:"产品",
                    img:require("@/assets/rd/2.png")
                },
                {
                    name:"运营",
                    img:require("@/assets/rd/3.png")
                },
                {
                    name:"设计",
                    img:require("@/assets/rd/4.png")
                },
                {
                    name:"市场",
                    img:require("@/assets/rd/5.png")
                },
                {
                    name:"销售",
                    img:require("@/assets/rd/6.png")
                },
                {
                    name:"职能/支持",
                    img:require("@/assets/rd/7.png")
                },
                {
                    name:"",
                    img:require("@/assets/rd/8.png")
                },
            ],
            storys:[
                {
                    img:require("@/assets/story/1.png"),
                    title:'从大学老师到算法工程师',
                    name:'沈池',
                    position:'AI - Lab 图像算法',
                    detail:'怀着一颗想出来闯荡的心，从学术界跳到了工业界；公司有着丰富的应用场景和海量数据资源，技术落地非常有保证。'
                },
                {
                    img:require("@/assets/story/2.png"),
                    title:'在多元兼容的环境里持续成长',
                    name:'Gill',
                    position:'国际化产品经理',
                    detail:'不同文化背景下的沟通是一种挑战，公司鼓励多元兼容，提倡集思广益，让我看到了广大可能性和成长空间。'
                },
                {
                    img:require("@/assets/story/3.jpg"),
                    title:'在这里，看见更大的世界',
                    name:'左儒哲',
                    position:'飞书 - 客户端',
                    detail:'比起其他公司，字节跳动可能更浪漫，或者说，有更大的梦想。这里不设边界，只要连接人与信息的事情，我们都会尝试…'
                },
            ]
        }
    },
    components:{
        products,
        works,
        title2,
        detail1,
        maintitle,
        bdstory
    },
}
</script>