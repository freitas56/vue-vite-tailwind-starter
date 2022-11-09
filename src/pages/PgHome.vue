<template>
   <div class="py-8">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
         <p class="text-slate-400" style="color: #33ccff">
            <span style="color: #b499ff">let </span>
            <span style="color: #a6accd"> templateStart = </span>
            <span>["</span>
            <span style="color: #b9e880">Vue</span>
            <span>", "</span>
            <span style="color: #b9e880"> Vite</span>
            <span>", "</span>
            <span style="color: #b9e880"> Tailwind</span>
            <span>"]</span>
            <span class="blink" style="color: #ffcc00">|</span>
         </p>
      </div>
   </div>
</template>

<script setup></script>

<style>
.blink {
   animation: blink-animation 1s steps(2, start) infinite;
}
@keyframes blink-animation {
   to {
      visibility: hidden;
   }
}
</style>
