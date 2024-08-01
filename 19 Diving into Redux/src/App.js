import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import { authActions } from "./store";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth ? (
        <Auth />
      ) : (
        <div>
          <UserProfile /> <Counter />
        </div>
      )}
    </Fragment>
  );
}

export default App;
