/**
 * Apply Pythagoras theorem to height and width of an element to get the size of its diagonal.
 * If no element is provided we return window's diagonal.
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

/**
 * Function to debouce a callback.
 * @see {@link https://redd.one/blog/debounce-vs-throttle#debounce}
 *
 * @param {@function} cb
 * @param {number} ms
 * @returns {@function}
 */
const DEFAULT_TIME = 300;
function debounce(cb, ms = DEFAULT_TIME) {
  if (!cb || typeof cb !== "function") {
    throw new TypeError("Provide a callback to be debounced.");
  }

  let timeout = null;

  function debounced(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      cb(...args);
      timeout = null;
    }, ms);
  }

  return debounced;
}

export { debounce, getDiagonal };
