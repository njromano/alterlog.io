<template>
    <div class="alters">
        <div class="alter-card" v-for="(a, index) in alters">
            <router-link :to="'alters/' + a.name">
                <img :alt="a.name" :src="a.image + `?random=` + index" class="elevation-10">
                <span class="alter-name">{{ a.name }}</span>
            </router-link>
        </div>
        <v-btn to="/alters/new"
               style="z-index: 10"
               class="mb-5"
               color="primary"
               fixed
               right
               bottom
               fab>
            <v-icon>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "Alters",
        data() {
            return {
                alters: [
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                    {
                        name: 'name',
                        image: 'https://picsum.photos/100',
                    },
                ],
            };
        },
    };
</script>

<style scoped>
    .alters {
        display: grid; /* 1 */
        grid-template-columns: repeat(auto-fill, 100px); /* 2 */
        grid-gap: 1rem; /* 3 */
        justify-content: space-evenly; /* 4 */
        margin: 2rem 0;
    }

    .alters::after {
        content: "";
        flex: auto;
    }

    .alter-card {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
    .alter-card img {
        border-radius: 50%;
    }

    a {
        text-decoration: none !important;
    }
</style>
