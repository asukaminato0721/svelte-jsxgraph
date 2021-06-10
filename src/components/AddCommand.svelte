<script lang="ts">
  import constants from "../constants/constants.json";
  import Select from "svelte-select";
  import insertTextAtCursor from "insert-text-at-cursor";
  import { Button, Row, Col } from "sveltestrap";
  let addCommand: { index: number; value: string };
  let templates = constants.Templates.map((e) => [
    e.split("(")[1].split(",")[0].slice(1, -1),
    e,
  ]);
  let select_item = constants.Templates;
</script>

<Row>
  <Col>
    <Select
      bind:selectedValue={addCommand}
      items={select_item}
      placeholder="type in command"
    />
  </Col>
  <Col class="col-3">
    <select class="form-select" bind:value={addCommand}>
      <option selected>choose command</option>
      {#each templates as template}
        <option value={template[1]}>{template[0]}</option>
      {/each}
    </select>
  </Col>
  <Col class="col-1">
    <Button
      on:click={() => {
        insertTextAtCursor(
          document.getElementById("jscode"),
          addCommand.value + "\n"
        );
      }}>insert</Button
    >
  </Col>
</Row>
