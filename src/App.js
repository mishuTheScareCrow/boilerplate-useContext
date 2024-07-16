import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";
import "../src/App.css";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
