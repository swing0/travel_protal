<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部景点</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="" href="#"></a>
          <!-- <c:forEach var="subject" items="${subjectList }">
                            <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
          </c:forEach>-->
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total==0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>
          <!-- /无数据提示 结束-->
          <article v-if="data.total>0" class="i-teacher-list">
            <ul class="of">
              <li v-for="spot in data.items" :key="spot.id">
                <section class="i-teach-wrap">
                  <div class="t-infor-pic">
                    <a :href="'/spot/'+spot.id" :title="spot.title" target="_blank">
                      <img src="~/assets/photo/teacher/1442297885942.jpg" alt>
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
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{undisable: !data.hasPrevious}"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)">首</a>
            <a
              :class="{undisable: !data.hasPrevious}"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.current-1)">&lt;</a>
            <a
              v-for="page in data.pages"
              :key="page"
              :class="{current: data.current == page, undisable: data.current == page}"
              :title="'第'+page+'页'"
              href="#"
              @click.prevent="gotoPage(page)">{{ page }}</a>
            <a
              :class="{undisable: !data.hasNext}"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.current+1)">&gt;</a>
            <a
              :class="{undisable: !data.hasNext}"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)">末</a>
            <div class="clear"/>
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /景点列表 结束 -->
  </div>
  
</template>

<script>
import spotApi from '@/api/spot.js'
import vod from '@/api/vod'

export default {
  asyncData({ params, error }) {
    return spotApi.getSpotList(1, 8)
    .then(response => {
      return { data: response.data.data }
    });
  },
  methods:{
    // data(){
    //   return{
    //     playAuth:''
    //   }
    // },
    //分页切换
    gotoPage(page){
      spotApi.getSpotList(page,8)
      .then(response => {
        this.data = response.data.data 
      })
    },
    // getVodInfo(vid){
    //     vod.getPlayAuth(vid)
    //       .then(response => {
    //         this.playAuth = response.data.data.playAuth
    //       })
    // }
  },
  // mounted(){//页面渲染之后执行
  //       new Aliplayer({
  //           id: 'J_prismPlayer',
  //           vid: this.vid, // 视频id
  //           playauth: this.playAuth, // 播放凭证
  //           encryptType: '1', // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
  //           width: '100%',
  //           height: '500px',
  //           // 以下可选设置
  //           cover: '', // 封面
  //           qualitySort: 'asc', // 清晰度排序

  //           mediaType: 'video', // 返回音频还是视频
  //           autoplay: false, // 自动播放
  //           isLive: false, // 直播
  //           rePlay: false, // 循环播放
  //           preload: true,
  //           controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
  //           useH5Prism: true, // 播放器类型：html5
  //       }, function(player) {
  //           console.log('播放器创建成功')
  //       })
  //   }
};
</script>