import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import Pages from "./pages/Pages";

function App() {
  useEffect(() => {
    document.title = 'Nikolaus';
  }, []);

  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
