<script lang="ts">
  import constants from "../constants/constants.json";
  import Select from "svelte-select";
  let addCommand: { index: number; value: string };
  import insertTextAtCursor from "insert-text-at-cursor";
  export let itemList = constants.itemList;
  let templates = constants.Templates.map((e) => [
    // generate needed format
    e.split("(")[1].split(",")[0].slice(1, -1),
    e,
  ]);
  let select_item = constants.Templates;
</script>

<div class="row">
  <div class="col-md-8">
    <Select
      bind:selectedValue={addCommand}
      items={select_item}
      placeholder="type in command"
    />
  </div>
  <select bind:value={addCommand} class="col-md-2">
    {#each templates as template}
      <option value={template[1]}>
        {template[0]}
      </option>
    {/each}
  </select>
  <button
    class="btn btn-outline-secondary col-md-1"
    on:click={() => {
      itemList = [...itemList, { cmd: addCommand.value, id: -1 }];
      itemList.forEach((ele, index) => {
        ele.id = index;
      });
    }}>add</button
  >
  <button
    class="btn btn-outline-secondary col-md-1"
    on:click={() => {
      insertTextAtCursor(
        document.getElementById("jscode"),
        addCommand.value + "\n"
      );
    }}>insert</button
  >
</div>
