<template>
    <div>
        <NavMenu/>
        <router-view/>
    </div>
</template>

<script>
    import NavMenu from '@/pages/common/NavMenu.vue'

    export default {
        name: 'Home',
        components: { NavMenu }
    }
</script>

<style scoped>

</style>
