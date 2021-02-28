# svelte-jsxgraph

[demo](https://wuyudi.github.io/svelte-jsxgraph/)

Yet another tool to draw geometry online. In very early stage.

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
2. 修改对象默认值
3. 自定义增删改命令
4. 预设 demo

## TODO

- [ ] 代码高亮（🕊）
- [ ] 导出图形文件（.html）（🕊）
- [ ] 导出导入配置（🕊）

Below is the original readme

---

_Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)_

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
