<template>
    <div class="relative">
        <Red />
        <p
            class="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[84px] leading-[95%] font-medium">
            {{
                mlabel }}</p>
    </div>
</template>

<script setup>
import Red from '../icons/Red.vue'
import { defineProps } from 'vue';

const props = defineProps({
    mlabel: String,
})

</script>

<style scoped></style>