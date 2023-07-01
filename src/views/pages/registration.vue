<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <p class="text-h5 mb-5 font-weight-bold">Registration From</p>
            <v-form fast-fail @submit.prevent="login">

                <v-text-field v-model="name" label="Name" variant="solo"
                    prepend-inner-icon="mdi mdi-account"></v-text-field>

                <v-text-field v-model="email" label="Email" variant="solo"
                    prepend-inner-icon="mdi mdi-email"></v-text-field>

                <v-text-field v-model="password" label="Password" variant="solo"
                    prepend-inner-icon="mdi mdi-key"></v-text-field>

                <v-text-field v-model="password_confirmation" label="Confirm Password" variant="solo"
                    prepend-inner-icon="mdi mdi-key"></v-text-field>

                <v-btn type="submit" color="success" block class="mt-2" rounded="xl">Sign up</v-btn>

            </v-form>
        </v-sheet>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        };
    },
    methods: {
        login() {
            // axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('http://localhost:8005/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                    .then((response) => console.log(response))
            // })
        },
    },
}
</script>