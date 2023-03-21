import { createContext, useContext } from "react"

export const dataContext = createContext(<></>);
  export const useDataContext = () => {
    const context = useContext(dataContext);
    return context;
  }
export const DataContext = () => {
  return (
    <div>DataContext</div>
  )
}
