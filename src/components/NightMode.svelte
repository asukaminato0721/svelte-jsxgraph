<script lang="ts">
  export let isNight = false;
  import { Button, Label } from "sveltestrap";
</script>

<Label>Day/Night Mod</Label>
<!-- c means nothing , just for tag to convert color -->
<Button
  on:click={() => {
    isNight = !isNight;
  }}
>
  {!isNight ? "to night" : "to day"}
</Button>
