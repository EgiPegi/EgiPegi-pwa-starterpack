import React, { Suspense } from "react";
import "./assets/styles/index.css";
import "./assets/styles/App.scss";
import "./assets/styles/_root.scss";
import "./assets/styles/icon.scss";
import "./assets/styles/layout.scss";
import "./assets/styles/header.scss";
import "./assets/styles/navbar.scss";
import "./assets/styles/dropdown.scss";
import "./assets/styles/modal.scss";
import "./assets/styles/table.scss";
import "./assets/Icons/css/uicons-bold-straight.css"
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSus from "./components/LoadingSus";
import Routes from "./configs/Routes";

function App() {
  return (
    <Suspense fallback={<LoadingSus />}>
      <Routes />
    </Suspense>
  );
}

export default App;
