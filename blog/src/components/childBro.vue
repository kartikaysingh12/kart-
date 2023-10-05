<template>
    <h1>SIMPLE FORM</h1>
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{ item }}: not filled
        </li>
    </ul>
    <form>
        <label>email</label>
        <input type="text" placeholder="enter your email" v-model="form.email">
        <br>
        <label>password</label>
        <input type="password" placeholder="enter password" v-model="form.password">
        <br>
        <button v-on:click="login" type="button">login</button>
        <br>
        <h1>Country</h1>
        <select v-model="form.country">
            <option>india</option>
            <option>pak</option>
            <option>china</option>
        </select>
        <br>
        <h2>Technology</h2>
        <label>java</label>
        <input type="checkbox" value="java" v-model="form.technology">
        <label>python</label>
        <input type="checkbox" value="python" v-model="form.technology">
        <br>
        <h3>Gender</h3>
        <label for="male">male</label>
        <input type="radio" value="male" name="gender" v-model="form.gender">
        <label for="female">female</label>
        <input type="radio" value="female" name="gender" v-model="form.gender">

    </form>
</template>
<script>
export default {
    name: 'childBro',
    data() {
        return {
            form: {
                email: '',
                password: '',
                gender: '',
                technology: [],
                country: ''
            },
            error: [],
        }
    },

    methods: {
        login() {
            this.error=[];
            for (const item in this.form) {
                if (this.form[item] === '' || this.form[item].length === 0) {
                    this.error.push(item)
                }
            }
            console.warn(this.form, this.error)
        }
    }
}
</script>