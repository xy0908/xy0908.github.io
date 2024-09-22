<template>
  <div class="flex justify-center  w-full h-50px xs:h-70px">
    <el-popover v-for="(icon, index) of footerIcon" :key="index" placement="top-start" trigger="hover" effect="dark"
      :content="icon.text">
      <template #reference>
        <div
          class="flex justify-center items-center mx-20px w-30px h-30px border-rounded-50%  transition-all-300 cursor-pointer   hover:scale-115"
          @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = -1"
          :style="{ backgroundColor: hoverIndex === index ? icon.bg : '' }">
          <i :class="icon.icon" class='hover:text-22px'
            :style="{ color: hoverIndex === index ? icon.hoverColor : icon.color, fontSize: '20px' }"></i>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
const footerIcon = ref([
  {
    icon: "iconfont icon-github",
    text: "GitHub:xy0908",
    color: "#fff",
    bg: "#fff",
    hoverColor: "#000"
  },
  {
    icon: "iconfont icon-twitter",
    text: "Twitter:@xiaobai63313896",
    color: "#1da1f2",
    bg: "#1da1f2",
    hoverColor: "#fff"
  },
  {
    icon: "iconfont icon-Bzhan",
    text: "B站:小羊睡不醒aaa",
    color: "#fb7299",
    bg: "#fb7299",
    hoverColor: "#fff"
  },
  {
    icon: "iconfont icon-weixin",
    text: "微信:ystx2846",
    color: "#1AAD19",
    bg: "#1AAD19",
    hoverColor: "#fff"
  }
])

const hoverIndex = ref(-1);
</script>

<style lang="scss" scoped></style>
