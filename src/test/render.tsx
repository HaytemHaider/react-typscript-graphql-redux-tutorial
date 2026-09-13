import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { MemoryRouter } from "react-router-dom";
import { createAppStore } from "../app/store";
export function renderWithProviders(ui:ReactElement,{route="/"}={}) {
 const store=createAppStore();
 return {store,...render(<Provider store={store}><FluentProvider theme={webLightTheme}><MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter></FluentProvider></Provider>)};
}
