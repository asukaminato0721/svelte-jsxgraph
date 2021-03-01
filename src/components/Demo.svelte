<script>
  import InfinitySquare from "../examples/InfinitySquare.js";
  import Moonwalk from "../examples/Moonwalk.js";
  let textareaContent =
    "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});\n";
  export let currentContent = textareaContent;
</script>

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
>
