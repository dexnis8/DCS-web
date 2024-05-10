import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TransitionProvider } from "./context/TransitionContext";
import TransitionComponent from "./components/Transition";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <TransitionProvider>
        <Routes>
          <Route
            index
            element={
              <TransitionComponent>
                {/* <Boxes /> */}
                <HomePage />
              </TransitionComponent>
            }
          />
          <Route
            path="/scroll"
            element={
              <TransitionComponent>
                {/* <Scroll /> */}
                <h1>Scroll</h1>
              </TransitionComponent>
            }
          />
          <Route
            path="/layers"
            element={
              <TransitionComponent>
                {/* <Layers /> */}
                <h1>Layer</h1>
              </TransitionComponent>
            }
          />
        </Routes>
      </TransitionProvider>
    </>
  );
}

export default App;