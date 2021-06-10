<script lang="ts">
  export let currentContent: string;
  const read = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const link = urlParams.get("link");
    if (link) {
      fetch(link)
        .then((response) => response.text())
        .then((text) => (currentContent = text));
    }
  };
  read();
</script>
