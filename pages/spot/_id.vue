<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 景点介绍 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">景点介绍</span>
        </h2>
      </header>
      <div class="t-infor-wrap">
        <!-- 景点基本信息 -->
        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <h3 class="hLh30">
              <span class="fsize24 c-333">{{spot.title}}</span>
            </h3>
            <section class="t-infor-pic">
              <img width="50%" :src="spot.cover">
            </section>
            <section class="t-infor-txt">
              <p
                class="mt20"
              >{{spot.content}}</p>
            </section>
            <div class="clear"></div>
          </div>
        </section>
        <div class="clear"></div>
      </div>
      <section class="mt30">
        <div>
          <header class="comm-title all-teacher-title c-course-content">
            <h2 class="fl tac">
              <span class="c-333">所属景区</span>
            </h2>
            <section class="c-tab-title">
              <a href="javascript: void(0)">&nbsp;</a>
            </section>
          </header>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="scenic.id==''">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list">
            <ul class="of">
              <li>
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="scenic.cover" class="img-responsive" >
                    <div class="cc-mask">
                      <a :href="'/scenic/'+scenic.id" title="查看景区" target="_blank" class="comm-btn c-btn-1">查看景区</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/scenic/'+scenic.id" :title="scenic.title" target="_blank" class="course-title fsize18 c-333">{{scenic.title}}</a>
                  </h3>
                </div>
              </li>
              
            </ul>
            <div class="clear"></div>
          </article>
        </div>
      </section>
    </section>
    <!-- /讲师介绍 结束 -->
  </div>
</template>
<script>
import spotApi from '@/api/spot.js'
import vod from '@/api/vod'
export default {
  data(){
    return{
      spot:{},
      scenic:{}
    }
  },
  created(){
    this.getSpot()
  },
  methods:{
    getSpot(){
      spotApi.getSpotInfo(this.$route.params.id)
        .then(response => {
          this.spot = response.data.data.spot,
          this.scenic = response.data.data.scenic
        })
    }
  }
};
</script>