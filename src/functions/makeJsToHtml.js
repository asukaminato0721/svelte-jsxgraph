function makeJsToHtml(text) {
  return (
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      type="text/javascript"
      charset="UTF-8"
      src="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraph.css"
    />
    <script
      type="text/javascript"
      charset="UTF-8"
      src="./jsxgraphcore.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="./jsxgraph.css"
    />
    <title>jsxgraph file</title>
  </head>
  <body>
    <div id="jxgbox" class="jxgbox" style="width: 500px; height: 500px"></div>
  </body>
  <script type="text/javascript">` +
    text +
    `</script>
</html>`
  );
}
export default makeJsToHtml;
