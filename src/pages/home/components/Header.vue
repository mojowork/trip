<template>
    <div class="header">
        <div class="header__left">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="header__input">
            <i class="iconfont icon-sousuo"></i>
            输入城市景点/游玩主题
        </div>
        <div class="header__right">上海
            <i class="iconfont icon-sanjiao_xia"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homeHeader',
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/index.scss';
.header{
    display: flex;
    font-size:28px;
    height: px2rem(86px);
    background-color: $color-primary;
    align-items: center;
    .header__left{
        flex: 0 px2rem(62px);
        text-align: center;
    }
    .header__input{
        flex:1;
        background-color: #fff;
        height: px2rem(62px);
        line-height: px2rem(62px);
        border-radius: px2rem(5px);
        color: #ccc;
        margin: px2rem(12px);
        .iconfont{
            margin-left: 10px;
        }
    }
    .header__right{
        flex: 0 px2rem(100px);
    }
}
</style>
