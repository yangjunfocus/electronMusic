<template>
<div class="page-main song-menu">
    <div>
        <el-popover placement="bottom" width="540" offset="230" trigger="click">
            <div class="song-menu-box">
                <div class="title">添加标签</div>
                <div class="song-menu-outer">
                    <el-scrollbar class="m-scroll">
                        <div class="song-menu-cate">
                            <div class="all-cate-title cate-item text-center">全部歌单</div>
                            <div class="cate-col flex">
                                <div class="cate-col-type flex align-middle">
                                    <div>
                                        <svg-icon class-name="diqiu" icon-class="diqiu"></svg-icon>
                                    </div>
                                    <div class="type-title">语种</div>
                                </div>
                                <div class="cat-col-class flex-auto text-center">
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                </div>
                            </div>
                            <div class="cate-col flex">
                                <div class="cate-col-type flex align-middle">
                                    <div>
                                        <svg-icon class-name="diqiu" icon-class="yinfu"></svg-icon>
                                    </div>
                                    <div class="type-title">风格</div>
                                </div>
                                <div class="cat-col-class flex-auto text-center">
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                </div>
                            </div>
                            <div class="cate-col flex">
                                <div class="cate-col-type flex align-middle">
                                    <div>
                                        <svg-icon class-name="diqiu" icon-class="kafei"></svg-icon>
                                    </div>
                                    <div class="type-title">场景</div>
                                </div>
                                <div class="cat-col-class flex-auto text-center">
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                </div>
                            </div>
                            <div class="cate-col flex">
                                <div class="cate-col-type flex align-middle">
                                    <div>
                                        <svg-icon class-name="diqiu" icon-class="smile"></svg-icon>
                                    </div>
                                    <div class="type-title">情感</div>
                                </div>
                                <div class="cat-col-class flex-auto text-center">
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                </div>
                            </div>
                            <div class="cate-col flex">
                                <div class="cate-col-type flex align-middle">
                                    <div>
                                        <svg-icon class-name="diqiu" icon-class="zhuti"></svg-icon>
                                    </div>
                                    <div class="type-title">主题</div>
                                </div>
                                <div class="cat-col-class flex-auto text-center">
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                    <div class="cate-item">华语</div>
                                </div>
                            </div>
                        </div>
                    </el-scrollbar>
                </div>
            </div>
            <el-button class="all-song-menu-btn" slot="reference">全部歌单<i class="pointer el-icon-arrow-down el-icon--right"></i></el-button>
        </el-popover>
        <div class="hot-tag">热门标签：<a href="javascript:;">华语</a><a href="javascript:;">华语</a></div>
        <div class="m-song">
            <div class="m-list-wrap">
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
                <div class="m-list-item">
                    <router-link to="/">
                        <div class="m-blocks m-recomm-img">
                            <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                            <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                            <div class="play-icon">
                                <svg-icon icon-class="bofang"></svg-icon>
                            </div>
                        </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="page-ctrl text-center">
            <el-pagination layout="prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "song-menu-page",
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        handleClick(tab, event) {
            //   console.log(tab, event);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@include scroll-m(".m-scroll");
@import '../assets/scss/var.scss';

@mixin border() {
    color: #333333;
    border: 1px solid #e1e1e2;
}

.song-menu-box {
    height: 416px;
    margin: -12px;
    overflow: hidden;

    .song-menu-outer {
        margin-top: 49px;
        height: calc(100% - 49px);
    }

    .song-menu-cate {
        padding: 0 20px;        
        .all-cate-title {
            margin: 10px 0;
        }

        .cate-col {
            margin-bottom: 9px;
        }

        .cate-item {
            @include border;
            color: #666666;
            height: 33px;
            line-height: 33px;
            font-size: 13px;
        }

        .cate-col-type {
            .icon {
                color: #e09494;
            }

            .diqiu {
                font-size: 26px;
            }

            .type-title {
                color: #ce4e4e;
                margin-left: 12px;
            }
        }

        .cat-col-class {
            margin-left: 15px;

            .cate-item {
                width: 20%;
                float: left;
                margin-left: -1px;
                margin-bottom: -1px;
            }
        }
    }

    &>.title {
        padding-left: 20px;
        line-height: 49px;
        border-bottom: 1px solid #e1e1e2;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        background-color: #fff;
    }
}

.all-song-menu-btn {
    @include border;
    width: 80px;
    height: 24px;
    line-height: 24px;
    padding: 0;
    font-size: 12px;

    &:hover {
        background: #f5f5f7;
        @include border;
    }
    &:focus{
        background: #fff;
    }
}

.hot-tag {
    padding-top: 9px;
    font-size: 13px;
    a {
        color: #666;        
        padding: 0 25px;
        border-right: 1px solid #d4ccd4;

        &:last-child {
            border-right: none;
        }

        &:hover {
            color: #323232;
        }
    }
}

.song-menu {
    padding-bottom: 30px;
}

.page-ctrl {
    /deep/ .el-pager li.active {
        color: $color1;
    }

    /deep/ .el-pager li {
        color: #666666;
    }

    /deep/ .btn-prev:hover,/deep/ .btn-next:hover,/deep/ .el-pager li:not(.active):hover {
        color: #323232;
    }
}

.m-song {
    padding-bottom: 40px;
    padding-top: 16px;

    .m-list-wrap {
        overflow: hidden;

        .m-list-item {
            width: 177px;
            float: left;
            margin-right: 18px;
            margin-bottom: 30px;

            a {
                color: #323232;
            }

            .singer {
                color: #888888;
            }

        }

    }

    .m-blocks {
        height: 177px;
        -webkit-flex-direction: column;
        flex-direction: column;
        position: relative;
        overflow: hidden;

        &:hover {
            .play-icon {
                opacity: 1;
            }

            .mask-box {
                top: 0;
            }
        }

        img {
            width: 100%;
        }

        .play-num {
            position: absolute;
            right: 5px;
            top: 2px;
            z-index: 3;
            color: #fff;
        }

        .play-icon {
            position: absolute;
            right: 8px;
            bottom: 5px;
            color: #fff;
            z-index: 3;
            opacity: 0;
            font-size: 25px;
            transition: opacity 0.3s;
        }
    }

    .m-recomm-img {
        &:after {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 22px;
            z-index: 2;
            background-image: -webkit-gradient(linear,
                left top,
                left bottom,
                from(rgba(0, 0, 0, 0.3)),
                to(transparent));
            background-image: -webkit-linear-gradient(top,
                rgba(0, 0, 0, 0.3),
                transparent);
            background-image: linear-gradient(180deg,
                rgba(0, 0, 0, 0.3),
                transparent);
        }
    }

    .m-desc {
        .song-txt {
            padding-top: 6px;
        }
    }
}
</style>
