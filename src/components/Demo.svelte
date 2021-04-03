<script lang="ts">
  import InfinitySquare from "../examples/InfinitySquare.js";
  import Moonwalk from "../examples/Moonwalk.js";
  let textareaContent =
    "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-13, 10, 10, -10], axis:true, keepAspectRatio:true});\n";
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
