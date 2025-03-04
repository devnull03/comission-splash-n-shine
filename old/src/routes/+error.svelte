<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    if ($page.status === 404) {
      goto("/");
    }
  });
</script>

<div class="h-screen flex justify-center z-99 pt-10">
  {$page.error?.message}
</div>
