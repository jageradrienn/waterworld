<script setup>
import Logo from './components/icons/Logo.vue';
import SwithBG from './components/icons/SwithBG.vue';
import SwitchBTN from './components/icons/SwitchBTN.vue';
import NormalCircleBtn from './components/buttons/NormalCircleBtn.vue';
import PushedCircleBtn from './components/buttons/PushedCircleBtn.vue';
import MellenyCard from './components/cards/MellenyCard.vue';
import NoClosedCard from './components/cards/NoClosedCard.vue';
import Homokora from './components/icons/Homokora.vue';
import ClosedCard from './components/cards/ClosedCard.vue';
import Svg from './components/Svg.vue';
import { ref } from 'vue';
import {vests} from "../data/vests.json"
import {menuItems} from "../data/menu_items.json"

const Btnstatus = ref();

const toggleIsPushed = async (id) => {
  for (const item of menuItems) {
    if (item.id === id && !item.isPushed) {
      item.isPushed = !item.isPushed;
      Btnstatus.value = item.Btnstatus;
      await filterItems(item.Btnstatus);
    }
    else if (item.id === id && item.isPushed) {
      item.isPushed = true;
    }
    else {
      item.isPushed = false;
    }
  }
};

const filterItems = async (filter) => {

};
</script>

<template>
  <main>
    <header class="flex justify-between items-center">
      <section class="flex gap-[55px] items-center ">
        <Logo class="ml-8" />
        <nav>
          <ul class="w-[608px] flex items-center gap-x-8">
            <li v-for="item in menuItems" :key="item.id" class="relative cursor-pointer"
              @click="toggleIsPushed(item.id)">
              <PushedCircleBtn v-if="item.isPushed" :label="item.label" />
              <NormalCircleBtn v-else :label="item.label" :border="item.border" />
            </li>
          </ul>
        </nav>
      </section>
      <section class=" flex justify-between items-center relative gap-8">
        <SwithBG />
        <div class="absolute -top-1 left-0">
          <SwitchBTN class="relative" />
        </div>
        <div class="flex items-center gap-1.5 absolute top-1/2 left-1/2 -translate-x-[11.5rem] -translate-y-1/2 ">
          <Svg :src="'../components/icons/ActiveBlue.vue'" />
          <p class="text-Blue-400">Aktív</p>
        </div>
        <div class="flex items-center gap-1.5 absolute top-1/2 left-1/2 -translate-x-[2rem] -translate-y-1/2 ">
          <Svg :src="'../components/icons/BreakBrown.vue'" />
          <p class="text-Brown">Szüneteltetve</p>
        </div>
        <Svg :src="'../components/icons/Settings.vue'" />
      </section>
    </header>
    <section class="content flex justify-center items-center pt-[25px] gap-[52px]">
      <article class="flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <p class="text-4xl ml-8">Mellények</p>
          <p class="text-4xl mr-8"><span>{{ vests.length }}</span>/<span>{{ vests.length }} </span> Elérhető
          </p>
        </div>
        <div class="left-blur-card flex justify-between items-center ">
          <div class="gridBox h-full w-[97%] pt-20 pl-7 pr-[60px] grid grid-cols-4 gap-x-5 gap-y-16 "
            :class="vests.length ? 'overflow-y-auto' : null">
            <template v-for="item in vests" :key="item.id">
              <MellenyCard :mstatus="item.mstatusLabel" :mlabel="item.mlabel" :msize="item.msize" :order="item.order"
                :time="item.time" :warning="item.warning" :isClosed="item.isClosed" />
              <MellenyCard v-if="item.mstatus === 'reserved' && Btnstatus === 'closed'" :mstatus="item.mstatusLabel"
                :mlabel="item.mlabel" :msize="item.msize" :order="item.order" :time="item.time" :warning="item.warning"
                :isClosed="item.isClosed" />
            </template>
          </div>
        </div>
      </article>
      <article class="right-blur-card ">
        <div class="flex flex-col items-center justify-center gap-6">
          <Homokora />
          <p class="text-4xl font-bold">Lejárt mellények</p>
          <NoClosedCard />
        </div>
        <div class="flex flex-col items-center justify-center gap-6">
          <template v-for="item in vests" :key="item.id">
            <ClosedCard v-if="item.isClosed" :mlabel="item.mlabel" />
          </template>
        </div>

      </article>
    </section>
  </main>

</template>

<style scoped>
.gridBox::-webkit-scrollbar {
  width: 18px;
}

.gridBox::-webkit-scrollbar-track {
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
  background-color: #FFFBEB;
  border: 2px solid white;
  box-shadow: -1px -1px 3px 0px #FFF, 1.5px 1.5px 3px 0px rgba(174, 174, 192, 0.40);
}

.gridBox::-webkit-scrollbar-thumb {
  width: 16px;
  border-radius: 12px;
  background-image: linear-gradient(90deg, #1EBAFF 100%, #127099 0%);
  box-shadow: 0px 0px 2px 0px rgba(114, 138, 183, 0.70);
}
</style>
