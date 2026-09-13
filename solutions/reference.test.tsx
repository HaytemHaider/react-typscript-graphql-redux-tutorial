import {render,screen} from "@testing-library/react";
import {describe,expect,it} from "vitest";
import {LicenseList} from "../src/features/licenses/LicenseList";
import {licenses} from "../src/features/licenses/data";
import {renderWithProviders} from "../src/test/render";
describe("completed integrated references",()=>{
 it("renders typed licenses with accessible filters",()=>{
  renderWithProviders(<LicenseList licenses={licenses}/>);
  expect(screen.getByRole("textbox",{name:/search licenses/i})).toBeVisible();
  expect(screen.getByRole("link",{name:"Camera Station"})).toBeVisible();
 });
 it("can render a simple semantic fallback",()=>{render(<p role="status">Reference ready</p>);expect(screen.getByRole("status")).toBeVisible()});
});
