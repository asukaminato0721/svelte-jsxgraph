<script>
  import insertTextAtCursor from "insert-text-at-cursor";
  let textareaContent = "var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-20, 10, 20, -10], axis:true});\n";
  let itemList = [
    {
      name: "Segment",
      cmd: "let segment = board.create('segment', [p1, p2]);",
    },
    { name: "Circle", cmd: "let circle = board.create('circle', [p1, p2]);" },
    { name: "Conic", cmd: "let conic = board.create('conic',[A,B,C,D,E]);" },
    { name: "Point", cmd: "let point = board.create('point', [1.0, 1.0]);" },
  ];
</script>

<svelte:head>
  <script
    type="text/javascript"
    charset="UTF-8"
    src="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"></script>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraph.css"
  />
</svelte:head>
<!-- https://support.microsoft.com/en-us/topic/how-to-remove-underlines-from-hyperlinks-that-use-frontpage-2003-4702ea91-395a-38d7-9cf7-04672ada2bbc -->
<a style="text-decoration:none" href="https://github.com/wuyudi/svelte-jsxgraph">click to return github repository</a>
<h3>choose command</h3>
{#each itemList as item}
  <label><button on:click={() =>
    insertTextAtCursor(document.getElementById("jscode"), item.cmd + "\n")}
  >plot {item.name}</button
>  <input type="text" bind:value={item.cmd} size="150" />
  </label><br/>
{/each}
<textarea
  id="jscode"
  name="jscode"
  rows="4"
  cols="160"
  bind:value={textareaContent}
/><!-- https://stackoverflow.com/questions/4619668/executing-script-injected-by-innerhtml-after-ajax-call -->
<button on:click={() => { let injected = document.getElementById('injected')
    eval(injected.innerHTML)}}>rerender</button>
<div id="box" class="jxgbox" style="width:600px; height:300px;"></div>
{@html "<script type='text/javascript' id='injected'>" + textareaContent + "</script>"}

<!-- it can't work -->
