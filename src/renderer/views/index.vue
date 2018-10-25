<template>
<div style="padding:0 30px;">
    <el-tabs class="menu-tab text-center" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个性化推荐" name="individuation"></el-tab-pane>
        <el-tab-pane label="歌单" name="songmenu"></el-tab-pane>
        <el-tab-pane label="主播电台" name="radiostation"></el-tab-pane>
        <el-tab-pane label="排行榜" name="rankinglist"></el-tab-pane>
        <el-tab-pane label="歌手" name="singer"></el-tab-pane>
        <el-tab-pane label="最新音乐" name="newestsong"></el-tab-pane>
    </el-tabs>

    <div class="tab-content">
        <individuation v-if="activeName=='individuation'" @wzhclick="childClick"></individuation>
        <songmenu v-if="activeName=='songmenu'"></songmenu>
        <ranking v-if="activeName=='rankinglist'"></ranking>
    </div>

</div>
</template>

<script>
import individuation from '@/views/individuation'
import songmenu from '@/views/songmenu'
import ranking from '@/views/ranking'
export default {
    name: "index-page",
    components: {
        individuation,
        songmenu,
        ranking
    },
    data() {
        return {
            activeName: "rankinglist"
        };
    },
    methods: {
        handleClick(tab, event) {
            //   console.log(tab, event);
        },
        childClick(data){
            this.activeName=data;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
