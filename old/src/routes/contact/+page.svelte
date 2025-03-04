<script lang="ts">
  let name: string;
  let email: string;
  let phone: string;
  let message: string;

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      subject: `New Care and Fun Contact Request - ${name}`,
      honeypot: "",
      message,
      replyTo: "@",
      accessKey: import.meta.env.VITE_FORM_ACCESS_KEY,
    };

    fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert("Message sent successfully!");
        } else {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
</script>

<main class="flex flex-col gap-24 py-16 h-full">
  <div
    class="flex flex-col justify-evenly gap-10 py-16 px-10 mx-10 lg:px-28 lg:mx-48 bg-[#D9D9D952] backdrop-blur-[30px] rounded-xl text-[#000000C9] text-xl"
  >
    <p class="text-center text-4xl font-bold rounded-t-xl pb-8">Contact</p>

    <div class="hidden"> 
      <p>Email - careandfunchildcare@gmail.com</p>
      <p>Phone Number - 778-757-7744</p>
    </div>

    <div class="">
      <p class="lg:text-3xl text-2xl pb-3 font-semibold">
        Hours of operation :
      </p>
      <p>Monday to Friday 7:00 am - 5:30 pm</p>
      <p>CLOSED on all statutory holidays (closure posted in advance)</p>
    </div>

    <form
      on:submit={handleSubmit}
      class="flex lg:gap-10 mt-10 *:flex *:flex-col *:gap-4"
    >
      <div class="items-end *:p-2 *:hidden *:lg:block">
        <label for="name">Name</label>
        <label for="email">Email</label>
        <label for="phone">Phone</label>
        <label for="message">Message</label>
      </div>

      <div class="*:rounded-lg *:p-2 *:px-4 w-full *:outline-none">
        <label for="name" class="-m-4 -mb-6 font-semibold lg:hidden">Name</label
        >
        <input type="text" id="name" placeholder="John Doe" bind:value={name} />
        <label for="name" class="-m-4 -mt-2 -mb-6 font-semibold lg:hidden"
          >Email</label
        >
        <input
          type="email"
          id="email"
          placeholder="example@email.com"
          bind:value={email}
        />
        <label for="name" class="-m-4 -mt-2 -mb-6 font-semibold lg:hidden"
          >Phone</label
        >
        <input
          type="tel"
          id="phone"
          placeholder="+1 1234567890"
          bind:value={phone}
        />
        <label for="name" class="-m-4 -mt-2 -mb-6 font-semibold lg:hidden"
          >Message</label
        >
        <textarea id="message" placeholder="Message" bind:value={message} />
        <!-- <input type="submit" value="Submit" class="cursor-pointer" /> -->
        <div class="w-full flex justify-center">
          <div class="rainbow-gradient rounded-lg w-fit">
            <button
              type="submit"
              value="Submit"
              class="rounded-lg p-2 px-16 font-bold lg:text-2xl bg-white border border-black text-[#000000D1] -translate-y-1 translate-x-1 hover:-translate-y-2 hover:translate-x-2 transition-all duration-500 ease-in-out"
              >Submit</button
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</main>
