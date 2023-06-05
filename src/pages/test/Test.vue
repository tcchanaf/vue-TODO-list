<template>
  <el-form :inline="true" :model="formInline" size="small">
    <el-form-item label="userinfo">
      <el-input
        class="input"
        v-model="formInline.username"
        placeholder="username"
      ></el-input>
      <el-input
        class="input"
        v-model="formInline.email"
        placeholder="email"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmitGet">get</el-button>
      <el-button type="primary" @click="onSubmitPost">post</el-button>
    </el-form-item>
    <el-input
      type="textarea"
      :rows="6"
      placeholder="response"
      v-model="results"
      class="textarea"
    >
    </el-input>
  </el-form>
</template>
<script>
  import axios from "axios";
  export default {
    data() {
      return {
        formInline: {
          username: "",
          email: "",
        },
        results: "",
      };
    },
    methods: {
      onSubmitGet() {
        console.log("submit! get");
        axios.get("api/getUsers/")
        .then((res) => {
            this.results = JSON.stringify(res.data);
            console.log(res.data); 
          })
          .catch((res) => {
            alert("wrong");
          });
      },
      onSubmitPost() {
        console.log("submit! post");
        axios.post("api/getUsers/", this.formInline)
        .then((res) => {
          console.log(res.data);
          })
          .catch((res) => {
            alert("wrong");
          });
      },
    },
  };
</script>

<style scoped>
.input {
  width: 200px;
}
button {
  width: 100px;
}
.textarea {
  width: 900px;
}
</style>