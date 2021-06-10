<script lang="ts">
  export let currentContent: string;
  import { Input } from "sveltestrap";
  let hint = "";
  $: setTimeout(() => {
    try {
      window.eval(currentContent);
      hint = "All correct.";
    } catch (error) {
      hint = "Code has some error.";
    }
  }, 400);
</script>

<Input rows={22} type="textarea" id="jscode" bind:value={currentContent} />
