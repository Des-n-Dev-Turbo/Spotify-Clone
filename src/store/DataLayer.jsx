/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

import { initialState } from './reducer';

export const DataLayerContext = createContext(initialState);

const DataLayer = ({ reducer, children }) => {
  return <DataLayerContext.Provider value={useReducer(reducer, initialState)}>{children}</DataLayerContext.Provider>;
};

export default DataLayer;

export const useDataLayerValue = () => useContext(DataLayerContext);
