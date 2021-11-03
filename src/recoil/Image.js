import { atom } from "recoil";

export const ImagePreview = atom({
    key: 'ImagePreview', // unique ID (with respect to other atoms/selectors)
    default:null, // default value (aka initial value)
  });