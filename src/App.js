import "./styles.css";
import Counter from "./Components/Counter";
import Stopwatch from "./Components/StopWatch";
import StopWatch1 from "./Components/StopWatch1";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <Stopwatch />
      <StopWatch1 />
    </div>
  );
}
