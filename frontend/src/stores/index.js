import NewsStore from "./News";
import LoginStore from "./Login";

const store = {
  login: new LoginStore(),
  news: new NewsStore()
};

export default store;