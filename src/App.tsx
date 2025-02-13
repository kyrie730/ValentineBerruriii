import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ValentineForm } from "./pages";
import { ForYou } from "./pages/ForYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ValentineForm />} />
      <Route path="/for-you" element={<ForYou />} />
    </Routes>
  );
}

export default App;
