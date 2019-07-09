<template>
  <div class="home_con">
    <header-za></header-za>
    <el-main>
    <router-view></router-view>
    </el-main>
    <!--<footer-za></footer-za>-->
  </div>
</template>

<script>
  import HeaderZa from '../../components/globalHeader'
  import FooterZa from '../../components/globalFooter'

  export default {
    name: 'home',
    components: {HeaderZa, FooterZa,},
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .el-main {
    color: #333;
    width: 100%;
    padding: 30px  5%;

  }
</style>
