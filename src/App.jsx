import { BrowserRouter } from "react-router-dom";
import Homepage from "./features/Homepage";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
  return (
    <BrowserRouter>
    <HomeRoutes />

    </BrowserRouter>
  );
}

export default App;
