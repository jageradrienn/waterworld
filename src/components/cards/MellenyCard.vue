<script setup>
import MellenyBg from '../icons/MellenyBG.vue'
import MellenyWrongBg from '../icons/MellenyWrongBg.vue'
import Melleny from '../icons/Melleny.vue'
import MellenyWrong from '../icons/MellenyWrong.vue'
import Size from '../icons/Size.vue'
import SizeBrown from '../icons/SizeBrown.vue'
import Svg from '../Svg.vue'
import { defineProps } from 'vue';

defineProps({
    status: String,
    statusLabel: String,
    label: String,
    size: String,
    order: String,
    time: String,
    warning: Boolean,
    isClosed: Boolean,
})

</script>

<template>
    <div class="relative ">
        <MellenyBg v-if="status !== 'wrong'" />
        <MellenyWrongBg v-if="status === 'wrong'" class="w-[258px] h-[258px] mt-2" />
        <div class="absolute " :class="status !== 'wrong' ? 'top-1 left-1.5' : 'top-2 left-0'">
            <SizeBrown v-if="status === 'wrong'" class="relative" />
            <Size v-else class="relative" />
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-white">{{ size }}</p>
        </div>
        <div class="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <MellenyWrong v-if="status === 'wrong'" class="w-[96px] h-[96px]" />
            <Melleny v-else class="w-[96px] h-[96px]" />
        </div>
        <div class="absolute top-[70px] left-1/2 -translate-x-1/2  h-full flex flex-col items-center gap-4">

            <div class="flex justify-center items-center gap-2">
                <Svg :src="status === 'free' ? '../components/icons/BlueDot.vue'
                    : status === 'reserved' ? '../components/icons/OrangeDot.vue'
                        : (status === 'reserved') && isClosed ? '../components/icons/RedDot.vue' : status === 'wrong' ? '' : null"
                    class="w-[16px] h-[16px]" />
                <p class="text-2xl" :class="status === 'wrong' ? 'opacity-50' : null">
                    {{ statusLabel }}</p>
            </div>
            <p :class="[order === 'VIP' ? 'text-[84px] leading-[95%]' : order != '' ? 'text-4xl leading-[50%]' : 'text-[125px] leading-[70%] -tracking-[1.25px]',
            status === 'wrong' ? 'opacity-50' : null]">
                {{ label }} </p>
            <p v-if="time" class=""
                :class="warning ? 'text-Red text-[67px] leading-[65%]' : 'text-Orange text-[67px] leading-[65%]'">
                {{ time }}</p>
            <p v-if="isClosed" class="text-Red text-[67px] leading-[65%] ">Lejárt</p>
            <p class="text-2xl leading-[120%]">{{ order }}</p>
        </div>
    </div>
</template>

<style scoped></style>
