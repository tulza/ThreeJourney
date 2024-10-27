import App from "./app/App";
import "./style.css";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <div className="flex items-center justify-center w-dvw h-dvh">
        <App />
    </div>
);
