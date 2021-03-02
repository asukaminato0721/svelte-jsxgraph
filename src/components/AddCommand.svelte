<script>
  import { _itemList, templates } from "../constants/preDefine.js";
  let addCommand = "";
  export let itemList = _itemList;
</script>

<div class="input-group">
  <input
    type="text"
    class="form-control"
    placeholder="type command or choose from right"
    bind:value={addCommand}
  />
  <select bind:value={addCommand}>
    {#each templates as template}
      <option value={template[1]}>
        {template[0]}
      </option>
    {/each}
  </select>
  <button
    class="btn btn-outline-secondary"
    on:click={() => {
      itemList = [...itemList, { cmd: addCommand }];
      addCommand = "";
    }}>click to add</button
  >
</div>
