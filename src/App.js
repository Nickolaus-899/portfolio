import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

import Pages from "./pages/Pages";

import {frontend_projects} from "./__data__/frontend";
import {backend_projects} from "./__data__/backend";
import {hackathons} from "./__data__/hackathons";


function App() {
  useEffect(() => {
    document.title = 'Nikolaus';
  }, []);

    document.addEventListener("scroll", () => {
        const elements = document.querySelectorAll(".smooth-appear");

        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 10;
            const isAboveViewport = rect.bottom < 0;

            if (isVisible) {
                element.classList.add("show");
            } else if (isAboveViewport || rect.top > window.innerHeight) {
                element.classList.remove("show");
            }
        });
    });

  
  return (
    <BrowserRouter>
      <Pages
        frontend_projects={frontend_projects}
        backend_projects={backend_projects}
        hackathons={hackathons}
      />
    </BrowserRouter>
  );
}

export default App;
