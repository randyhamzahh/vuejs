<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn icon color="primary" :size="size" v-bind="props">
        <v-icon color="white">{{ icon }}</v-icon>
        <v-tooltip activator="parent" location="bottom">Add new Campaign</v-tooltip>
      </v-btn>
    </template>
    <v-card>

      <v-card-title>
        <span class="text-h5">Create New Campaign</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="name" label="Campaign Name*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="title" label="Title*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input label="Add Image*" prepend-icon="" append-inner-icon="mdi-camera"></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="story" label="Story" hint="Maximum character 3000"></v-textarea>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="begin" label="Start from*" append-inner-icon="mdi-calendar" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field v-model="end" label="End*" append-inner-icon="mdi-calendar" required></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="target" label="Target*"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    'size':String,
    'icon':String,
    'dataForm':Object,
  },
  created() {
  },
  data() {
    return {
      dialog: false,
      id: this.dataForm.id,
      name: this.dataForm.name,
      title: this.dataForm.title,
      story: this.dataForm.story,
      begin: this.dataForm.begin,
      end: this.dataForm.end,
      target: this.dataForm.target,
    }
  },
  methods: {
    async save() {
      this.dialog = false;
      const data = {
        name: this.name,
        title: this.title,
        story: this.story,
        begin: this.begin,
        end: this.end,
        target: this.target,
      }
      let url = 'campaigns/'
      if (this.id != '') {
        url = 'campaigns/'+ this.id
        await axios.put(url, data).then(res => {
        })
      } else {
        await axios.post(url, data).then(res => {
          this.campaigns = this.campaigns.push(res.data)
        })
      }
    },
    update(data) {
      console.log(data)
    },
  }
}
</script>