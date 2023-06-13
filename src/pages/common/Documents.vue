<template>
    <div>
        <div v-for="item in todoDocuments" :key="item.id">
            <el-tooltip :content="item.tooltip" effect="dark" placement="right">
                <el-card @click="editDoc(item)">
                    <div slot="header" class="title">
                        <span>{{ item.title }}</span>
                    </div>
                    <div>
                        <p>{{ item.description }}</p>
                        <p>Deadline: {{ (new Date(item.date)).toISOString().substring(0, 19) }}</p>
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
import EditForm from "@/pages/common/EditForm.vue";
import { ElMessage } from 'element-plus'


export default {
    name: 'Documents',
    components: { EditForm },
    props: ['isDone'],
    data () {
        return {
            todoDocuments: [],
            currentPage: 1,
            pageSize: 10,
            dialogFormVisible: false,
            editedDoc: {},
        }
    },

    mounted: function() {
        this.loadDocs()
    },

    methods: {
        loadDocs(fromDeadline, toDeadline) {
            const isDone = this.isDone
            axios.get('/api/todoDocs', {
                params: {
                    fromDeadline,
                    toDeadline,
                    isDone
                }
            }).then(resp => {
                if (resp && resp.status === 200) {
                    this.todoDocuments = resp.data
                }
            })
        },

        editDoc(item) {
            this.editedDoc = item
            this.dialogFormVisible = true
            // after Dom update
            this.$nextTick(() => {
                this.$refs.edit.setForm(item)
            })
        },

        saveDoc(editedDoc) {
            axios.post('/api/saveDoc', {
                id: editedDoc.id,
                title: editedDoc.title,
                date: editedDoc.date,
                description: editedDoc.description,
                tooltip: editedDoc.tooltip,
                isDone: editedDoc.isDone
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
    width: 450px;
    margin-bottom: 20px;
    height: 150px;
    float: left;
    margin-right: 15px;
}

.title {
    font-size: 25px;
}
</style>