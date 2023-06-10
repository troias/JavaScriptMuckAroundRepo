// app.js

(function () {
  const state = {
    arry: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    morphedArr: [],
    isMorphed: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "MORPH_ARRAY":
        return {
          ...state,
          morphedArr: action.payload,
        };

      case "RESET_ARRAY":
        return {
          ...state,
          morphedArr: [],
        };

      default:
        return state;
    }
  }

  function handleButtonClick() {
    if (!state.isMorphed) {
      const morphedArr = state.arry[state.arry.length - 1];
      const action = {
        type: "MORPH_ARRAY",
        payload: morphedArr,
      };

      state = reducer(state, action);

      answer.innerHTML = state.morphedArr.toString();
      btn.innerHTML = "Reset";

      state.isMorphed = true;
    } else {
      const action = {
        type: "RESET_ARRAY",
        payload: [],
      };

      state = reducer(state, action);

      answer.innerHTML = state.morphedArr.toString();

      state.isMorphed = false;
    }
  }

  function initialize() {
    const btn = document.getElementById("show");
    const answer = document.getElementById("result");
    const originalArray = document.getElementById("originalArray");
    const newArray = document.getElementById("newArray");

    if (!btn || !answer || !originalArray || !newArray) {
      throw new Error("Element not found");
    }
    btn.innerHTML = "Show";

    btn.addEventListener("click", handleButtonClick);
    originalArray.innerHTML = state.arry.toString();
    newArray.innerHTML = state.morphedArr.toString();
  }

  initialize();
})();
