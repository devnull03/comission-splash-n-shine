<script>
  import Star from "$lib/Star.svelte";

  const scroll_images = ["/photo1.jpg"];

  let current_image = 0;

  const services = [
    "House Washing",
    "Roof Cleaning",
    "Concrete Cleaning",
    "Driveway Cleaning",
    "Deck & Fence Cleaning",
    "Solar Panel Services",
    "Other",
  ];

  const formStruct = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    services: [],
    howDidYouHear: "",
  };

</script>

<main class="flex flex-col h-full">

  <section class="flex items-center justify-center relative">
    <div class="w-full h-[90vh]">
      {#key current_image}
        <img
          src={scroll_images[current_image]}
          alt=""
          class="w-full h-full object-cover"
        />
      {/key}
    </div>

    <div
      class="w-[70vw] min-h-[55vh] absolute text-secondary text-center bg-primary bg-opacity-60 backdrop-blur-[10px] flex flex-col items-center justify-center lg:px-20 py-10 lg:py-20 rounded-xl shadow-2xl gap-12"
    >
      <p class="text-6xl font-AbhayaLibre font-extrabold">
        Revitalize Your Property with Power Washing Magic
      </p>
      <p class="text-2xl text-secondary text-opacity-70 lg:px-30">
        Industry grade pressure washing services for residential and commercial
        buildings
      </p>
      <button
        class="flex items-center rounded-full bg-primary px-8 p-4 text-3xl gap-4 font-AbhayaLibre font-extrabold"
      >
        Contact us <Star color="secondary" /></button
      >
    </div>
  </section>

  <section class="bg-primary flex flex-col py-28 gap-16">

    <div class="flex items-center">
      <div class="w-[60vw] flex flex-col pl-20 pr-40 gap-16">
        <div
          class="grid grid-cols-2 *:rounded-[10px] *:bg-secondary *:placeholder:text-primary *:placeholder:text-opacity-70 *:text-primary text-xl font-bold *:px-4 *:py-2 *:outline-none gap-6"
        >
          <input
            type="text"
            placeholder="First Name"
            bind:value={formStruct.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            bind:value={formStruct.lastName}
          />
          <input
            type="email"
            placeholder="Email"
            bind:value={formStruct.email}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            bind:value={formStruct.phone}
          />
          <input
            type="text"
            placeholder="Address"
            class="col-span-2"
            bind:value={formStruct.address}
          />
          <input
            type="text"
            placeholder="Zip Code"
            bind:value={formStruct.zipCode}
          />
        </div>

        <div class="text-white font-bold text-xl flex flex-col gap-4">
          <h3>Choose your services:</h3>
          <div class="grid grid-cols-2 gap-2">
            {#each services as service}
              <label>
                <input
                  type="checkbox"
                  value={service}
                  bind:group={formStruct.services}
                />
                {service}
              </label>
            {/each}
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-white font-bold text-xl">How did you hear about us?</h3>
          <input type="text" bind:value={formStruct.howDidYouHear} class="rounded-[10px] bg-secondary placeholder:text-primary placeholder:text-opacity-70 text-xl font-bold px-4 py-2 w-full outline-none" />
        </div>
      </div>

      <div class="w-[40vw]"><img src="/GutterCleaning.svg" alt="" /></div>
    </div>

    <div class="flex items-center justify-center">
      <button
        class="flex items-center rounded-xl bg-secondary text-primary px-6 p-2 text-xl gap-4 font-AbhayaLibre font-extrabold"
      >
        Get Free Quote
      </button>
    </div>

  </section>

</main>
