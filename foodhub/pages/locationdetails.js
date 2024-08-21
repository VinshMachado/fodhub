import React from "react";
import { createContext } from "react";
export const LocationDetailContext = createContext({
  // Provide a default value here, if needed
  userlongitude: 0,
  userlatitude: 0,
});
