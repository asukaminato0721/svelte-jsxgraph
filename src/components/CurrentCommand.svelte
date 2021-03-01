<script>
  export let itemList;
  import insertTextAtCursor from "insert-text-at-cursor";
</script>

{#each itemList as item}
  <label>
    <input type="text" bind:value={item.cmd} size="120" /><button
      on:click={() =>
        insertTextAtCursor(document.getElementById("jscode"), item.cmd + "\n")}
      >insert command</button
    >
    <button
      on:click={() => {
        itemList = itemList.filter((x) => x.cmd !== item.cmd);
      }}>delete</button
    >
  </label><br />
{/each}
