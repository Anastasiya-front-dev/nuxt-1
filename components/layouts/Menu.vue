<script lang='ts' setup>
import { MenuItems } from './Menu.data';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const isOpen=ref(false)
</script>

<template>
    <aside class="text-gray-300  text-xl  font-medium flex max-md:text-base max-md:block ">
        <div v-for="item in MenuItems" :key="item.title" class="mx-2 my-2  hover:bg-gray-700 hover:text-white rounded-md"> 
            <NuxtLink :to="item.route" class=' '>
                <div class="flex content-center justify-start px-3 py-2" v-if="!item.children">
                    <Icon :name="item.icon" class="w-6 h-6 inline-block mr-2"/>
                    <p>{{ item.title }}</p>
                </div>
                <div v-else>
                <Popover class="relative hover:bg-gray-700  rounded-md max-md:hover:bg-gray-800 max-md:w-full" >
                    <PopoverButton class="flex content-center flex-wrap px-3 py-2" @click="isOpen=!isOpen">
                        <Icon :name="item.icon" class="w-6 h-6 inline-block mr-2"/>
                        <p>
                        {{ item.title }}
                        </p>
                        <Icon  name="pajamas:chevron-down" 
                        :class="[isOpen?'rotate-180':'','w-6 h-6 inline-block']" 
                        aria-hidden="true" />
                    </PopoverButton>
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      
                    <PopoverPanel class="absolute  md:left-1/2 z-10 md:mt-3 flex flex-col w-screen max-w-max md:-translate-x-1/2  bg-gray-800 rounded-md max-md:relative max-md:w-full">
                        <div class="md:grid md:grid-cols-1 w-full flex justify-start grow flex-col ml-2">
                            <NuxtLink 
                            v-for="inner in item.children"
                            :to="inner.route"
                            class='mx-2 my-2  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 flex content-center'>
                                <Icon :name="inner.icon" class="w-6 h-6 inline-block mr-2"/>
                                {{ inner.title }}
                                </NuxtLink>
                        </div>
                    </PopoverPanel>
                    </transition>   
                </Popover>
            </div>
            </NuxtLink>
        </div>      
    </aside>
</template>

<style lang="scss" scoped>
</style>

