<script lang="ts">
  import Demo from "./components/Demo.svelte";
  import SaveToFile from "./components/SaveToFile.svelte";
  import ReadInFile from "./components/ReadInFile.svelte";
  import NightMode from "./components/NightMode.svelte";
  import { currentContent } from "./components/current_content.js";
  import CurrentContent from "./components/CurrentContent.svelte";
  import ReadFromUrl from "./components/ReadFromUrl.svelte";
  import AddCommand from "./components/AddCommand.svelte";
  import {
    Row,
    Col,
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from "sveltestrap";
  let isNight = false;
  let isOpen = false;

  function handleUpdate(event: any) {
    isOpen = event.detail.isOpen;
  }
</script>

<ReadFromUrl bind:currentContent={$currentContent} />

<Container>
  <Row>
    <Row>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          href="https://github.com/wuyudi/svelte-jsxgraph"
          target="_blank">Svelte-jsxgraph</NavbarBrand
        >
        <NavbarToggler on:click={() => (isOpen = !isOpen)} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
          <Nav class="ms-auto" navbar>
            <NavItem>
              <ReadInFile bind:currentContent={$currentContent} />
            </NavItem>
            <NavItem>
              <Demo bind:currentContent={$currentContent} />
            </NavItem>
            <NavItem>
              <NightMode bind:isNight />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Row>
    <Row>
      <Col class="col-4">
        <CurrentContent bind:currentContent={$currentContent} />
      </Col>
      <Col id="jxgbox" class="jxgbox" style="height: 500px;" />
    </Row>
    <Row>
      <AddCommand />
    </Row>
    <Row>
      <SaveToFile currentContent={$currentContent} />
    </Row>
  </Row>
</Container>
{#if isNight}
  <style>
    :not(.img > *):not(foreignObject):not(.jxgbox) {
      color: #999;
      background-color: black;
    }
  </style>
{/if}
