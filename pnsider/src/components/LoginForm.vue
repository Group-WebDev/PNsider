<template>
<v-card class="mx-auto card" max-width="500" color="rgba(255, 255, 255, 1)" :elevation="14">
    <v-snackbar v-model="snackbar" absolute top right color="success">
        <span>Registration successful!</span>
    </v-snackbar>
    <v-container>
        <v-form ref="user" @submit.prevent="submit">
            <v-container class="container">
                <center>
                    <h1>Login</h1></center>
                <v-text-field v-model="user.username" :rules="rules.required" color="purple darken-2" label="Username"></v-text-field>
                <v-text-field v-model="user.password" :append-icon="show1 ? 'visibility' : 'visibility_off'" :rules="[rules.required, rules.password]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
            </v-container>
            <v-card-actions>
                <v-btn text @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="!formIsValid" text color="primary" type="submit" class="mr-4" @click="save">Login</v-btn>
            </v-card-actions>
        </v-form>
    </v-container>
</v-card>
</template>

<script>
export default {
    data() {
        const defaultForm = Object.freeze({
            username: '',
            password: '',
        })
        return {
            user: Object.assign({}, defaultForm),
            rules: {
                required: value => !!value || 'Required.',
                password: value => {
                    const pattern = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
                    return pattern.test(value) || 'Password Must contain 1 capital, special characters, and more than 8 letters'
                },
            },
            conditions: false,
            snackbar: false,
            defaultForm,
            show1: false,
        }
    },
    created() {
        if (this.$route.params.user) {
            this.user = this.$route.params.user;
        } else {
            this.user = {
                username: '',
                password: '',
            };
        }
    },
    computed: {
        formIsValid() {
            return (
                this.user.username &&
                this.user.password
            )
        },
    },
    methods: {
        async save() {
            if (this.email !== null && this.password !== null) {
                this.$router.push('/')
            }
        },
        resetForm() {
            this.user.username = '',
            this.user.password = ''
        },
        submit() {
            this.snackbar = true
            this.resetForm()
        },
    },
}
</script>

<style>
.card {
    margin-top: 5%; 
}
#image{
    width: 40%;
    height: 40%;
}
</style>