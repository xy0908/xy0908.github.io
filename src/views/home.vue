<template>
  <div class="home">
    <img class="w-200px h-200px" src="../assets/img/1.png" alt="小云感觉你很可爱" draggable="false">
    <div class="my-20px">我很可爱，请给我钱！</div>
    <router-link class="but" to="">要康康我别的项目吗？</router-link>
    <div class="flex justify-center my-20px w-full">
      <div>
        <div class="flex flex-col items-center mx-20px">
          <i class="iconfont icon-QQ mb-20px text-25px"></i>
          <div class="flex justify-center items-center w-150px h-150px 
                  border-rounded-10px cursor-pointer transition-all-300 
                  hover:scale-130 xs:w-200px xs:h-200px" style="border: 3px dashed #00A3EE ; ">
            <img class="flex justify-center items-center w-90% h-90%" src="../assets/img/qq.jpg" alt=""
              draggable="false">
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-col items-center mx-20px">
          <i class="iconfont icon-weixin mb-20px text-25px"></i>
          <div class="flex justify-center items-center w-150px h-150px 
                  border-rounded-10px cursor-pointer transition-all-300 
                  hover:scale-130 xs:w-200px xs:h-200px" style="border: 3px dashed #1AAD19 ; ">
            <img class="flex justify-center items-center w-90% h-90%" src="../assets/img/wx.jpg" alt=""
              draggable="false">
          </div>
        </div>
      </div>
    </div>
    <div class="my-20px text-12px text-center">如果能留下你的称呼和备注/链接就再好不过了，我将会把您添加至赞助者列表中。（没留的话，就默认使用可以看到的 ID
      叫「好心人」了～）（也可以联系我添加链接）</div>
  </div>

  <div class="my-40px   w-full text-center text-14px c-#fff">
    <div class="m-x-a w-70%">
      谢谢你们的支持！ 您的每一份支持，都是激励我创造出更多有趣、有价值的事物的动力。
      愿这个世界更美好也更加有趣，也愿诸位与我都能成为自己想要成为的人。
    </div>
  </div>

</template>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 700px;
  color: #fff;
  background: #1b1b1b;


  .but {
    box-sizing: border-box;
    padding: 5px 10px 5px 18px;
    font-size: 13px;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;
    border: 1px solid #d8b4fe;
    color: #d8b4fe;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgb(147 51 234);
      border: 1px solid rgb(147 51 234);
      color: #fff;
    }

  }
}
</style>
