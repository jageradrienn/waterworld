<template>
    <Push class="relative w-[96px] h-[96px]" :class="border" />
    <p class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">{{ label }}</p>
</template>

<script setup>
import Push from '../icons/Push.vue';
import { defineProps } from 'vue';
const props = defineProps({
    label: String,
    border: String
});
</script>

<style scoped></style>