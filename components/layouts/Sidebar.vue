<script lang='ts' setup>

const navigation=[{name:'Home',href:'/'},{name:'About',href:'/about'}]
</script>

<template>
    <aside class="text-gray-300  text-xl  font-medium flex max-md:text-base max-md:block ">
        <div v-for="item in navigation" :key="item.name" class="mx-2 my-2  hover:bg-gray-700 hover:text-white rounded-md">
            <NuxtLink  :to="item.href" class='px-3 py-2 block'>{{ item.name }}</NuxtLink>
        </div>      
    </aside>  
</template>

<style lang="scss" scoped>
</style>

