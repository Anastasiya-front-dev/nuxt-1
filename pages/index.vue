<script lang='ts' setup>
const header=['Identifier','Access code','Recovery code','First name','Last name','Department','Location'];
const table=[['9012','12se74','rb9012','Rachel','Booker','Sales','Manchester'],
['2070','04ap67','lg2070','Laura','Grey','Depot','London'],
['4081','30no86','cj4081','Craig','Johnson','Depot','London'],
['9346','14ju73','mj9346','Mary','Jenkins','Engineering','Manchester'],
['5079','09ja61','js5079','Jamie','Smith','Engineering','Manchester']]
</script>

<template>
  <table>
  <tr>
    <th v-for="item,idx in header" class="border-solid border-2 border-gray-500 px-2 py-1">{{ item }}</th>
  </tr>
  <tr v-for="item,idx in table" :key="idx">
    <td v-for="inner,idx in item" :key="idx" class="border-solid border-2 border-gray-500 px-2 py-1">{{ inner }}</td>
  </tr>
</table>
</template>

<style lang="scss" scoped>
</style>


  