<template>
  
  <div>
      <!-- 幻灯片 开始 -->
      <div v-swiper:mySwiper="swiperOption">
          <div v-for="banner in bannerList" :key="banner.id" class="swiper-wrapper" style="background: #040B1B;">
              <a target="_blank" :href="banner.linkUrl">
                  <img :src="banner.imageUrl" :alt="banner.title">
              </a>
          </div>
          <div class="swiper-pagination swiper-pagination-white"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
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
                        <a href="#" title="点击查看" class="comm-btn c-btn-1">点击查看</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a href="#" :title="scenic.title" class="course-title fsize18 c-333">{{scenic.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(scenic.price) === 0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">{{scenic.viewCount}}人查看</i>
                        |
                        <i class="c-999 f-fA">{{scenic.buyCount}}人购买</i>
                      </span>
                    </section>
                  </div>
                </li>
                
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部景区</a>
            </section>
          </div>
        </section>
      </div>
      <!-- 景区 结束 -->
      <!-- 景点 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">景点</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="spot in spotList" :key="spot.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a href="/spot/1" :title="spot.title">
                        <img :alt="spot.title" :src="spot.title">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a href="/spot/1" :title="spot.title" class="fsize18 c-666">{{spot.title}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">北京师范大学法学院副教授</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p
                        class="c-999 f-fA"
                      >北京师范大学法学院副教授、清华大学法学博士。自2004年至今已有9年的司法考试培训经验。长期从事司法考试辅导，深知命题规律，了解解题技巧。内容把握准确，授课重点明确，层次分明，调理清晰，将法条法理与案例有机融合，强调综合，深入浅出。</p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="#" title="全部讲师" class="comm-btn c-btn-2">全部景点</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
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
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev'//前一页dom节点
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
    }
  } 
}
</script>