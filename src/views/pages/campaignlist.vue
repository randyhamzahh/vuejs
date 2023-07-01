<template>
  <v-app>
    <v-container fluid ma-0 pa-0 fill-height>
      <v-text-field density="compact" variant="solo" label="Search" append-inner-icon="mdi-magnify">
        <template v-slot:append>
          <CampaignForm :dataForm="data" size="large" icon="mdi-plus" />
          <v-btn icon class="ml-2" color="success">
            <v-icon color="white">mdi mdi-tray-arrow-down</v-icon>
            <v-tooltip activator="parent" location="bottom">Export Excel</v-tooltip>
          </v-btn>
        </template>
      </v-text-field>
    </v-container>
    <v-container fluid ma-0 pa-0 fill-height>
      <v-table class="table-striped elevation-1">
        <thead>
          <tr>
            <th class="font-weight-black">Action</th>
            <th class="font-weight-black">Campaign Name</th>
            <th class="font-weight-black">Title</th>
            <th class="font-weight-black">Story</th>
            <th class="font-weight-black">Start At</th>
            <th class="font-weight-black">End At</th>
            <th class="font-weight-black">Target</th>
            <th class="font-weight-black">Earned</th>
            <th class="font-weight-black">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in campaigns" :key="item.name">
            <td>
              <CampaignForm :dataForm="item" size="small" icon="mdi mdi-pencil-outline" />
              <v-btn color="red" size="small" icon class="ml-1" @click="destroy(item.id)">
                <v-icon color="white">mdi mdi-trash-can-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">Delete</v-tooltip>
              </v-btn>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.story }}</td>
            <td>{{ item.begin }}</td>
            <td>{{ item.end }}</td>
            <td>{{ item.target }}</td>
            <td>{{ item.earned }}</td>
            <td>
              <v-btn icon size="small" color="green">
                <v-icon size="large" color="white">mdi mdi-arrow-expand-all</v-icon>
                <v-tooltip activator="parent" location="bottom">View Image</v-tooltip>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field :model-value="itemsPerPage" class="pa-2" label="Items per page" type="number" min="-1" max="15"
        hide-details @update:model-value="itemsPerPage = parseInt($event, 10)"></v-text-field>
    </v-container>
  </v-app>
</template>

<script setup>
import CampaignForm from "./../../components/campaignform.vue";
import { VDataTable } from 'vuetify/labs/VDataTable'
</script>
<script>
import axios from 'axios';

export default {
  components: {
    CampaignForm,
    VDataTable,
  },
  data() {
    return {
      dialog: false,
      campaigns: [],
      data: {
        id: '',
        name: '',
        title: '',
        story: '',
        begin: '',
        end: '',
        target: '',
      },
      page: 1,
      itemsPerPage: 5,
      headers: [
        {
          align: 'start',
          key: 'action',
          sortable: false,
          title: 'Action',
        },
        { title: 'Name', key: 'name' },
        { title: 'Title', key: 'title' },
        { title: 'Story', key: 'story' },
        { title: 'Begin', key: 'begin' },
        { title: 'End', key: 'end' },
        { title: 'Target', key: 'target' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    }
  },
  async mounted() {
    const data = await axios.get('campaigns')
    this.campaigns = data.data
  },
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / this.itemsPerPage)
    },
  },
  methods: {
    async destroy(id) {
      await axios.delete('campaigns/' + id).then(res => {
        this.campaigns = this.campaigns.filter(campaigns => campaigns.id != id)
      })
    },
  },
}
</script>