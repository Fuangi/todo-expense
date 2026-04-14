import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
}

export default App;
