import "./styles.css";
import { HeaderComponent } from "./components";

export default function App(props: any) {
  return (
    <div className="App">
      <h1>React routing with styled components</h1>
      <HeaderComponent />
      <div>{props.children}</div>
    </div>
  );
}
