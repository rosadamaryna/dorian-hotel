import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../src/context/AuthContext";
import Navbar from "../../src/components/Navbar/Navbar";

describe("Navbar component", () => {
  it("shows Login link when user is not authenticated", () => {
    // гарантуємо, що localStorage порожній
    localStorage.removeItem("user");

    cy.mount(
      <MemoryRouter>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </MemoryRouter>
    );

    cy.contains("Login").should("exist");
  });
  it("shows Logout when user is authenticated", () => {
    // імітуємо залогіненого користувача
    localStorage.setItem(
        "user",
        JSON.stringify({ email: "admin@hotel.com" })
    );

    cy.mount(
        <MemoryRouter>
        <AuthProvider>
            <Navbar />
        </AuthProvider>
        </MemoryRouter>
    );

    cy.contains("Logout").should("exist");
    });
});
