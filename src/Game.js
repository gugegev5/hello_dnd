// export function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 8);
//   receive([1, 1]);
//   setInterval(() => receive([randPos(), randPos()]), 150000);
// }

let knightPosition = [1, 7];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
    console.log('observe', o)
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }


  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
  
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
  }
