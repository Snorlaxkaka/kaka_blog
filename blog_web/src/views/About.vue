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
            href="http://159.75.178.129:8251/#/"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • kakaBlog(本博客)
          </a>
          -- 基于Express、Vue、MongoDB实现的全栈博客系统
        </p>
        <p>
          <a
            href="http://159.75.178.129:8253/#/"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            • 山的部落社团管理系统
          </a>
          -- 毕业设计--为校内“山的部落”社团开发的社团管理系统
        </p>
        <p>
          <a
            href="http://159.75.178.129:8256/"
            target="_blank"
            class="text-green-1 bd-bottom-about"
          >
            •react_tetris
          </a>
          -- 基于React、Redux实现的一个web端俄罗斯方块小游戏
        </p>
        <p>• 其他项目 - 持续开发中...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.content {
  line-height: 1.8 !important;
}

.bd-bottom-about {
  border-bottom: 1px solid grey;
  &.bd-bottom-about:hover {
    color: map-get($colors, "red");
  }
}
</style>
