import randomMinMaxNot from './utils';

function redrawPosition() {
  const board = Array.from(document.querySelectorAll('.cell'));
  const activeCell = board.find((el) => el.classList.contains('target'));
  const index = board.indexOf(activeCell);
  activeCell.classList.remove('target');
  board[randomMinMaxNot(0, 15, index)].classList.add('target');
}

setInterval(redrawPosition, 1000);
