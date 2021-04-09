<script lang="ts">
  export let currentContent: string;
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

<textarea
  class="form-control"
  style="height: 400px"
  id="jscode"
  name="jscode"
  bind:value={currentContent}
/>
{hint}
