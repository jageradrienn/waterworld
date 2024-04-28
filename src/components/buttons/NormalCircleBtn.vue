<template>

    <NormalBtn />
    <img src="../icons/NormalBtnShadow.png" class="absolute -top-1/2 -left-1/2 max-w-[initial] w-[192px] h-[192px]">
    <p class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">{{ label }}</p>
    <div class="absolute top-0 left-0 w-[96px] h-[96px]" :class="border"></div>
</template>

<script setup>
import NormalBtn from "../icons/NormalBtn.vue"
import { defineProps } from 'vue';
const props = defineProps({
    label: String,
    border: String
});
</script>

<style scoped></style>