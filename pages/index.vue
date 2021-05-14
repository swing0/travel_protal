<template>
  
  <div>
      <!-- 幻灯片 开始 -->
      <div v-swiper:mySwiper="swiperOption" v-if="bannerList.length">
        <div class="swiper-wrapper">
          <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide" style="background: #040B1B;">
              <a target="_blank" :href="banner.linkUrl">
                  <img :src="banner.imageUrl" :alt="banner.title">
              </a>
          </div>
          <div class="swiper-pagination swiper-pagination-white"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </div>
      </div>
      <!-- 幻灯片 结束 -->
    
     <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门景区</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="scenic in scenicList " :key="scenic.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="scenic.cover"
                        class="img-responsive"
                        :alt="scenic.title"
                      >
                      <div class="cc-mask">
                        <a :href="'/scenic/'+scenic.id" title="点击查看" class="comm-btn c-btn-1">点击查看</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :href="'/scenic/'+scenic.id" :title="scenic.title" class="course-title fsize18 c-333">{{scenic.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(scenic.price) === 0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                    </section>
                  </div>
                </li>
                
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/scenic" title="全部课程" class="comm-btn c-btn-2">全部景区</a>
            </section>
          </div>
        </section>
      </div>
      <!-- 景区 结束 -->
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="" href="#"></a>
        </section>
      </header>
      <!-- 景点 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门景点</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="spot in spotList" :key="spot.id">
                  <section class="i-teach-wrap">
                    <div class="t-infor-pic">
                      <a :href="'/spot/'+spot.id" :title="spot.title">
                        <img :alt="spot.title" src="~/assets/photo/teacher/1442297885942.jpg">
                      </a>
                    </div>
                  </section>
                  <section class="c-tab-title">
                  <div class="mt15 i-q-txt">
                    <a :href="'/spot/'+spot.id" :title="spot.title" target="_blank" class="fsize18 c-666" >{{spot.title}}</a>
                  </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/spot" title="全部景点" class="comm-btn c-btn-2">全部景点</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /热门景点 结束 -->
    </div>
  </div>
</template>

<script>
import banner from '@/api/banner.js'
import index from '@/api/index.js'

export default {
  data () {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        loop: true, 
        initialSlide: 0,
        pagination: { el: '.swiper-pagination' }, // 分页按钮
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          //console.log('onSlideChangeEnd', swiper.realIndex)
        }
      },
      bannerList:[],
      scenicList:[],
      spotList:[]
    }
  },
  created(){
    this.getBannerList(),
    this.getHotScenicSpot()
  },
  methods:{
    //查询热门景区和景点
    getHotScenicSpot(){
      index.getIndexData()
        .then(response => {
          this.scenicList = response.data.data.scenicList
          this.spotList = response.data.data.spotList
        })
    },
    //查询banner数据
    getBannerList(){
      banner.getListBanner()
        .then(response => {
          this.bannerList = response.data.data.list
        })
    },
  } 
}
</script>