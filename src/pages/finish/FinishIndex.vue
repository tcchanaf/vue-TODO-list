<template>
    <el-container>
        <el-aside style="width: 200px; margin-top: 20px">
            <SideMenu v-bind:menuItems="sideMenuItems"  @indexSelect="listByBeforeDeadline" ref="sideMenu"/>
        </el-aside>
        <el-main>
            <Documents :isDone=true ref="docs"/>
        </el-main>
    </el-container>
</template>


<script>
    import SideMenu from '@/pages/common/SideMenu.vue'
    import Documents from '@/pages/common/Documents.vue'
    import { List, Checked } from '@element-plus/icons-vue'


    export default {
        name: 'FinishIndex',
        components: { SideMenu, Documents },

        data () {
            return {
                sideMenuItems: [
                    {"index": '0', "menuTitle": "Today Finish", 'icon': Checked},
                    {"index": '1', "menuTitle": "All", 'icon': List},
                ]
            }
        },

        methods: {
            listByBeforeDeadline(sideMenuIndex) {
                var toDeadline = new Date()
                const hkOffset = -8 * 60 * 60 * 1000
                toDeadline.setUTCHours(23);
                toDeadline.setUTCMinutes(59);
                toDeadline.setUTCSeconds(59);
                toDeadline = new Date(toDeadline.getTime() + hkOffset)

                var fromDeadline = new Date(toDeadline.getTime() - 24 * 60 * 60 * 1000)

                switch (sideMenuIndex) {
                    // finish today
                    case '0':
                        break

                    // all
                    case '1':
                        this.$refs.docs.loadDocs()
                        return
                }

                this.$refs.docs.loadDocs(fromDeadline.getTime(), toDeadline.getTime())
            }
        }
    }
</script>


<style scoped>

</style>