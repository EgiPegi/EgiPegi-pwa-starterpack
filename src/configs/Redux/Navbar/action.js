import { HIDE_NAVBAR } from "./types";

export const toggleNavbar = () => {
  return {
    type: HIDE_NAVBAR,
  };
};