<script lang="ts">
  export let itemList: { cmd: string; id: number }[];
  import insertTextAtCursor from "insert-text-at-cursor";
  const _delete = (index: number) => {
    itemList = itemList.filter((x) => x.id !== index);
    itemList.forEach((ele, index) => {
      ele.id = index;
    });
  };
  const insert = (item: { cmd: string; id: number }) => {
    insertTextAtCursor(document.getElementById("jscode"), item.cmd + "\n");
  };
</script>

<div class="container">
  {#each itemList as item, index}
    <div class="item">
      <input type="text" bind:value={item.cmd} />
      <button on:click={() => insert(item)}>insert</button>
      <button on:click={() => _delete(index)}>delete</button>
    </div>
  {/each}
</div>

<style>
  div.item {
    display: grid;
    grid-template-columns: auto 15% 15%;
  }
  .container {
    overflow-y: scroll;
    height: 200px;
  }
</style>
