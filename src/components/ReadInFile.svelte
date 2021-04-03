<script lang="ts">
  let files: FileList;
  export let currentContent: string;
  function readFileContent(file: File): Promise<string | ArrayBuffer> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }
  $: if (files && files[0]) {
    readFileContent(files[0]).then((content) => {
      currentContent = content
        .toString()
        .split("// START")[1]
        .split("// END")[0];
    });
  }
</script>

load file <input type="file" bind:files accept=".html" />
