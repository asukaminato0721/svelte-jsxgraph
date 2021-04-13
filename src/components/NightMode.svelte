<script lang="ts">
  export let isNight = false;
</script>

<c>Day/Night Mod</c>
<!-- c means nothing , just for tag to convert color -->
<button
  on:click={() => {
    isNight = !isNight;
  }}
>
  {!isNight ? "to night" : "to day"}
</button>
