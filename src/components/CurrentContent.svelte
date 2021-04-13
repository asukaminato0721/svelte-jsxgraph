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

<textarea id="jscode" name="jscode" bind:value={currentContent} />
{hint}

<style>
  textarea {
    height: 360px;
    padding: 1ex;
    margin: 0%;
  }
</style>
