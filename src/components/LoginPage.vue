<template>
    <div class="container">
        <v-responsive class="mx-auto input" max-width="344">
            <v-text-field clearable label="Email" v-model="email"></v-text-field>
            <v-text-field clearable label="Password minimal 6 huruf" v-model="password"></v-text-field>
        </v-responsive>
        <v-btn @click="login">Login</v-btn>
        <v-btn @click="register">Register</v-btn>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from '../firebase'

const auth = getAuth(firebase)

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register(){
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                // ..
            });
        },
        login(){
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((user) => {
                console.log(user);
                this.$router.push('MainPage')
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.container{
    margin-top: 15%;
}
</style>