<script lang="ts">
  export let itemList: { cmd: string; id: number }[];
  import insertTextAtCursor from "insert-text-at-cursor";
</script>

{#each itemList as item, index}
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
      itemList = itemList.filter((x) => x.id !== index);
      itemList.forEach((ele, index) => {
        ele.id = index;
      });
    }}>delete</button
  >
{/each}
