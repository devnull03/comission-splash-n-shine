<script lang="ts">
  const navLinks = [
    {
      name: "Get Quote",
      href: "/",
      icon: "/icons/Quote.svg",
    },
    {
      name: "Services",
      href: "/",
      icon: "/icons/Service.svg",
    },
    {
      name: "About us",
      href: "/",
      icon: "/icons/About.svg",
    },
  ];
</script>

<nav class="">
  <div
    class="top-0 bg-primary shadow-md fixed h-24 w-full z-50 flex flex-row justify-between items-center px-6"
  >
    <a
      href="/"
      class="object-contain h-fit flex flex-col items-center lg:text-2xl font-light"
    >
      <img src="/logo.svg" class="h-14" alt="" />
    </a>

    <div class="flex flex-row justify-evenly gap-4 lg:gap-8 items-center">
      <!-- nav links -->
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-primary p-2 px-4 bg-secondary rounded transition-colors duration-300 ease-in-out flex gap-4 items-center"
        >
          <span><img src={link.icon} alt="" /></span>
          <span>{link.name}</span>
        </a>
      {/each}
    </div>
  </div>
</nav>
