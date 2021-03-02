<script>
  import saveTextAsFile from "../functions/saveTextAsFile.js";
  import makeJsToHtml from "../functions/makeJsToHtml.js";
  import { saveAs } from "file-saver"; // https://github.com/eligrey/FileSaver.js#import-saveas-from-file-saver
  import JSZip from "jszip"; // https://stuk.github.io/jszip/documentation/examples.html
  //https://stackoverflow.com/questions/19059580/client-on-node-js-uncaught-referenceerror-require-is-not-defined
  export let currentContent;
  let currentFileName = "";
  // https://stackoverflow.com/questions/148441/how-can-i-get-the-content-of-the-file-specified-as-the-src-of-a-script-tag
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#aside_on_promises
  let jsContent = fetch(
    "https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"
  ).then((response) => response.text());
  let cssContent = fetch(
    "https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraph.css"
  ).then((response) => response.text());
  // https://stuk.github.io/jszip/
  function saveAsZip() {
    var zip = new JSZip();
    zip.file(
      (currentFileName || "file") + ".html",
      makeJsToHtml(currentContent)
    );
    zip.file("jsxgraphcore.js", jsContent);
    zip.file("jsxgraph.css", cssContent);
    zip
      .generateAsync({ type: "blob" })
      .then((content) => saveAs(content, (currentFileName || "file") + ".zip"));
  }
</script>

<div class="input-group mb-3">
  <input
    type="text"
    bind:value={currentFileName}
    class="form-control"
    placeholder="input file name, default is 'file.html'"
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
  <button class="btn btn-outline-secondary" on:click={() => saveAsZip()}
    >download as {currentFileName || "file"}.zip(for offline use)</button
  >
</div>
