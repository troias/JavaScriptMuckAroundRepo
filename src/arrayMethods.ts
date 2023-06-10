const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const morphedArr = arry.at(-1);

console.log("morphedArr", morphedArr);

const initialState = {
  arry: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  morphedArr: [],
};

interface Action {
  type: string;
  payload: any;
}

const reducer = (state = initialState, action: Action) => {
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

btn.addEventListener("click", () => {
  const morphedArr = arry.at(-1);
  console.log("morphedArr", morphedArr);
  const action: Action = {
    type: "MORPH_ARRAY",
    payload: morphedArr,
  };
  const newState = reducer(initialState, action);
  console.log("newState", newState);
});

const answer = document.getElementById("result");

console.log("answer", answer);

if (!answer) {
  throw new Error("Answer not found");
}

answer.innerHTML = "Answer";

const empty = document.getElementById("empty");

if (!empty) {
  throw new Error("Empty not found");
}

empty.innerHTML = "empty";

// Set Button Text

const btnText = document.getElementById("btnText");

if (!btnText) {
  throw new Error("btnText not found");
}

btnText.innerHTML = "Show Result";
