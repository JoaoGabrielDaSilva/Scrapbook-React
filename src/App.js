import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes/";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme/theme";
import { store, persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
