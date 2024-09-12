import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Guideline from "./pages/Guideline";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="guideline" element={<Guideline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
