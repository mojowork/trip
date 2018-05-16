<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <swiper-slide class="swiper__item"
            v-for="(img, index) of swiperArr"
            :key="index">
                <img :src="img.imgSrc"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperArr: [
                { id: '001',
                  imgSrc: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_750x200_b423f532.jpg'},
                { id: '001',
                  imgSrc: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'}],
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    methods: {
        callback() {}
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    height: 26.6666vw;
    background-color: lime;
    .swiper__item{
        img{
            width:100%;
        }
    }
}
</style>

<style lang="scss">
.wrapper .swiper-pagination-bullet-active {
    background-color: #fff;
}
</style>