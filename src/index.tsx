import {App} from "./App";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root');

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    container
)