<template>
    <el-menu
        default-active="2"
        class="categories"
        active-text-color="red"
      >
        <el-menu-item index="3">
          <el-icon><Document /></el-icon>
          <span>Urgent</span>
        </el-menu-item>
        <el-menu-item index="0">
          <el-icon><Document /></el-icon>
          <span>Navigator2</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
</template>


<script>
    import { Document } from '@element-plus/icons-vue'

    export default {
        name: 'SideMenu'
    }
</script>


<style scoped>
    .categories {
        position: relative;
        /* left: 100px; */
        /* top: 20px; */
        width: 200px;
    }
</style>