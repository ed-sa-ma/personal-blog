import { Elements } from "prismic-reactjs";

import LinkedHeadline from "@components/linkedHeadline";

const headlineMap = {
  [Elements.heading1]: "h1",
  [Elements.heading2]: "h2",
  [Elements.heading3]: "h3",
  [Elements.heading4]: "h4",
  [Elements.heading5]: "h5",
  [Elements.heading6]: "h6"
};

/**
 * Customizes html output for rich-text content coming from Prismic.
 * @see {@link https://prismic.io/docs/technologies/advanced-rich-text-templating-nextjs}
 *
 * @param {string} type
 * @returns {import("react").ReactElement || HTMLElement}
 */
function htmlSerializer(_, { type, text }) {
  if (Object.keys(headlineMap).includes(type)) {
    return <LinkedHeadline element={headlineMap[type]} text={text} />;
  }

  return null;
}

/**
 * Apply Pythagoras theorem to height and width of an element to get the size of its diagonal.
 * If no element is provided we return window's diagonal.
 *
 * @param {HTMLElement} [parent]
 * @returns {number} diagonal length in pixels.
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

export { debounce, getDiagonal, htmlSerializer };
