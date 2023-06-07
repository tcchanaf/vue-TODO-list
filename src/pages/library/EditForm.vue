<template>
    <el-form :model="form" label-width="100px" ref="form">
        <el-form-item label="Title:">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Cover">
            <el-input v-model="form.cover"></el-input>
        </el-form-item>
        <el-form-item label="Description">
            <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="Price">
            <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
    name: 'EditForm',
    props: {
        value: Object,
    },
    data() {
        return {
        form: {
            id: null,
            title: '',
            cover: '',
            description: '',
            price: '',
        },
        };
    },
    methods: {
        setForm(doc) {
            this.form.id = doc.id;
            this.form.title = doc.title;
            this.form.cover = doc.cover;
            this.form.description = doc.description;
            this.form.price = doc.price;
        },

        onSubmit() {
            ElMessageBox.alert('Confirm to Save?', null, {
                center: true,
                autofocus: true,
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: "Cancel",
                callback: (action) => {
                    if (action === 'confirm') {
                        this.$emit('submit', this.form);
                    }
                },
            })
        },
    },
};
</script>