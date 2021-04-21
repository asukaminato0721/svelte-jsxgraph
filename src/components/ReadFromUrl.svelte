<script lang="ts">
  export let currentContent: string;
  const read = () => {
    // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
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
