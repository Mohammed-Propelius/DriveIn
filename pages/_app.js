import "../src/styles/global.css";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "../src/redux/Store/Store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
