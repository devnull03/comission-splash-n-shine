<script lang="ts">
  export let color: "primary" | "secondary" = "primary";
  export let size = 33;
</script>

<svg
  width="{size}"
  height="{size}"
  viewBox="0 0 68 66"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    id="Vector"
    d="M67.8311 33.5831C43.785 38.3439 39.351 42.4919 33.6559 65.5531C28.7003 42.3217 24.4009 38.0342 0.519245 32.5077C24.5653 27.7469 28.9995 23.5989 34.6945 0.537673C39.6501 23.7691 43.9494 28.0566 67.8311 33.5831Z"
    class:fill-primary="{color === 'primary'}"
    class:fill-secondary="{color === 'secondary'}"
  />
</svg>
