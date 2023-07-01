<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent height="100vh" class="font-weight-light"
            color="blue-grey-darken-4" theme="dark">
            <v-list-item prepend-avatar="../../public/avatar/profile-icon.png" nav>Jhone Doe
                <template v-slot:append>

                </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <!-- <v-list-item prepend-icon="mdi mdi-view-dashboard" value="dashboard" to="/dashboard">Dashboard</v-list-item> -->
                <!-- <v-list-item prepend-icon="mdi-account" value="profile" to="/profile">Profile</v-list-item> -->
                <!-- <v-list-item prepend-icon="mdi mdi-charity" value="campaign" to="/campaign">Campaign</v-list-item> -->
                <v-list-item prepend-icon="mdi mdi-plus" value="campaignlist" to="/campaign-list">Campaign List</v-list-item>
                <!-- <v-list-item prepend-icon="mdi mdi-cog" value="setting" to="/setting">Setting</v-list-item> -->
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <div class="d-flex justify-center">
                <default-bar :sidebarbtn="sidebarbtn" />
            </div>
        </v-main>
    </v-layout>
</template>
<script>
import image from '../../public/avatar/profile.jpg'
import DefaultBar from './AppBar.vue'
export default {
    components: {
        DefaultBar,
    },
    data() {
        return {
            drawer: true,
            rail: true,
        }
    },
    methods: {
        sidebarbtn() {
            this.rail = !this.rail
        }
    }
}
</script>