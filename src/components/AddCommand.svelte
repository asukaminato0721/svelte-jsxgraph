<script>
  import { _itemList, templates } from "../constants/preDefine.js";
  let addCommand = "";
  export let itemList = _itemList;
</script>

<input
  type="text"
  size="120"
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
  on:click={() => {
    itemList = [...itemList, { cmd: addCommand }];
    addCommand = "";
  }}>click to add</button
>
