import { store } from "./store";
import "./App.css";
import { Provider } from "react-redux";
import { IndexPage } from "@pages/IndexPage";

export const App = () => {
  return (
    <Provider store={store}>
      <IndexPage />
    </Provider>
  );
};
