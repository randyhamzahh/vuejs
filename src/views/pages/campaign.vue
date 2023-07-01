<template>
    <v-main>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-container>
                <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <div class="d-flex fill-height justify-center align-center">
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </div>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-container>
            <v-container>
                <v-text-field label="Search" prepend-icon="mdi mdi-magnify" variant="outlined"></v-text-field>
            </v-container>
            <v-container>
                <v-row>
                    <v-col v-for="n in 24" :key="n" cols="4">
                        <v-card class="mx-auto" max-width="400">
                            <v-img class="align-end text-white" height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                <v-card-title>Top 10 Australian beaches</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Number 10
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Whitehaven Beach</div>

                                <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange">
                                    Share
                                </v-btn>

                                <v-btn color="orange">
                                    Explore
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-btn icon="mdi mdi-arrow-left-drop-circle-outline" class="mr-2"></v-btn>
                        <v-btn icon="mdi mdi-arrow-right-drop-circle-outline" class="ml-2"></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>
    </v-main>
</template>

<script>
export default {
    data: () => ({
        colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
        ],
        slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
        ],
        page: 1,
    }),
}
</script>