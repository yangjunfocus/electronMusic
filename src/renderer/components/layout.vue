<template>
  <el-container class="container">
  
    <el-header class="header">
      <div class="height100 flex justify-between">
        <div class="flex align-middle justify-between">
  
          <div style="padding-right:40px;">
            <img src="static/logo.png" alt="logo">
          </div>
          <div style="padding-right:17px;">
            <el-radio-group v-model="tabPosition">
              <el-radio-button label="top"><i class="el-icon-arrow-left"></i></el-radio-button>
              <el-radio-button label="right"><i class="el-icon-arrow-right"></i></el-radio-button>
            </el-radio-group>
          </div>
          <div>
            <el-input class="sch-ipt" @keyup.enter.native="search()" v-model="keyword" size="mini" suffix-icon="el-icon-search" placeholder="搜索音乐/视频/电台/用户"></el-input>
          </div>
  
        </div>
  
        <div class="flex justify-end align-middle">
  
          <div class="flex align-middle">
            <div class="user-avatar"></div>
            <div style="padding:0 20px 0 5px;">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                                    未登录<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="m-set flex align-middle">
            <a class="btn-icon" href="javascript:;" style="font-size:18px;">
              <svg-icon icon-class="pifu"></svg-icon>
            </a>
            <a class="btn-icon" href="javascript:;" style="font-size:18px;">
              <svg-icon icon-class="youxiang"></svg-icon>
            </a>
            <a class="btn-icon" href="javascript:;" style="font-size:18px;">
              <svg-icon icon-class="shezhi"></svg-icon>
            </a>
          </div>
          <div class="text-right flex align-middle">
            <a class="btn-icon" href="javascript:;" style="font-size:18px;">
              <svg-icon icon-class="suoxiao1"></svg-icon>
            </a>
            <a class="btn-icon" href="javascript:;">
              <svg-icon icon-class="yk_fangkuai"></svg-icon>
            </a>
            <a class="btn-icon" href="javascript:;" style="font-size:20px;">
              <svg-icon icon-class="close"></svg-icon>
            </a>
          </div>
  
        </div>
      </div>
    </el-header>
  
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu default-active="2" class="height100 el-menu-vertical-demo">
          <li class="sub-title">
            <h3>推荐</h3>
          </li>
          <el-menu-item index="1">
            <svg-icon icon-class="yinle"></svg-icon>
            <span slot="title">发现音乐</span>
          </el-menu-item>
  
          <el-menu-item index="2">
            <svg-icon icon-class="tubiaozhizuomobanyihuifu-"></svg-icon>
            <span slot="title">私人FM</span>
          </el-menu-item>
  
          <el-menu-item index="3">
            <svg-icon icon-class="aui-icon-video"></svg-icon>
            <span slot="title">视频</span>
          </el-menu-item>
  
          <el-menu-item index="4">
            <svg-icon icon-class="pengyou"></svg-icon>
            <span slot="title">朋友</span>
          </el-menu-item>
  
          <li class="sub-title">
            <h3>我的音乐</h3>
          </li>
  
          <el-menu-item index="5">
            <svg-icon icon-class="iconset04100"></svg-icon>
            <span slot="title">本地音乐</span>
          </el-menu-item>
  
          <el-menu-item index="6">
            <svg-icon icon-class="xiazai"></svg-icon>
            <span slot="title">下载管理</span>
          </el-menu-item>
  
          <li class="sub-title flex align-middle justify-between">
            <h3>创建的歌单</h3>
            <div>
              <el-popover placement="right" width="270" trigger="click">
                <h4>新建歌单</h4>
                <div class="m-t-b">
                  <el-input class="tit-ipt" placeholder="请输入新歌单标题"></el-input>
                </div>
                <el-checkbox>设置为隐私歌单</el-checkbox>
                <div class="m-t-b operate-btn">
                  <el-button type="primary">创建</el-button>
                  <el-button>取消</el-button>
                </div>
  
                <a slot="reference" style="color:#ddd;font-size:18px;" href="javascript:;">
                  <svg-icon icon-class="jia"></svg-icon>
                </a>
              </el-popover>
  
              <i class="pointer el-icon-arrow-down el-icon--right"></i>
            </div>
          </li>
  
        </el-menu>
      </el-aside>
      <el-main class="main">
        <el-scrollbar class="m-scroll">
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  
  </el-container>
</template>

<script>
  export default {
    name: "layout-page",
    components: {},
    data() {
      return {
        tabPosition: "top",
        keyword: ""
      };
    },
    methods: {
      search() {}
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/mixin.scss";
  @include scroll-m(".m-scroll");
  .header {
    .el-radio-group {
      width: 57px;
      height: 22px;
      .el-radio-button {
        width: 50%;
        height: 100%;
        .el-radio-button__inner [class*="el-icon-"] {
          vertical-align: middle;
        }
      }
      /deep/ .el-radio-button__inner {
        width: 100%;
        padding: 0;
        height: 100%;
        line-height: 17px;
        border-color: #a82828;
        background: none;
      }
      /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        box-shadow: none;
      }
      /deep/ .el-radio-button__inner:hover {
        color: #fff;
      }
    }
    /deep/ .sch-ipt {
      .el-input__inner {
        border-radius: 23px;
        border: none;
        background: #a82828;
        height: 24px;
        line-height: 24px;
        &::placeholder {
          color: #c77373;
        }
      }
      /deep/ .el-input__icon {
        height: 24px;
        line-height: 24px;
      }
    }
    .btn-icon {
      padding: 0 6px;
      color: #eec1c1;
    }
    /deep/ .m-set {
      position: relative;
      padding-right: 20px;
      &:after {
        content: "";
        position: absolute;
        right: 7px;
        top: 0;
        width: 1px;
        height: 20px;
        background-color: #a82828;
      }
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #eec1c1;
    }
    .user-avatar {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #e1e3e4;
    }
  }
  
  .aside {
    ul{
      background: #f5f5f7;
    }
    .sub-title {
      color: #7d7d7d;
      padding: 0 10px;
      padding-top: 10px;
      h3 {
        font-size: 13px;
        font-weight: normal;
      }
    }
    /deep/ .el-menu-item {
      height: 35px;
      line-height: 35px;
      &:focus,
      &:hover {
        background: none;
        span,
        .icon {
          color: #323232;
        }
      }
      span {
        font-size: 12px;
        color: #5c5c5c;
      }
      .icon {
        vertical-align: middle;
        font-size: 21px;
        color: #656565;
      }
    }
    /deep/ .el-menu-item.is-active {
      position: relative;
      background: #e6e7ea;
      span,
      .icon {
        color: #323232;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background: #c62f2f;
        width: 3px;
        height: 100%;
      }
    }
  }
  .operate-btn{
    .el-button{
      padding:6px 35px;
    }
  }
  /deep/ .tit-ipt {
    .el-input__inner{
      height: 30px;
      line-height: 30px;
    }
  }
  /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
    color: inherit;
  }
</style>
