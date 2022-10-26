import React from "react";
import { useReNavigate } from "./Hooks/useReNavigat";
import { useFetchProducts } from "./Hooks/useFetchProducts";
import Notification from "./Components/Notification";

function App() {
  const checkToken = useReNavigate();

  React.useEffect(() => {
    checkToken();
  }, []);
  return (
    <div className="App">
      <Notification />
    </div>
  );
}

export default App;
