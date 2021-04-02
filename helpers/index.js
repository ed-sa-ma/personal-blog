/**
 * Apply Pythagoras theorem to height and width of an element to get the size of its diagonal.
 * @param {HTMLElement} [parent]
 */
function getDiagonal(parent) {
  if (parent) {
    var { width, height } = parent.getBoundingClientRect();
  } else {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  let diagonal = Math.ceil(Math.sqrt(width ** 2 + height ** 2));

  return diagonal;
}

export { getDiagonal };
