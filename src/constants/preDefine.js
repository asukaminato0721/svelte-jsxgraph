export let _itemList = [
  { cmd: "let segment = board.create('segment', [p1, p2]);" },
  { cmd: "let circle = board.create('circle', [p1, p2]);" },
  { cmd: "let conic = board.create('conic',[A,B,C,D,E]);" },
  { cmd: "let point = board.create('point', [1.0, 1.0]);" },
];
// copy templates from here https://jsxgraph.uni-bayreuth.de/docs/symbols/Angle.html
let preTemplates = [
  "let angle = board.create('angle', [p1, p2, p3]);",
  "let arc = board.create('arc', [p1, p2, p3]);",
  "let arrow = board.create('arrow', [p1, p2]);",
  "let arrowparallel = board.create('arrowparallel', [l1, p3]);",
  "let axis = board.create('axis', [[0.0, 1.0], [1.0, 1.3]]);",
  "let bisector = board.create('bisector', [p1, p2, p3]);",
  "let bisectorlines = board.create('bisectorlines', [l1, l2]);",
  "let circle = board.create('circle', [p1, p2]);",
  "let conic = board.create('conic', [A,B,C,D,E])",
  "let line = board.create('line', [p1, p2])",
  "let polygon = board.create('polygon', [p1, p2])",
  "let polyline = board.create('polyline', [p1, p2])",
  `let  graph = board.create('curve',
                       [function(t){ return t-Math.sin(t);},
                        function(t){ return 1-Math.cos(t);},
                        0, 2*Math.PI]
                    );`,
  `var el = board.create('ellipse',[A,B,C]);`,
  `var graph = board.create('functiongraph',
                       [function(x){ return 0.5*x*x-2*x;}, -2, 4]
                    );`,
  `var p2 = board.create('glider', [2.0, 1.5, c1]);`,
  `var ineq_greater = board.create('inequality', [f], {inverse: true, fillColor: 'yellow'});`,
];
// generate needed format
export let templates = Array.from(
  preTemplates.map((e) => [e.split("(")[1].split(",")[0].slice(1, -1), e])
);
export let textareaContent =
  "let board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-20, 10, 20, -10], axis:true});\n";
