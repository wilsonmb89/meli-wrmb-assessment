/* eslint-disable no-undef */
const sessionStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};