<script lang="ts">
  import AddCommand from "./components/AddCommand.svelte";
  import Demo from "./components/Demo.svelte";
  import CurrentCommand from "./components/CurrentCommand.svelte";
  import SaveToFile from "./components/SaveToFile.svelte";
  import ReadInFile from "./components/ReadInFile.svelte";
  import NightMode from "./components/NightMode.svelte";
  import SaveLoadConfig from "./components/SaveLoadConfig.svelte";
  import { currentContent } from "./components/current_content.js";
  import CurrentContent from "./components/CurrentContent.svelte";
  import constants from "./constants/constants.json";
  let itemList = constants.itemList;
  let isNight = false;
</script>

<div class="container">
  <div class="menu">
    <!-- https://support.microsoft.com/en-us/topic/how-to-remove-underlines-from-hyperlinks-that-use-frontpage-2003-4702ea91-395a-38d7-9cf7-04672ada2bbc -->
    <a target="_blank" href="https://github.com/wuyudi/svelte-jsxgraph">
      github repository</a
    >
    <div>
      <Demo bind:currentContent={$currentContent} />
    </div>
    <div>
      <ReadInFile bind:currentContent={$currentContent} />
    </div>
    <div>
      <NightMode bind:isNight />
    </div>
    <div>
      <SaveLoadConfig bind:itemList />
    </div>
  </div>
  <!-- https://stackoverflow.com/questions/4619668/executing-script-injected-by-innerhtml-after-ajax-call -->

  <div class="plot">
    <div class="current">
      <CurrentCommand bind:itemList />
      <CurrentContent bind:currentContent={$currentContent} />
    </div>
    <div class="img">
      <div id="jxgbox" class="jxgbox" style="height: 560px;width=400px;" />
    </div>
  </div>
  <div class="AddCommand">
    <AddCommand bind:itemList />
  </div>
  <div class="SaveToFile">
    <SaveToFile currentContent={$currentContent} />
  </div>
</div>
{#if isNight}
  <style>
    :not(.img > *):not(foreignObject):not(.jxgbox) {
      color: #999;
      background-color: black;
    }
  </style>
{/if}

<style>
  .container {
    display: grid;
    grid-template-rows: 5% auto 7% 5%;
  }
  .menu {
    display: flex;
    justify-content: space-between;
  }
  .plot {
    display: grid;
    grid-template-columns: 40% auto;
  }
  .current {
    display: grid;
    grid-template-rows: max-content;
    max-height: 600px;
  }
</style>
