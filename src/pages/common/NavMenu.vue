<template>
  <el-menu
    :default-active="'/index/'"
    router
    mode="horizontal"
    background-color="white"
    active-text-color="red"
    text-color="#111"
    style="min-width: 800px"
  >
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
    </el-menu-item>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-input class="search-input"
      placeholder="Search Item..."
      :prefix-icon="Search"
      size="large"
      v-model="keywords">
    </el-input>
  </el-menu>
</template>

<script>
    import { Search } from '@element-plus/icons-vue'

    export default {
        name: 'NavMenu',
        data () {
            return {
                navList: [
                    {name: '/index', navItem: 'MainPage'},
                    {name: '/test', navItem: 'Page1'},
                    {name: '/library', navItem: 'Library'},
                ]
            }
        }
    }
</script>

<style scoped>
  .search-input {
    width: 300px;
    position: absolute;
    margin-top: 12px;
    right: 20px
  }
</style>
