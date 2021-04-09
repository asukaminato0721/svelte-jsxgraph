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
</script>

<svelte:head>
  <!-- CSS only -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
    crossorigin="anonymous"
  />
  <!-- JavaScript Bundle with Popper -->
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
    crossorigin="anonymous"></script>
</svelte:head>
<div class="container-fluid">
  <div>
    <!-- https://support.microsoft.com/en-us/topic/how-to-remove-underlines-from-hyperlinks-that-use-frontpage-2003-4702ea91-395a-38d7-9cf7-04672ada2bbc -->
    <a class="btn btn-primary" href="https://github.com/wuyudi/svelte-jsxgraph">
      github repository</a
    >
    <Demo bind:currentContent={$currentContent} />
    <ReadInFile bind:currentContent={$currentContent} />
    <NightMode />
    <SaveLoadConfig bind:itemList />
  </div>
  <!-- https://stackoverflow.com/questions/4619668/executing-script-injected-by-innerhtml-after-ajax-call -->

  <div class="row">
    <div class="col-md-5">
      <CurrentCommand bind:itemList />
      <CurrentContent bind:currentContent={$currentContent} />
    </div>
    <div class="col-md-7">
      <div id="jxgbox" class="jxgbox" style="width:800px; height:600px;" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <AddCommand bind:itemList />
      <SaveToFile currentContent={$currentContent} />
    </div>
  </div>
</div>
