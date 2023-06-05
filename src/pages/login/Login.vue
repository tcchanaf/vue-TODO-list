<template>
    <div>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <el-form class="login-container" label-position="left" label-width="50px">
            <el-form-item>
                <el-input type = "text" v-model="loginForm.username" placeholder="username"/>
            </el-form-item>

            <el-form-item>
                <el-input type = "password" v-model="loginForm.password" placeholder="password" show-password/>
            </el-form-item>

            <el-form-item>
                <el-button v-on:click="login">login</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'Login', 
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },
        methods: {
            login () {
                axios.post('/api/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(successResponse => {
                    if (successResponse.data.code === 200) {
                        this.$store.commit('login', this.loginForm)
                        this.$router.replace({path: '/index'})
                    }
                })
                .catch(failResponse => {  
                })
            }
        }
    }

</script>

<style>
  .login-container {
    border-radius: 15px;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cac6c6;
  }
</style>
