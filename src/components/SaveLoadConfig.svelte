<script>
  export let itemList;
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

<button on:click={saveConfig}> save config </button>
<button on:click={loadConfig}> load config </button>
<button on:click={clearConfig}> clear config </button>
