<template>
<div class="page-main">
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    <div class="m-song">
        <div class="m-title flex align-middle justify-between">
            <h3 @click="childclick">推荐歌单</h3>
            <span class="color66 pointer" @click="childclick">更多&gt;</span>
        </div>
        <el-row class="m-list-wrap" :gutter="18">
            <el-col>
                <router-link to="/">
                    <div class="m-blocks flex align-middle justify-center">
                        <p class="color66">星期一</p>
                        <div class="color-red">15</div>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">每日歌曲推荐</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>
                        <div class="play-icon">
                            <svg-icon icon-class="bofang"></svg-icon>
                        </div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>
                        <div class="play-icon">
                            <svg-icon icon-class="bofang"></svg-icon>
                        </div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>
                        <div class="play-icon">
                            <svg-icon icon-class="bofang"></svg-icon>
                        </div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <span class="play-num"><svg-icon icon-class="erji"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>
                        <div class="play-icon">
                            <svg-icon icon-class="bofang"></svg-icon>
                        </div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>

        </el-row>
    </div>
    <div class="m-song">
        <div class="m-title flex align-middle justify-between">
            <h3>独家放送</h3>
            <router-link to="/" class="color66">更多&gt;</router-link>
        </div>
        <el-row :gutter="18" class="m-list-wrap">
            <el-col :span="8">
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                </div>
                        <div class="m-desc">
                            <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                        </div>
                </router-link>
            </el-col>
        </el-row>
    </div>
    <div class="m-song">
        <div class="m-title flex align-middle justify-between">
            <h3>最新音乐</h3>
            <router-link to="/" class="color66">更多&gt;</router-link>
        </div>
        <div class="newest-song-wrap">
            <div class="newest-song-inner flex">
                <div class="newest-song-block">
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="newest-song-block">
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="newest-song-item flex align-middle">
                        <div class="num">01</div>
                        <router-link to="/" class="pic-wrap">
                            <img class="height100" src="http://p4.music.126.net/PY2FppGbLarJH3iIZelP8A==/109951163599180014.jpg?param=100y100" alt="">
                            <svg-icon icon-class="bofang" class-name="play"></svg-icon>
                        </router-link>
                        <div class="flex-auto">
                            <p class="ellipsis" title="耳朵">耳朵</p>
                            <p class="ellipsis singer" title="李荣浩">
                                <router-link title="李荣浩" to="/">李荣浩</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="m-song">
        <div class="m-title flex align-middle justify-between">
            <h3>推荐MV</h3>
            <router-link to="/" class="color66">更多&gt;</router-link>
        </div>
        <el-row :gutter="18" class="m-list-wrap">
            <el-col :span="8">
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/rl9bvAG35iiF43aOCDU0Hw==/109951163446525896.jpg?param=140y140">
                        <span class="play-num"><svg-icon icon-class="aui-icon-video" class-name="video-svg"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>

                    </div>
                    <div class="m-desc mv">
                        <p class="song-txt line-clamp"><a href="">影响</a></p>
                        <p class="song-txt line-clamp"><a class="singer" href="">陈粒</a></p>
                    </div>
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/rl9bvAG35iiF43aOCDU0Hw==/109951163446525896.jpg?param=140y140">
                        <span class="play-num"><svg-icon icon-class="aui-icon-video" class-name="video-svg"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>

                    </div>
                    <div class="m-desc mv">
                        <p class="song-txt line-clamp"><a href="">影响</a></p>
                        <p class="song-txt line-clamp"><a class="singer" href="">陈粒</a></p>
                    </div>
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/rl9bvAG35iiF43aOCDU0Hw==/109951163446525896.jpg?param=140y140">
                        <span class="play-num"><svg-icon icon-class="aui-icon-video" class-name="video-svg"></svg-icon> 1453.9万</span>
                        <div class="mask-box line-clamp">根据您的音乐口味生成每日更新</div>

                    </div>
                    <div class="m-desc mv">
                        <p class="song-txt line-clamp"><a href="">影响</a></p>
                        <p class="song-txt line-clamp"><a class="singer" href="">陈粒</a></p>
                    </div>
                </router-link>
            </el-col>
        </el-row>
    </div>
    <div class="m-song">
        <div class="m-title flex align-middle justify-between">
            <h3>主播电台</h3>
            <router-link to="/" class="color66">更多&gt;</router-link>
        </div>
        <el-row class="m-list-wrap" :gutter="18">
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <div class="anchor-mask-box ellipsis">根据您的音乐口味生成每日更新</div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <div class="anchor-mask-box ellipsis">根据您的音乐口味生成每日更新</div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <div class="anchor-mask-box ellipsis">根据您的音乐口味生成每日更新</div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <div class="anchor-mask-box ellipsis">根据您的音乐口味生成每日更新</div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
            <el-col>
                <router-link to="/">
                    <div class="m-blocks m-recomm-img">
                        <img src="http://p1.music.126.net/WPHAmuqQaaQGIcx199t5XQ==/3272146613241669.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                        <div class="anchor-mask-box ellipsis">根据您的音乐口味生成每日更新</div>
                    </div>
                    <div class="m-desc">
                        <p class="song-txt line-clamp">『1979-至今』全年代日本动漫OP大盘点-持更『1979-至今』全年代日本动漫OP大盘点-持更</p>
                    </div>
                </router-link>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import {
    getPersonalized,
    getBanner,
    exclusive,
    newsong,
    hotcat,
    catlist
} from "@/api/index";
export default {
    name: "individuation-page",
    components: {

    },
    props: {
        activeName: {
            type: String
        }
    },
    data(){
        return {
           
        }
    },
    created() {
        hotcat().then(res => {
            if (res.status == 200) {
                console.log(res, "8888");
            }
        });

        // getBanner().then(res => {
        //     if (res.status == 200) {
        //         console.log(res, "8888");
        //     }
        // });

        // newsong().then(res => {
        //     if (res.status == 200) {
        //         console.log(res, "最新音乐");
        //     }
        // });
    },
    methods: {
        childclick: function () {
           this.$emit('wzhclick','songmenu');
        }
    }
};
</script>

<style lang="scss" scoped>
$color66: #666666;



.m-song {
    margin-bottom: 40px;

    .m-title {
        padding-bottom: 5px;
        border-bottom: 1px solid #e1e1e2;
    }

    .m-list-wrap {
        .el-col-24 {
            width: 20%;
        }

        padding-top: 10px;

        .el-col {
            a {
                color: #323232;
            }

            .singer {
                color: #888888;
            }

        }

    }

    .m-blocks {
        border: 1px solid #e5e5e5;
        height: 150px;
        -webkit-flex-direction: column;
        flex-direction: column;
        position: relative;
        overflow: hidden;

        .anchor-mask-box {
            width: 100%;
            position: absolute;
            bottom: 0;
            color: #fff;
            padding: 3px 5px;
            line-height: 18px;
            background: -webkit-linear-gradient(to top, rgba(0, 0, 0, 0.5), white);
            background: -moz-linear-gradient(to top, rgba(0, 0, 0, 0.5), white);
            background: linear-gradient(to top, rgba(0, 0, 0, 0.5), white);
            font-size: 12px;
        }

        .video-svg {
            font-size: 22px;
        }

        .color-red {
            font-size: 92px;
        }

        .mask-box {
            position: absolute;
            left: 0;
            top: -100%;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            padding: 4px 5px;
            line-height: 18px;
            width: 100%;
            font-size: 12px;
            transition: top 0.3s;
            z-index: 5;
        }

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

    .newest-song-wrap {
        height: 300px;
        border: 1px solid #ededed;
        margin-top: 10px;

        .newest-song-block {
            width: 50%;

            .newest-song-item {
                height: 60px;
                padding-left: 12px;

                &:nth-child(2n) {
                    background-color: #f5f5f7;
                }

                &:hover {
                    background-color: #ebeced;
                }
            }

            .singer {
                padding-top: 6px;

                a {
                    color: #888888;
                }
            }

            .num {
                margin-right: 14px;
            }

        }

        .newest-song-block:first-child {
            position: relative;

            &:after {
                content: "";
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 1px;
                background-color: #ededed;
            }
        }

        .pic-wrap {
            height: 40px;
            width: 40px;
            position: relative;
            margin-right: 10px;
            display: block;

            .play {
                position: absolute;
                font-size: 25px;
                color: #fff;
                left: 50%;
                top: 50%;
                margin-left: -12px;
                margin-top: -12px;
            }
        }
    }
}

.color66 {
    color: $color66;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
