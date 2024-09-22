const useNav = () => {
  // nav数据
  const headerIcon = ref([
    {
      icon: "iconfont icon-zhuye",
      hoverBg: "#fff",
      status: true,
      path: "home"
    },
    {
      icon: "iconfont icon-zhangdan",
      hoverBg: "#fff",
      status: false,
      path: "bill"
    },
    {
      icon: "iconfont icon-xiangmu",
      hoverBg: "#fff",
      status: false,
      path: "project"
    },
    {
      icon: "iconfont icon-guanyuwomen",
      hoverBg: "#fff",
      status: false,
      path: "about"
    }
  ])


  // 点击切换路由
  const changeRoute = (path) => {
    headerIcon.value.forEach((i) => {
      if (i.path === path) {
        i.status = true
      } else {
        i.status = false
      }
    })
  }


  return {
    headerIcon,
    changeRoute
  }
}


export default useNav
