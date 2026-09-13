import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { store } from "./app/store";
import { App } from "./app/App";
createRoot(document.getElementById("root")!).render(<StrictMode><Provider store={store}><FluentProvider theme={webLightTheme}><App/></FluentProvider></Provider></StrictMode>);
