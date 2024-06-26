import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TransitionProvider } from "./context/TransitionContext";
import TransitionComponent from "./components/Transition";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useMediaQuery } from "@mui/material";

function App() {
  const match = useMediaQuery("(max-width:640px)");
  return (
    <>
      <Header match={match} />
      <TransitionProvider>
        <Routes>
          <Route
            index
            element={
              <TransitionComponent>
                <HomePage />
              </TransitionComponent>
            }
          />
          {/* <Route
            path="/scroll"
            element={
              <TransitionComponent>
               
                <h1>Scroll</h1>
              </TransitionComponent>
            }
          /> */}
          {/* <Route
            path="/layers"
            element={
              <TransitionComponent>
              
                <h1>Layer</h1>
              </TransitionComponent>
            } 
          />*/}
        </Routes>
      </TransitionProvider>
    </>
  );
}

export default App;
