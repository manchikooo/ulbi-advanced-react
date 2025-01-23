import {createRoot} from "react-dom/client";
import {Counter} from "./components/Counter";

const container = document.getElementById('root');
const root = container ? createRoot(container) : null;

root?.render(
    <Counter/>
);
