import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LicenseList } from "../features/licenses/LicenseList";
import { licenses } from "../features/licenses/data";
import { renderWithProviders } from "../test/render";
describe("integrated license list", () => {
  it("filters from URL state and links to details", () => {
    renderWithProviders(<LicenseList licenses={licenses} />, {route:"/licenses?search=camera"});
    expect(screen.getByRole("link", {name:"Camera Station"})).toHaveAttribute("href", "/licenses/lic-123");
    expect(screen.queryByText("Audio Manager")).not.toBeInTheDocument();
  });
  it("lets a user change the shareable status filter", async () => {
    renderWithProviders(<LicenseList licenses={licenses} />);
    await userEvent.selectOptions(screen.getByRole("combobox", {name:/filter by status/i}), "trial");
    expect(screen.getByText("Secure Entry")).toBeVisible();
    expect(screen.queryByText("Camera Station")).not.toBeInTheDocument();
  });
});
