import { useReducer } from "react";
import { createContext } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  // switch
  switch(action.type) {
    case 'PURPLE':
      return{...state, color: "purple"};
    case "BLUE":
      return {...state, color: "blue"};
    default:
      return state;    
  }
}

export const TitleColorProvider = ({children}) => {

  const [state, dispatch] = useReducer(titleColorReducer, {color: 'red'})

  console.log("title color context: ", state);

  return <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>
}
