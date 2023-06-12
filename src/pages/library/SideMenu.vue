<template>
    <el-menu
    default-active="0"
    class="categories"
    active-text-color="red"
    @select="onSelect"
    >
        <div v-for="item in menuItems" :key="item.index">
            <el-menu-item :index="item.index">
                <el-icon>
                    <component :is="item.icon.name"></component>
                </el-icon>
                <span>{{ item.menuTitle }}</span>
            </el-menu-item>
        </div>
    </el-menu>
</template>


<script>
export default {
    name: 'SideMenu',
    props: ['menuItems'],

    methods: {
        onSelect (sideMenuIndex) {
            this.$emit('indexSelect', sideMenuIndex);
        }
    }
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