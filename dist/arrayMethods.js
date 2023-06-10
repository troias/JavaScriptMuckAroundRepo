"use strict";
const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialState = {
    arry: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    morphedArr: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "MORPH_ARRAY":
            return {
                ...state,
                morphedArr: action.payload,
            };
        default:
            return state;
    }
};
const btn = document.getElementById("show");
if (!btn) {
    throw new Error("Button not found");
}
const answer = document.getElementById("answer");
btn.addEventListener("click", () => {
    const morphedArr = arry[arry.length - 1]; // Access the last element using array indexing
    console.log("morphedArr", morphedArr);
    const action = {
        type: "MORPH_ARRAY",
        payload: morphedArr,
    };
    const newState = reducer(initialState, action);
    console.log("newState", newState);
    if (!answer) {
        throw new Error("Answer not found");
    }
    answer.innerHTML = JSON.stringify(newState) || "No result";
});
// Path: javascript/arrayMethods/src/index.ts
