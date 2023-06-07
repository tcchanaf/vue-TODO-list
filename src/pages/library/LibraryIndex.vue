<template>
    <!-- <el-container> style="min-height: 400px"> -->
    <el-container>
        <el-aside style="width: 200px; margin-top: 20px">
            <switch></switch>
            <SideMenu/>
        </el-aside>
        <el-main>
            <Documents/>
            <!-- <img :src="'https://tigernewspaper.com/wp-content/uploads/2015/07/minions.jpg'" alt="cover"> -->
        </el-main>
    </el-container>
</template>


<script>
    import SideMenu from '@/pages/library/SideMenu.vue'
    import Documents from '@/pages/library/Documents.vue'


    export default {
        name: 'AppLibrary',
        components: { SideMenu, Documents }
    }
</script>


<style scoped>

</style>