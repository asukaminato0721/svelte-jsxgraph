<script>
  import saveTextAsFile from "../functions/saveTextAsFile.js";
  import makeJsToHtml from "../functions/makeJsToHtml.js";
  export let currentContent;
  let currentFileName = "";
</script>

<div class="input-group mb-3">
  <input
    type="text"
    bind:value={currentFileName}
    class="form-control"
    placeholder="input file name,default is 'file.html'"
    size="50"
  />
  <button
    class="btn btn-outline-secondary"
    on:click={() =>
      saveTextAsFile(
        makeJsToHtml(currentContent),
        (currentFileName || "file") + ".html"
      )}>download as {currentFileName || "file"}.html</button
  >
</div>
