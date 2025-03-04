<script>
  import Star from "$lib/Star.svelte";
import { navLinks } from "$lib/nav.store";
</script>

<footer class=" bg-secondary">

  <div class="lg:pb-12 pb-4 lg:pt-20 lg:px-28 px-10 flex lg:flex-row flex-col justify-around gap-10">

    <div class="flex flex-col items-center lg:gap-6 text-center">
        <Star size={68} color="primary" />
        <div class="text-primary text-4xl">We help keep your business clean</div>
    </div>

    <div
      class="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 lg:gap-0 text-[#FFFFFFA6] font-semibold lg:text-xl"
    >
      <a href="/">Home</a>
      <a href="/program">Program</a>

      {#each $navLinks as item}
        <a href={item.link}>{item.title}</a>
      {/each}
    </div>
  </div>

  <div
    class="w-full text-secondary bg-primary text-sm flex flex-row justify-center items-center py-8 lg:px-28 px-10"
  >
    Copyright © 2024 - 2028 {import.meta.env.VITE_COMPANY_NAME}. All rights
    reserved.
  </div>

</footer>
