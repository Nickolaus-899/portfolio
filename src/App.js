import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import Pages from "./pages/Pages";

import {frontend_projects} from "./__data__/frontend";
import {backend_projects} from "./__data__/backend";


function App() {
  useEffect(() => {
    document.title = 'Nikolaus';
  }, []);

  
  return (
    <BrowserRouter>
      <Pages
        frontend_projects={frontend_projects}
        backend_projects={backend_projects}
      />
    </BrowserRouter>
  );
}

export default App;
