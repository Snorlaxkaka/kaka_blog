<template>
  <div class="foot">
    <div class="border-bottom border-top obg-navcolr bg-foot">
      <div class="d-flex py-6 jc-center">
        <div class="px-7 hand">
          <a
            href="https://github.com/linjunjie2023?tab=repositories"
            target="_blank"
            class="text-grey-1"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
    <div class="footer pt-3 bg-navcolor bg-foot">
      <div class="pt-5 d-flex jc-center">
        <div class="px-8 mb-4">
          <div class="text-grey-2 fs-sm">
            <p class="load">只要你想走，路就在你的脚下。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: [],
      currentTime: '232',
      startTime: 1583856000000,
      timeCha: '232321',
      timeObj: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      showTime: true,
      intTime: null,
    }
  },
  created () {
    this.getTime()
  },
  beforeDestroy () {
    clearInterval(this.intTime)
  },
  methods: {
    async fetchArticles () {
      const res = await this.$http.get('articles/recent')
      this.model = res.data
    },
    async getTime () {
      let res = await this.$http.get('/time')
      this.currentTime = res.data.data
      this.timeCha = this.currentTime - this.startTime
      this.getCountTime(this.timeCha)
      this.intTime = setInterval(() => {
        this.timeCha += 1000
        this.getCountTime(this.timeCha)
      }, 1000)
    },
    // 将倒计的时间戳换算成天、时、分、秒
    getCountTime (time) {
      let countTime = {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      }
      countTime.day = Math.floor(time / (24 * 60 * 60 * 1000))
      countTime.hour = Math.floor(
        (time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      )
      countTime.minute = Math.floor(
        ((time % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000)
      )
      countTime.second = Math.floor(
        (((time % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) /
        1000
      )
      this.$nextTick(() => {
        this.timeObj = countTime
        this.showTime = true
      })
    },
  },
  mounted () {
    this.fetchArticles()
  },
}
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  bottom: 0;
  left: 0;
}
.bg-foot {
  background-color: #020003;
}
</style>
