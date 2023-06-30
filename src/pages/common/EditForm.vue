<template>
    <el-form :model="form" label-width="100px" ref="form">
        <el-form-item label="Title:">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
            <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="Date">
            <el-date-picker
                v-model="form.date"
                type="datetime"
                placeholder="Select date and time"
                :default-time="currentDate"
                :shortcuts="datePickerShortcuts"
                class="datetime-picker"
            />
        </el-form-item>
        <el-form-item label="Status">
          <el-switch
                v-model="form.isDone"
                size="large"
                active-text="Done"
                inactive-text="Ongoing"
            />
        </el-form-item>

        <el-form-item v-if="isCreate">
            <el-button type="primary" @click="onSubmit">Create</el-button>
        </el-form-item>
        <el-form-item v-else>
            <el-button type="primary" @click="onSubmit">Save</el-button>
            <el-button type="danger" @click="onDelete">Delete</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
    name: 'EditForm',
    data() {
        return {
            isCreate: true,
            form: {
                id: null,
                title: '',
                date: '',
                description: '',
            },
            datePickerShortcuts: [
                {
                    text: 'In Two Hours',
                    value: () => {
                        const date = new Date()
                        date.setTime(date.getTime() + 2 * 3600 * 1000)
                        return date
                    },
                },
                {
                    text: 'Tomorrow',
                    value: () => {
                        const date = new Date()
                        date.setTime(date.getTime() + 2 * 24 * 3600 * 1000)
                        return date
                    },
                },
                {
                    text: 'Next Week',
                    value: () => {
                        const date = new Date()
                        date.setTime(date.getTime() + 7 * 24 * 3600 * 1000)
                        return date
                    },
                },
            ]
        };
    },
    methods: {
        setForm(doc, isCreate) {
            this.isCreate = isCreate
            this.form.id = doc.id
            this.form.title = doc.title
            this.form.description = doc.description
            this.form.isDone = doc.isDone
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

        onDelete() {
            ElMessageBox.alert('Confirm to Delete?', null, {
                center: true,
                autofocus: true,
                showCancelButton: true,
                confirmButtonText: 'Confirm',
                cancelButtonText: "Cancel",
                callback: (action) => {
                    if (action === 'confirm') {
                        this.$emit('delete', this.form.id);
                    }
                },
            })
        },

    },

    computed: {
        currentDate() {
            return new Date();
        }
    }
};
</script>

<style scoped>

.datetime-picker {
  /* display: flex;
  width: 100%;
  padding: 50;
  flex-wrap: wrap; */
    padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
</style>