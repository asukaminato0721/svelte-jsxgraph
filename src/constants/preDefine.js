export let _itemList = [
  { cmd: "let segment = board.create('segment', [p1, p2]);" },
  { cmd: "let circle = board.create('circle', [p1, p2]);" },
  { cmd: "let conic = board.create('conic',[A,B,C,D,E]);" },
  { cmd: "let point = board.create('point', [1.0, 1.0]);" },
];
export let templates = [
  { itemName: "circle", cmd: "let circle = board.create('circle', [p1, p2]);" },
  { itemName: "conic", cmd: "let conic = board.create('conic', [A,B,C,D,E])" },
];
export let textareaContent =
  "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});\n";
