import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: '小羊的小窝',
  author: {
    name: '小羊QAQ',
    avatar:"https://p3-passport.byteimg.com/img/user-avatar/c09ca588a59b28091ac4ff2a7320fbec~100x100.awebp",
    status:{
      emoji:"😣",
      message:"呜呜呜"
    }
  },
  subtitle:"希望能成为一个有趣的人",
  description: '秉忠贞之志 守谦退之节',
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    // {
    //   name: 'QQ 群 1050458482',
    //   link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    {
      name: 'GitHub',
      link: 'https://github.com/xy0908',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/6640589418',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=502947252',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/388929477',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    {
      name: 'Twitter',
      link: 'https://twitter.com/@xiaobai63313896',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'mailto:2650628380@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://7879-xyqaq-7g9y8x3gfbde3a00-1308097911.tcb.qcloud.la/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230609143842.jpg?sign=1341b2d98f2a69dfb48cf0bb20614934&t=1686292784',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://7879-xyqaq-7g9y8x3gfbde3a00-1308097911.tcb.qcloud.la/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230609143837.jpg?sign=9b2f3230f45eb81dcf17cef95963b35d&t=1686292774',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://7879-xyqaq-7g9y8x3gfbde3a00-1308097911.tcb.qcloud.la/img/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230609143831.jpg?sign=9ac9dc1c9acb6578566151f80ae0c2a3&t=1686292756',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
