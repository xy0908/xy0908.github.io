<template>
  <div class='flex justify-center items-center w-full h-60px xs:h-100px c-#fff'>
    <div class="nav flex justify-center items-center" v-for="(item, index) in headerIcon" :key="index"
      @click="pageJump(item.path)">
      <i :class='item.icon' :style="{
        color: item.status ? '#0078E7' : '#fff'
      }"></i>
    </div>
  </div>
</template>
<script setup>
import useNav from "@/hooks/useNav";

const router = useRouter();
const { headerIcon, changeRoute } = useNav();

const pageJump = (path) => {
  changeRoute(path);
  router.push({
    name: path
  })
}
</script>

<style lang="scss" scoped>
.nav {
  margin: 0 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;

  i {
    font-weight: 600;
    font-size: 22px;
    transition: all 0.3s;
  }


  &:hover {
    background-color: #fff;

    i {
      color: #0078E7 !important;
    }
  }

}
</style>
