<template>
  <el-header>
    <div class="header_pad">
      <span class="logo"></span>
      <div class="tab_select_1" style="display: inline-block;float: right;width: 80px">
        <el-dropdown trigger="click" style="position: relative;left: 20px">
          <span class="el-dropdown-link">
        {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="aa('zh')">中文</el-dropdown-item>
            <el-dropdown-item @click.native="aa('en')">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="tab_select" style="display: inline-block;float: right">
        <span class="go_home" @click="go_home()">{{$t("header.header_home")}}</span>
        <span class="go_home" @click="go_dev()" style="font-size: 14px">{{$t("header.header_development_document")}}</span>
        <!--<el-dropdown trigger="click" style="margin-right: 40px">-->
          <!--<span class="el-dropdown-link">-->
        <!--{{$t("header.header_development_document")}}-->
            <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
            <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
            <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown trigger="click" style="margin-right: 80px">-->
          <!--<span class="el-dropdown-link">-->
        <!--{{$t("header.header_main_network")}}-->
            <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
            <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
            <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->

      </div>

    </div>

  </el-header>
</template>

<script>
  export default {
    name: "globalHeader",
    data() {
      return {
        language: ''
      }
    }, methods: {
      aa(e) {
        this.$i18n.locale = e
        console.log(this.$i18n.locale)
        this.$store.dispatch('app/setLanguage', e)
      },
      language_is() {
        if (this.$i18n.locale === 'en') {
          this.language = 'English'
        } else {
          this.language = '中文'
        }
      },
      go_home(){
        this.$router.push({path:'/home'})
      },
      go_dev(){
        this.$router.push({path:'/download'})
      }
    }, created() {
      this.language_is()
    },
    computed: {
      language_change() {
        return this.$i18n.locale;
      }
    }, watch: {
      language_change(e) {
        this.language_is()
      }
    }
  }
</script>

<style scoped>
  .el-header {
    display: block;
    background-color: #F2F2F2;
    color: #333;
    height: 60px;
    padding: 0;
    line-height: 60px;
  }

  .logo {
    display: inline-block;
    width: 200px;
    height: 50px;
    position: relative;
    top: 8px;
    background: url("../assets/images/logo_1.png") no-repeat;
    background-size: 75%
  }

  .header_pad {
    padding: 0 80px;
  }

  .tab_select {
    display: inline-block;
    position: relative;
    float: right;
  }

  .go_home {
    cursor: pointer;
    color: #800080;
    margin-right: 20px;
    padding: 0 20px;
    user-select: none;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #800080;
    user-select: none;
  }
</style>
