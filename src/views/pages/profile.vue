<template>
    <v-app id="inspire">
      <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
          <v-avatar
            class="me-10 ms-4"
            color="grey-darken-1"
            size="32"
          ></v-avatar>
  
          <v-btn
            v-for="link in linksOne"
            :key="link"
            variant="text"
          >
            {{ link }}
          </v-btn>
  
          <v-spacer></v-spacer>
  
          <v-responsive max-width="260">
            <v-text-field
              density="compact"
              hide-details
              variant="solo"
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-sheet rounded="lg">
                <v-list rounded="lg">
                  <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                  >
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item>
  
                  <v-divider class="my-2"></v-divider>
  
                  <v-list-item
                    link
                    color="grey-lighten-4"
                  >
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>
  
            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
              <v-list lines="two">
                <v-list-subheader>{{ card }}</v-list-subheader>
                <template v-for="n in 6" :key="n">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1"></v-avatar>
                    </template>

                    <v-list-item-title>Name {{ n }}</v-list-item-title>
                    <v-list-item-subtitle>Role {{ n }}</v-list-item-subtitle>

                    <v-list-item-subtitle>
                        <v-btn color="success" block rounded="xl">WFH</v-btn>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>

<script setup>
import { ref } from 'vue'

const cards = ['Today', 'Yesterday']
const links = [
  ['mdi-inbox-arrow-down', 'Inbox'],
  ['mdi-send', 'Send'],
  ['mdi-delete', 'Trash'],
  ['mdi-alert-octagon', 'Spam'],
]
const linksOne = [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ]

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
}
</script>