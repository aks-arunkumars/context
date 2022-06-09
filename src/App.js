import React from 'react';
import './App.css';
import Child from './component/Child';
const MyContext = React.createContext();
function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"This message is passed from the App component"}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default App;
export { MyContext };
