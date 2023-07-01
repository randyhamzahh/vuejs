<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-card>

            <v-card-title class="text-h5 mt-2 text-center">Welcome</v-card-title>
            <v-card-item class="justify-center">
                <v-img class="text-center" src='./../../assets/logo.png' contain height="100px" width="150px">
                </v-img>
            </v-card-item>
            <v-card-item>
                <v-sheet width="400" class="mx-auto px-8 py-8">
                    <v-form fast-fail @submit.prevent="login">
                        <v-text-field v-model="username" label="Username" variant="solo"
                            prepend-inner-icon="mdi mdi-account"></v-text-field>

                        <v-text-field v-model="password" label="password" variant="solo"
                            prepend-inner-icon="mdi mdi-key"></v-text-field>

                        <v-btn type="submit" color="success" block class="mt-2" rounded="xl">Sign in</v-btn>

                    </v-form>
                    <div class="mt-2">
                        <p class="text-body-2">Don't have an account? <router-link to="/reg" tag="button">Sign
                                up</router-link>
                        </p>
                    </div>
                </v-sheet>
            </v-card-item>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // Your login logic here
        },
    },
}
</script>