<template>
    <div>
        <div v-for="item in todoDocuments" :key="item.id">
            <el-tooltip :content="item.tooltip" effect="dark" placement="right">
                <el-card>
                <div slot="header" class="clearfix">
                    <span>{{ item.title }}</span>
                </div>
                <div class="cover" @click="editDoc(item)">
                    <img :src="item.cover" style="width: 100%">
                </div>
                <div>
                    <p>{{ item.description }}</p>
                    <p>Price: {{ item.price }}</p>
                </div>
                </el-card>
            </el-tooltip>
        </div>

        <el-dialog title="Edit Document" v-model="dialogFormVisible">
            <EditForm @submit="saveDoc" ref="edit" />
        </el-dialog>
    </div>
</template>

<script>
import axios from "axios";
import EditForm from "@/pages/library/EditForm.vue";
import { ElMessage } from 'element-plus'

export default {
    name: 'Documents',
    components: { EditForm },
    data () {
        return {
            todoDocuments: [],
            currentPage: 1,
            pageSize: 10,
            dialogFormVisible: false,
            editedDoc: null,
        }
    },

    mounted: function() {
        this.loadDocs()
    },

    methods: {
        loadDocs() {
        axios.get('/api/todoDocs')
            .then(resp => {
            if (resp && resp.status === 200) {
                this.todoDocuments = resp.data
            }
            })
        },

        editDoc(item) {
            this.editedDoc = item
            this.dialogFormVisible = true
            this.$nextTick(() => {
                this.$refs.edit.setForm(item)
            })
        },

        saveDoc(editedDoc) {
            axios.post('/api/saveDoc', {
                id: editedDoc.id,
                cover: editedDoc.cover,
                title: editedDoc.title,
                author: editedDoc.author,
                date: editedDoc.date,
                press: editedDoc.press,
                price: editedDoc.price,
                description: editedDoc.description,
                tooltip: editedDoc.tooltip,
            }).then(resp => {
                if (resp && resp.status === 200 && resp.data.code === 'success') {
                    var message = 'Success'
                    this.dialogFormVisible = false
                    this.loadDocs()
                } else {
                    var message = 'Fail to Update'
                }

                ElMessage({
                    type: 'info',
                    message: message,
                })
            })
        },       
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
</style>