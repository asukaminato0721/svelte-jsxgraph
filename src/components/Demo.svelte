<script lang="ts">
  import InfinitySquare from "../examples/InfinitySquare";
  import { Button, ButtonGroup } from "sveltestrap";
  let textareaContent =
    "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-13, 10, 10, -10], axis:true, keepAspectRatio:true});\n";
  export let currentContent = textareaContent;
</script>

<Button
  on:click={() => {
    currentContent = InfinitySquare;
  }}>Demo</Button
>
<Button
  on:click={() => {
    currentContent = textareaContent;
  }}>init</Button
>
