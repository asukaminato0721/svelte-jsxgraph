<script lang="ts">
  import makeJsToHtml from "../functions/makeJsToHtml.js";
  import { saveAs } from "file-saver"; // https://github.com/eligrey/FileSaver.js#import-saveas-from-file-saver
  import JSZip from "jszip"; // https://stuk.github.io/jszip/documentation/examples.html
  //https://stackoverflow.com/questions/19059580/client-on-node-js-uncaught-referenceerror-require-is-not-defined
  export let currentContent: string;
  let _currentFileName = "";
  let jsContent: Promise<string>, cssContent: Promise<string>;
  $: currentFileName = _currentFileName || "file";
  // https://stackoverflow.com/questions/148441/how-can-i-get-the-content-of-the-file-specified-as-the-src-of-a-script-tag
  // https://stuk.github.io/jszip/
  function saveAsHtml() {
    // https://github.com/eligrey/FileSaver.js#saving-text-using-require
    var blob = new Blob([makeJsToHtml(currentContent)], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, currentFileName + ".html");
  }
  function saveAsZip() {
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#aside_on_promises
    jsContent =
      jsContent ?? // check if loaded
      fetch(
        "https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"
      ).then((response) => response.text());
    cssContent =
      cssContent ?? // check if loaded
      fetch(
        "https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraph.css"
      ).then((response) => response.text());
    let zip = new JSZip();
    zip
      .file(currentFileName + ".html", makeJsToHtml(currentContent))
      .file("jsxgraphcore.js", jsContent)
      .file("jsxgraph.css", cssContent)
      .generateAsync({ type: "blob" })
      .then((content) => saveAs(content, currentFileName + ".zip"));
  }
</script>

<div>
  <input
    type="text"
    bind:value={_currentFileName}
    placeholder="input file name, default is 'file.html'"
  />
  <button on:click={saveAsHtml}>download as {currentFileName}.html</button>
  <button on:click={saveAsZip}
    >download as {currentFileName}.zip(for offline use)</button
  >
</div>

<style>
  div {
    display: grid;
    grid-template-columns: auto 20% 20%;
  }
</style>
