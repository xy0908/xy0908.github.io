<template>
  <div class="like-girls">
    <div class="title">!大家都是我的天使!</div>
    <ul class="content">
      <li v-for="(item,index) in likeGirls" :key="index" @click="pageJump(item.link)">
        <img class="img" :src="item.img" :alt="item.name">
        <span class="name">{{ item.name }}</span>
        <span class="from">{{ item.from }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const likeGirls = [
  {
    name: "结城明日奈",
    from: "刀剑神域",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b36828-j5ib0adAzGMx.png",
    link: "https://zh.moegirl.org.cn/结城明日奈",
  },
  {
    name: "青山七海",
    from: "樱花庄的宠物女孩",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b64167-qMxw0Sijwc18.png",
    link: "https://zh.moegirl.org.cn/青山七海",
  },
  {
    name: "丹生谷森夏",
    from: "中二病也要谈恋爱",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b65871-yuJ1aq2vynvC.png",
    link: "https://zh.moegirl.org.cn/丹生谷森夏",
  },
  {
    name: "康娜卡姆依",
    from: "小林家的龙女仆",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b120974-cZHsjS8DX9WW.png",
    link: "https://zh.moegirl.org.cn/康娜卡姆依",
  },
  {
    name: "校条祭",
    from: "罪恶王冠",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/46083.jpg",
    link: "https://zh.moegirl.org.cn/校条祭",
  },
  {
    name: "西宫硝子",
    from: "声之形",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b80243-RzxE51iUU5eq.png",
    link: "https://zh.moegirl.org.cn/西宫硝子",
  },
  {
    name: "加藤惠",
    from: "路人女主的养成方法",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b88748-zPL68ZFgFRH8.png",
    link: "https://zh.moegirl.org.cn/加藤惠",
  },
  {
    name: "古河渚",
    from: "CLANNAD",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b4604-YFJiWeuGSIYf.png",
    link: "https://zh.moegirl.org.cn/古河渚",
  },
  {
    name: "一行瑠璃",
    from: "HELLO WORLD",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b142131-tPOm5OKo9Yof.jpg",
    link: "https://zh.moegirl.org/一行瑠璃",
  },
  {
    name: "小鸟游六花",
    from: "中二病也要谈恋爱",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b65865-AC0ru7cDXUgK.png",
    link: "https://zh.moegirl.org.cn/小鸟游六花",
  },
  {
    name: "阿尼亚",
    from: "间谍过家家",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b138100-cHmE7Xfn05Rs.png",
    link: "https://zh.moegirl.org.cn/阿尼亚",
  },
  {
    name: "名濑美月",
    from: "境界的彼方",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b81753-lsPYVQvvD1TZ.png",
    link: "https://zh.moegirl.org/名濑美月",
  },
  {
    name: "千反田爱瑠",
    from: "冰菓",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b55133-S7lRrP0gKXpX.png",
    link: "https://zh.moegirl.org/千反田爱瑠",
  },
  {
    name: "楪祈",
    from: "罪恶王冠",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b43280-dxRTpIioqSg7.png",
    link: "https://zh.moegirl.org/楪祈",
  },
  {
    name: "樱岛麻衣",
    from: "青春笨蛋少年系列",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b127222-Jh5hhP7vZ7s1.png",
    link: "https://zh.moegirl.org/樱岛麻衣",
  },
  {
    name: "栗山未来",
    from: "境界的彼方",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b81751-nUEIrhRFlkKc.png",
    link: "https://zh.moegirl.org/栗山未来",
  },
  {
    name: "雏鹤爱",
    from: "龙王的工作",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b120673-cRr2ClHTLnfL.png",
    link: "https://zh.moegirl.org/雏鹤爱",
  },
  {
    name: "白",
    from: "No Game No Life",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b82525-sKk2FGRKN4aK.png",
    link: "https://zh.moegirl.org/%E7%99%BD(No_Game_No_Life_%E6%B8%B8%E6%88%8F%E4%BA%BA%E7%94%9F)",
  },
  {
    name: "北白川玉子",
    from: "玉子市场",
    img: "https://s4.anilist.co/file/anilistcdn/character/medium/b74850-V3gd7NLJWxfS.png",
    link: "https://zh.moegirl.org/北白川玉子",
  },
];

const pageJump = (link:string)=>{
  window.location.href = link
}
</script>

<style scoped lang="sass">
.like-girls
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

  .content
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin-top: 20px

    li
      display: flex
      flex-direction: column
      align-items: center
      margin: 10px 20px 10px
      padding-bottom: 20px
      width: 20%
      border-bottom: 1px solid transparent
      cursor: pointer
      transition: all 1s

      &:hover
        border-bottom-color: #1da1f2

      .img
        object-fit: cover
        object-position: center top 
        padding: 0.2rem
        width: 4rem
        height: 4rem
        border-radius: 50%
        background-color: #fff
        box-shadow: 0 0 1rem #0000001f
      
      .name
        font-size: 16px
        color: #1da1f2

      .from
        position: relative
        font-size: 12px
        font-weight: 700
        color: #555

        &::before
          content: "「"
          box-sizing: border-box
          border-width: 0
          border-style: solid
          border-color: #e5e7eb
          color: #555

        &::after
          content: "」"
          box-sizing: border-box
          border-width: 0
          border-style: solid
          border-color: #e5e7eb
          color: #555
</style>
