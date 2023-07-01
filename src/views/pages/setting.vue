<template>
    <div>
        {{ data }}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: {},
        };
    },
    async mounted() {
        const response = await axios.get('http://localhost:8005/api/campaigns')
        this.data = response;
    },
}
</script>