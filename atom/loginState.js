import { atom } from "recoil";

export const loginState = atom({
  key: "loginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
