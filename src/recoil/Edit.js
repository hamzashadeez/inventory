import { atom } from "recoil";

export const EditData = atom({
    key: 'EditData', // unique ID (with respect to other atoms/selectors)
    default:null, // default value (aka initial value)
  });