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

<div>
  <Select
    bind:selectedValue={addCommand}
    items={select_item}
    placeholder="type in command"
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
      itemList = [...itemList, { cmd: addCommand.value, id: -1 }];
      itemList.forEach((ele, index) => {
        ele.id = index;
      });
    }}>add</button
  >
  <button
    on:click={() => {
      insertTextAtCursor(
        document.getElementById("jscode"),
        addCommand.value + "\n"
      );
    }}>insert</button
  >
</div>

<style>
  div {
    display: grid;
    grid-template-columns: auto 10% 10% 10%;
  }
</style>
