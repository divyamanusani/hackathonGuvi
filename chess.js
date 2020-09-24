var table = document.createElement("table");
table.setAttribute('border', '1');
var chesscoinswhite = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;'];
var whitepawn = '&#9817;';
var blackpawn = '&#9823;';
var chesscoinsblack = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];
var spanBlack = [];
var spanWhite = [];
var spanBlackPawns = [];
var spanWhitePawns = [];
var resetx, resety, colorreset;

var tr = [];
for (var i = 0; i < 8; i++) {
    tr[i] = document.createElement('tr');
    for (var j = 0; j < 8; j++) {
        tr[i][j] = document.createElement('td');
        tr[i][j].setAttribute('onclick', `moveTo(${i},${j})`);
        if (i % 2 === j % 2) {
            tr[i][j].className = 'white';
        }
        else {
            tr[i][j].className = 'black';
        }

        if (i === 0) {
            spanBlack[j] = document.createElement('span');
            spanBlack[j].innerHTML = chesscoinsblack[j];
            tr[i][j].append(spanBlack[j]);
        }

        if (i === 1) {
            spanBlackPawns[j] = document.createElement('span');
            spanBlackPawns[j].innerHTML = blackpawn;
            spanBlackPawns[j].setAttribute('onclick', `onClickBlackPawn(${i},${j})`);
            tr[i][j].append(spanBlackPawns[j]);
        }
        if (i === 7) {
            spanWhite[j] = document.createElement('span');
            spanWhite[j].innerHTML = chesscoinsblack[j];
            tr[i][j].append(spanWhite[j]);

        }
        if (i === 6) {
            spanWhitePawns[j] = document.createElement('span');
            spanWhitePawns[j].innerHTML = whitepawn;
            spanWhitePawns[j].setAttribute('onclick', `onClickWhitePawn(${i},${j})`);
            tr[i][j].append(spanWhitePawns[j]);
        }
        tr[i].append(tr[i][j]);
    }
    table.append(tr[i]);
}
document.body.append(table);

function onClickBlackPawn(x, y) {
    repaint();

    tr[x][y].setAttribute('style', 'background-color:tomato;');
    tr[x + 1][y].setAttribute('style', 'background-color:yellow;');
    tr[x + 2][y].setAttribute('style', 'background-color:yellow;');

}


function onClickWhitePawn(x, y) {
    repaint();
    tr[x][y].setAttribute('style', 'background-color:tomato;');
    tr[x - 1][y].setAttribute('style', 'background-color:yellow;');
    tr[x - 2][y].setAttribute('style', 'background-color:yellow;');
}

function repaint() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            tr[i][j].removeAttribute('style');
        }
    }
}

function moveTo(toX, toY) {
    console.log('to=',toX,toY);
    if (tr[toX][toY].hasAttribute('style')) {
        if (tr[toX][toY].getAttribute('style') === 'background-color:yellow;') {
            var fromXY = getFromXFromYValues();
            var fromX = fromXY[0];
            var fromY = fromXY[1];
            var childnode=tr[fromX][fromY].removeChild(tr[fromX][fromY].childNodes[0]);
            tr[toX][toY].appendChild(childnode);
        }
    }
    return;
}

function getFromXFromYValues() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if (tr[i][j].getAttribute('style') === 'background-color:tomato;') {

                return [i, j];
            }
        }
    }
}








