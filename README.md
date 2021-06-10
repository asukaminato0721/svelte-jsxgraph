# svelte-jsxgraph

[demo](https://wuyudi.github.io/svelte-jsxgraph/)

Yet another tool to draw geometry online. ~~In very early stage.~~ Nearly finished.

Use [jsxgraph](https://jsxgraph.uni-bayreuth.de/wp/index.html),svelte

## Why not other tools

以下工具都深度使用过， QQ 群管理 or 维护/写过帮助手册 or 出过书

1. 几何画板 已死 不开源
2. 网络画板 不开源
3. inRm3D 作者不开发了 不开源
4. GeoGebra 没有自定义函数功能
5. Mathematica 不开源，交互写起来麻烦

WIP

## 为什么要用这种奇怪的方式？

jsxgraph 本身是一个 js 库，直接交给用户文本可以最大限度减少约束 ~~减少开发难度，毕竟就一个 textarea~~

## features

1. 点击按键插入文本
2. 预设 demo
3. 预设指令模板
4. 导出图形文件（.html/.zip）
5. 导入图形文件（.html）
6. 夜间模式
7. 从外部导入代码
8. 响应式界面

## TODO

- [ ] 代码高亮（🕊）

---

## Get started

Install the dependencies...

```bash
cd svelte-jsxgraph
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.
