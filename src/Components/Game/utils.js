import blackHead from "../../assets/black-skeleton.png";
import greenHead from "../../assets/green-skeleton.png";

export const initiFeedBack = {
  begningMsg: "Kindly click on play button first to proceed !!",
  isGameOver: false,
  activeHint: false,
};
export const icons = [
  {
    id: 0,
    name: "black-head-icon",
    icon: blackHead,
    show: false,
  },
  {
    id: 1,
    name: "green-head-icon",
    icon: greenHead,
    show: false,
  },
  {
    id: 2,
    name: "green-head-icon",
    icon: greenHead,
    show: false,
  },
  {
    id: 3,
    name: "black-head-icon",
    icon: blackHead,
    show: false,
  },
];

export function generateArray() {
  const array = [];
  const initialRows = 10;

  for (let i = 0; i < initialRows; i++) {
    const arr = [
      {
        id: 0,
        name: "black-head-icon",
        icon: blackHead,
        show: false,
      },
      {
        id: 1,
        name: "green-head-icon",
        icon: greenHead,
        show: false,
      },
      {
        id: 2,
        name: "green-head-icon",
        icon: greenHead,
        show: false,
      },
      {
        id: 3,
        name: "black-head-icon",
        icon: blackHead,
        show: false,
      },
    ];
    shuffleArray(arr, false);
    array.push(arr);
  }
  return array;
}

export function shuffleArray(array, giveReturn) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  if (giveReturn) {
    return array;
  }
}

