<script lang="ts">
  import makeJsToHtml from "../functions/makeJsToHtml.js";
  import { Button, ButtonGroup, Row, Input, Col } from "sveltestrap";
  import { saveAs } from "file-saver";
  import JSZip from "jszip";
  export let currentContent: string;
  let _currentFileName = "";
  let jsContent: Promise<string>, cssContent: Promise<string>;
  $: currentFileName = _currentFileName || "file";
  function saveAsHtml() {
    var blob = new Blob([makeJsToHtml(currentContent)], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, currentFileName + ".html");
  }
  function saveAsZip() {
    jsContent ??= fetch(
      "https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"
    ).then((response) => response.text());
    cssContent ??= fetch(
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

<Row>
  <Col>
    <Input
      type="text"
      bind:value={_currentFileName}
      placeholder="input file name, default is 'file.html'"
    />
  </Col>
  <Col class="col-5">
    <ButtonGroup>
      <Button on:click={saveAsHtml}>download as {currentFileName}.html</Button>
      <Button on:click={saveAsZip}
        >download as {currentFileName}.zip(for offline use)</Button
      >
    </ButtonGroup>
  </Col>
</Row>
