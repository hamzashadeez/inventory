import { atom } from "recoil";

export const productData = atom({
    key: 'productData', // unique ID (with respect to other atoms/selectors)
    default:[], // default value (aka initial value)
  });