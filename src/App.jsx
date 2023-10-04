import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FormTask from "./components/FormTask/FormTask";
import Footer from "./components/Footer/Footer";
import ContextTask from "./context/ContextTask";

function App() {
  return (
    <>
      <ContextTask>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <Header />
            </div>
            <div className="card-body">
              <FormTask />
            </div>
            <div className="card-footer">
              <Footer />
            </div>
          </div>
        </div>
      </ContextTask>
    </>
  );
}

export default App;
