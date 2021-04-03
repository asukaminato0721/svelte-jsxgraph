<script lang="ts">
  export let itemList: { cmd: string }[];
  import SaveLoadConfig from "./SaveLoadConfig.svelte";
  import insertTextAtCursor from "insert-text-at-cursor";
</script>

<!-- in App.svelte , I can't get itemList to change,
   but I find in this components,it changes -->
<SaveLoadConfig bind:itemList />
{#each itemList as item}
  <div class="input-group">
    <input type="text" bind:value={item.cmd} class="form-control" />
  </div>
  <button
    class="btn btn-outline-secondary"
    on:click={() =>
      insertTextAtCursor(document.getElementById("jscode"), item.cmd + "\n")}
    >insert command</button
  >
  <button
    class="btn btn-outline-secondary"
    on:click={() => {
      itemList = itemList.filter((x) => x.cmd !== item.cmd);
    }}>delete</button
  >
{/each}
