<script setup>
import MellenyBg from '../icons/MellenyBG.vue'
import MellenyWrongBg from '../icons/MellenyWrongBg.vue'
import Melleny from '../icons/Melleny.vue'
import MellenyWrong from '../icons/MellenyWrong.vue'
import Size from '../icons/Size.vue'
import SizeBrown from '../icons/SizeBrown.vue'
import Svg from '../Svg.vue'
import { defineProps } from 'vue';


const props = defineProps({
    mstatus: String,
    mlabel: String,
    msize: String,
    order: String,
    time: String,
    warning: Boolean,
    isClosed: Boolean,
})

</script>

<template>
    <div class="relative ">
        <MellenyBg v-if="mstatus !== 'Sérült'" />
        <MellenyWrongBg v-if="mstatus === 'Sérült'" class="w-[258px] h-[258px] mt-2" />
        <div class="absolute " :class="mstatus !== 'Sérült' ? 'top-1 left-1.5' : 'top-2 left-0'">
            <Size v-if="mstatus !== 'Sérült'" class="relative" />
            <SizeBrown v-if="mstatus === 'Sérült'" class="relative " />
            <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-white">{{ msize }}</p>
        </div>
        <div class="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Melleny class="w-[96px] h-[96px]" v-if="mstatus !== 'Sérült'" />
            <MellenyWrong class="w-[96px] h-[96px]" v-if="mstatus === 'Sérült'" />
        </div>
        <div class="absolute top-[70px] left-1/2 -translate-x-1/2  h-full flex flex-col items-center gap-4">

            <div class="flex justify-center items-center gap-2">
                <Svg :src="mstatus === 'Elérhető' ? '../components/icons/BlueDot.vue'
                    : mstatus === 'Foglalt' ? '../components/icons/OrangeDot.vue'
                        : (mstatus === 'Foglalt') && isClosed ? '../components/icons/RedDot.vue' : mstatus === 'Sérült' ? '' : null"
                    class="w-[16px] h-[16px]" />
                <p class="text-2xl" :class="mstatus === 'Sérült' ? 'opacity-50' : null">
                    {{ mstatus }}</p>
            </div>
            <p :class="[order === 'VIP' ? 'text-[84px] leading-[95%]' : order != '' ? 'text-4xl leading-[50%]' : 'text-[125px] leading-[70%] -tracking-[1.25px]',
            mstatus === 'Sérült' ? 'opacity-50' : null]">
                {{ mlabel }} </p>
            <p v-if="time" class=""
                :class="warning ? 'text-Red text-[67px] leading-[65%]' : 'text-Orange text-[67px] leading-[65%]'">
                {{ time }}</p>
            <p v-if="isClosed" class="text-Red text-[67px] leading-[65%] ">Lejárt</p>
            <p class="text-2xl leading-[120%]">{{ order }}</p>
        </div>
    </div>
</template>

<style scoped></style>
