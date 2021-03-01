<script>
  import insertTextAtCursor from "insert-text-at-cursor";
  import AddCommand from "./components/AddCommand.svelte";
  import Demo from './components/Demo.svelte'
  import CurrentCommand from './components/CurrentCommand.svelte';
  import SaveToFile from './components/SaveToFile.svelte';
  import {_itemList,textareaContent} from "./constants/preDefine.js";
  let itemList = _itemList;
  let currentContent = textareaContent; // current content is in textarea
</script>

<!-- https://support.microsoft.com/en-us/topic/how-to-remove-underlines-from-hyperlinks-that-use-frontpage-2003-4702ea91-395a-38d7-9cf7-04672ada2bbc -->
<a style="text-decoration:none" href="https://github.com/wuyudi/svelte-jsxgraph"
>click to return github repository</a>
<h3>choose command</h3>

<Demo bind:currentContent={currentContent}/><br />

<CurrentCommand itemList={itemList}/>

<AddCommand bind:itemList={itemList}/>

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
<SaveToFile currentContent={currentContent}/>
