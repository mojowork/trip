<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    test
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSwiper
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
</style>
