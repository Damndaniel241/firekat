<script setup lang="ts"></script>

<template>
  <div
    class="text-3xl flex justify-center font-bold place-self-center capitalize"
  >
    join firekat
  </div>
  <div
    class="bg-[#e8ece0] rounded-lg w-[70em] place-self-center flex flex-col border border-gray-300 shadow-lg"
  >
   
    <div class="bg-[#F6F6EC] p-2 flex justify-center gap-2 border border-gray-300 rounded-t-lg">
        <div class="flex items-center gap-1">
        <span>Email: </span>
        <input type="email" class="p-1 rounded-xl bg-white border-gray-300" />
      </div>
        </div>
        <div class="bg-[#e8ece0] p-2 flex justify-center gap-2  border border-gray-300">
        <div class="flex items-center gap-1">
        <span>Username: </span>
        <input type="text" class="p-1 rounded-xl bg-white border-gray-300" />
      </div>
        </div>
        <div class="bg-[#F6F6EC] p-2 flex justify-center gap-2 ">
        <div class="flex items-center gap-1">
        <span>Password: </span>
        <input type="password" class="p-1 rounded-xl bg-white border-gray-300" />
      </div>
        </div>
        <div class="bg-[#e8ece0] p-2 flex justify-center gap-2 rounded-b-lg border border-gray-300">
        <button class="bg-white rounded-2xl p-2 cursor-pointer">join firekat</button>
        </div>
  </div>
</template>
