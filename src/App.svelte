<script>
  import insertTextAtCursor from "insert-text-at-cursor";
  import saveTextAsFile from "./functions/saveTextAsFile.js";
  import InfinitySquare from "./examples/InfinitySquare.js";
  import Moonwalk from "./examples/Moonwalk.js";
  import makeJsToHtml from "./functions/makeJsToHtml.js";
  import {_itemList,templates,textareaContent} from "./constants/preDefine.js";
  import CurrentCommand from './components/CurrentCommand.svelte';
  let itemList = _itemList;
  let addCommand="";
  let currentContent = textareaContent; // current content is in textarea
</script>

<!-- https://support.microsoft.com/en-us/topic/how-to-remove-underlines-from-hyperlinks-that-use-frontpage-2003-4702ea91-395a-38d7-9cf7-04672ada2bbc -->
<a style="text-decoration:none" href="https://github.com/wuyudi/svelte-jsxgraph"
>click to return github repository</a>
<h3>choose command</h3>

<button
  on:click={() => {
    currentContent = InfinitySquare;
    eval(InfinitySquare);
  }}>InfinitySquare</button
>
<button
  on:click={() => {
    currentContent = Moonwalk;
    eval(Moonwalk);
  }}>Moonwalk</button
>
<button
  on:click={() => {
    currentContent = textareaContent;
    eval(currentContent);
  }}>init</button
><br />

<CurrentCommand itemList={itemList}/>

<input type="text"
 size="120"
  placeholder="type command or choose from right"
   bind:value={addCommand}/>

   <select
    bind:value={addCommand}>
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
  bind:value={currentContent}
/>
<!-- https://stackoverflow.com/questions/4619668/executing-script-injected-by-innerhtml-after-ajax-call -->

<button on:click={() => {eval(document.getElementById('injected').innerHTML);
}}>click to render</button>
<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"></div>
{@html "<script type='text/javascript' id='injected'>" + currentContent + "</script>"}
<button on:click={
() => saveTextAsFile(makeJsToHtml( currentContent),"file.html")
}>download as file</button>
