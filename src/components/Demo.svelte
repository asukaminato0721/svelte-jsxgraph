<script>
  import InfinitySquare from "../examples/InfinitySquare.js";
  import Moonwalk from "../examples/Moonwalk.js";
  let textareaContent =
    "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});\n";
  export let currentContent = textareaContent;
</script>

<button
  class="btn btn-primary"
  on:click={() => {
    currentContent = InfinitySquare;
  }}>InfinitySquare</button
>
<button
  class="btn btn-primary"
  on:click={() => {
    currentContent = Moonwalk;
  }}>Moonwalk</button
>
<button
  class="btn btn-primary"
  on:click={() => {
    currentContent = textareaContent;
  }}>init</button
>
