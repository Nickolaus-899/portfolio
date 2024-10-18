import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import Pages from "./pages/Pages";
import {frontend_projects} from "./__data__/frontend";

function App() {
  useEffect(() => {
    document.title = 'Nikolaus';
  }, []);



  return (
    <BrowserRouter>
      <Pages
        frontend_projects={frontend_projects}
      />
    </BrowserRouter>
  );
}

export default App;
