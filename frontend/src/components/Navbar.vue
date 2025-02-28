<template>
    <nav class="bg-yellow-400 py-4 px-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">DSMS</h1>
        <ul class="hidden md:flex space-x-6">
            <li><a href="#" class="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">About</a></li>
            <li><a href="#" class="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
        </ul>
        <!-- <div class="h-8 w-8 rounded-[50%] bg-white md:hidden"></div> -->
        <Avatar
          :shape="'circle'"
          :ref_for="true"
          :image="null"
          label="EY"
          size="md"
          class="md:hidden"
        />
      </div>
    </nav>
  </template>
  

<script>
  import { Avatar } from 'frappe-ui'

  export default{
    name: 'navbar',
    components : {
      Avatar
    }
  }
</script>