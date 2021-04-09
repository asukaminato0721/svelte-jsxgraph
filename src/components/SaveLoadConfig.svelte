<script lang="ts">
  export let itemList: { cmd: string; id: number }[];
  /**
   *
   */
  function saveConfig() {
    localStorage.setItem("itemList", JSON.stringify(itemList));
    alert("save successfully");
  }
  /**
   * @use load user config
   */
  function loadConfig() {
    if (localStorage.getItem("itemList")) {
      itemList = JSON.parse(localStorage.getItem("itemList"));
      alert("load successfully");
    } else {
      alert("no config found");
    }
  }
  function clearConfig() {
    localStorage.removeItem("itemList");
    alert("clear successfully");
  }
</script>

<c>config:</c>
<button class="btn btn-primary" on:click={saveConfig}>save</button>
<button class="btn btn-primary" on:click={loadConfig}>load</button>
<button class="btn btn-primary" on:click={clearConfig}>clear</button>
