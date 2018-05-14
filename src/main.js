// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'styles/iconfont.css'
import 'styles/index.scss'

Vue.config.productionTip = false

// 经典的1px border问题 解决方案
let meta = document.querySelector('meta[name=viewport]')
let dpr = window.devicePixelRatio
meta.setAttribute('content', 'initial-scale=' + 1 / dpr + ', maximum-scale=' + 1 / dpr + ', minimum-scale=' + 1 / dpr + ', user-scalable=no')

// 得到手机屏幕的宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
// 得到html的Dom元素
let htmlDom = document.getElementsByTagName('html')[0]
// 设置根元素字体大小
htmlDom.style.fontSize = htmlWidth / 20 + 'px'
// 解决移动端点击300ms延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
