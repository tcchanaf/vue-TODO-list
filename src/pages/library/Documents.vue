<template>
    <div>
        <div v-for="item in documents" :key="item.id">
            <el-tooltip :content="item.tooltip" effect="dark" placement="top">
                <el-card >
                    <div slot="header" class="clearfix">
                        <span>{{ item.title }}</span>
                    </div>
                    <img :src="item.cover" style="width: 100%">
                    <div>
                        <p>{{ item.description }}</p>
                        <p>Price: {{ item.price }}</p>
                    </div>
                </el-card>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
    export default {
            name: 'Documents',
            data () {
                return {
                    documents: [
                        {
                            id: '1',
                            cover: 'https://tigernewspaper.com/wp-content/uploads/2015/07/minions.jpg',
                            title: 'minions',
                            author: 'bob',
                            date: '2023-05-01',
                            press: 'Illumination',
                            price: 5.99,
                            description: 'it is all about bananas',
                            tooltip: 'This is the tooltip for Item 1',
                        },
                        {
                            id: '2',
                            cover: 'https://tigernewspaper.com/wp-content/uploads/2015/07/minions.jpg',
                            title: 'minions',
                            author: 'bob',
                            date: '2023-05-01',
                            press: 'Illumination',
                            price: 19.99,
                            description: 'it is all about bananas',
                            tooltip: 'This is the tooltip for Item 1',
                        },
                        
                    ]
                }
            }
    }
</script>

<style scoped>
    .el-card {
        width: 135px;
        margin-bottom: 20px;
        height: 233px;
        float: left;
        margin-right: 15px;
    }
    /* .cover {
        width: 115px;
        height: 172px;
        margin-bottom: 7px;
        overflow: hidden;
        cursor: pointer;
    } */
</style>
