import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTokens } from "@legion-ui/core";

const TokensPadi = createTokens({
  apiUrl: "https://api.github.com/repos/telkom-design/theme/contents/pdm.json",
  apiHeaders: { Accept: "application/vnd.github.v3.raw" },
  tokensName: "padiTokens",
});

const themePadi = {
  name: "Padi",
  tokens: TokensPadi,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={themePadi}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
