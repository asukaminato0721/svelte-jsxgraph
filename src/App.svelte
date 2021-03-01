<script>
  import insertTextAtCursor from "insert-text-at-cursor";
  import InfinitySquare from "./examples/InfinitySquare.js";
  import Moonwalk from "./examples/Moonwalk.js"
  let textareaContent = "var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});\n";
  let addCommand="";
  let itemList = [
   {cmd:"let segment = board.create('segment', [p1, p2]);"},
   {cmd:"let circle = board.create('circle', [p1, p2]);"},
   {cmd:"let conic = board.create('conic',[A,B,C,D,E]);"},
   {cmd:"let point = board.create('point', [1.0, 1.0]);"},
  ];
  let templates = [
    {itemName:"circle",cmd:"let circle = board.create('circle', [p1, p2]);"},
    {itemName:"conic",cmd:"let conic = board.create('conic', [A,B,C,D,E])"}
  ];
  let currentContent = "";
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
<button on:click={() =>{ textareaContent=InfinitySquare;eval(InfinitySquare)}}>InfinitySquare</button>
<button on:click={() =>{ textareaContent=Moonwalk;eval(Moonwalk)}}>Moonwalk</button>
<button on:click={() =>{ textareaContent=`var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});`;
eval(textareaContent);}}>init</button><br/>
{#each itemList as item}
  <label>  <input type="text" bind:value={item.cmd} size="120"/><button on:click={() =>
    insertTextAtCursor(document.getElementById("jscode"), item.cmd+ "\n")}
  >insert command</button>
<button on:click={() => {itemList=itemList.filter(x=>x.cmd !== item.cmd);}}>delete</button>
  </label><br/>
{/each}

<input type="text" size="120" placeholder="type your own command" bind:value={addCommand}/><select bind:value={addCommand}>
		{#each templates as template}
			<option value={template.cmd}>
				{template.itemName}
			</option>
		{/each}
	</select><button on:click={
()=>{itemList=[...itemList,{cmd:addCommand}];addCommand="";}
}>click to add</button>



  <textarea
  id="jscode"
  name="jscode"
  rows="8"
  cols="140"
  bind:value={textareaContent}
/>
<!-- https://stackoverflow.com/questions/4619668/executing-script-injected-by-innerhtml-after-ajax-call -->

<button on:click={() => {eval(document.getElementById('injected').innerHTML);
currentContent = textareaContent;}}>
 {currentContent === textareaContent ? 'don\'t need to click': 'click to render'}
</button>
<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"></div>
{@html "<script type='text/javascript' id='injected'>" + textareaContent + "</script>"}
