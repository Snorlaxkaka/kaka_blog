<template>
  <div
    class="main-container page-about d-flex flex-column ai-center pt-9 content"
  >
    <div class="page p-5">
      <div class="py-4">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">关于自己</span>
      </div>
      <div class="pl-5 text-green-1">
        <p>• 应届毕业生一只，目前所在：广东惠州</p>
        <p>• 未来希望成为一名优秀的前端开发</p>
        <p>• 业余爱好是锻炼和骑单车</p>
      </div>
      <div class="py-4 mt-6">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">Side Project (Coding)</span>
      </div>
      <div class="pl-5 text-green-1 mb-9">
        <p>
          <a
            href="https://github.com/zonemeen/vue-node-blog"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • myBlog(本博客)
          </a>
          -- 🔥基于NodeJs、Vue、MongoDB实现的一款伪全栈博客系统
        </p>
        <p>
          <a
            href="https://github.com/zonemeen/musicn"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • Musicn
          </a>
          -- 🎵基于NodeJs实现的下载高品质音乐的命令行工具
        </p>
        <p>
          <a
            href="https://github.com/zonemeen/react-notion-avatar"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • react-notion-avatar
          </a>
          -- ✨用于生成Notion风格头像的 React 库及网址
        </p>
        <p>
          <a
            href="https://github.com/zonemeen/mogu-app-vue"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • 蘑菇记账
          </a>
          -- 🤑基于Vue全家桶、TypeScript、Echarts实现的一款极简的本地记账应用
        </p>
        <p>
          <a
            href="https://github.com/zonemeen/weapp-mogu-bill"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • 蘑菇记账(小程序版)
          </a>
          -- 💰原生小程序实现的一款蘑菇记账应用
        </p>
        <p>
          <a
            href="https://github.com/zonemeen"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • 其他项目
          </a>
          - 持续开发中...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.content {
  line-height: 1.8 !important;
}

.bd-bottom-about {
  border-bottom: 1px solid grey;
  &.bd-bottom-about:hover {
    color: map-get($colors, 'red');
  }
}
</style>
