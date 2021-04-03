// https://jsxgraph.uni-bayreuth.de/showcase/moonwalk.html

let Moonwalk = `  var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1.5, 1.5, 1.5, -1.5], axis: false, grid: false}),
        mu = 1.0/81.45, stars = 40, i,
        apolloPath, moonPath,
        moon, apollo, earth,
        ode = function () {
            var I = [17.066, 0],
                x0 = [0.994, 0, 0, -2.0015851063790825],
                N = 10000,
                data, dataX, dataY, i,
 
                f = function(t, x) {
                    var m  = 1.0/81.45,
                        D1 = Math.sqrt(Math.pow((x[0]+m)*(x[0]+m)+x[2]*x[2],3)),
                        D2 = Math.sqrt(Math.pow((x[0]-(1-m))*(x[0]-(1-m))+x[2]*x[2],3)),
                        y = [];
 
                    y[0] = x[1];
                    y[1] = x[0]+2*x[3]-(1-m)*(x[0]+m)/D1-m*(x[0]-(1-m))/D2;
                    y[2] = x[3];
                    y[3] = x[2]-2*x[1]-(1-m)*x[2]/D1-m*x[2]/D2;
 
                    return y;
                };
 
 
            data = JXG.Math.Numerics.rungeKutta('rk4', x0, I, N, f);
 
            dataX = [];
            dataY = [];
            for(i = 0; i < data.length; i++) {
                dataX[i] = data[i][0];
                dataY[i] = data[i][2];
            }
 
            return [dataX, dataY];
        },
        circle = function (radius, points) {
            var dataX = [], dataY = [], i;
 
            for (i = 0; i < points; i++) {
                dataX[i] = radius*Math.cos(i/(points-1)*2*Math.PI);
                dataY[i] = -radius*Math.sin(i/(points-1)*2*Math.PI);
            }
 
            return [dataX, dataY];
        };
 
    // stars
    for (i = 0; i < stars; i++) {
        board.create('point', [3*Math.random()-1.5, 3*Math.random()-1.5],{
            strokeWidth: 0,
            fillColor: 'white',
            size: 1,
            face: '<>',
            withLabel: false,
            needsRegularUpdate: false,
            fixed: true
        });
    }
 
    // earth
    earth = board.create('point', [-mu, 0], {
        withLabel: false,
        strokeWidth: 0,
        strokeColor: 'none',
        fillColor: '#4096EE',
        size: 12
    });
 
    earth.setProperty({
        gradient: 'linear',
        gradientSecondColor: 'green',
        needsRegularUpdate: false,
        fixed: true
    });
 
    // our space shuttle
    apolloPath = board.createElement('curve', ode(), {
        strokeColor: 'red',
        strokeOpacity: 0.3,
        strokeWidth: 3,
        visible: true,
        needsRegularUpdate: false
    });
 
    apolloPath.hasPoint = function () {
        return false;
    };
 
    apollo = board.create('point', [1, 0], {
        withLabel: false,
        strokeColor: 'red',
        fillColor: 'red',
        size: 3,
        face: '<>',
        fixed: true
    });
 
    moon = board.create('point', [1-mu, 0], {
        withLabel: false,
        strokeColor: 'gray',
        fillColor: 'gray',
        size: 3,
        fixed: true
    });
 
    moon.setProperty({
        gradient: 'linear',
        gradientSecondColor: '#ddd'
    });
 
    // a text in upper right corner to stop the animation
    board.create('text', [0.8, 1.3, '<a href="javascript:void();" id="stopanimation">Stop Animation</a>'], {
        fontSize: 8
    });
    $('#stopanimation').click(function () {
        board.stopAllAnimation();
    });
 
    apollo.moveAlong(function (i) {
        return [apolloPath.dataX[i%apolloPath.dataX.length], apolloPath.dataY[i%apolloPath.dataY.length]];
    }, 2000);`;
export default Moonwalk;
