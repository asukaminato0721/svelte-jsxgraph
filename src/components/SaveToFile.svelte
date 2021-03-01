<script>
  import saveTextAsFile from "../functions/saveTextAsFile.js";
  import makeJsToHtml from "../functions/makeJsToHtml.js";
  export let currentContent;
  let currentFileName = "";
</script>

<input
  type="text"
  bind:value={currentFileName}
  placeholder="input file name,default is 'file.html'"
  size="50"
/>
<button
  on:click={() =>
    saveTextAsFile(
      makeJsToHtml(currentContent),
      (currentFileName || "file") + ".html"
    )}>download as {currentFileName || "file"}.html</button
>
