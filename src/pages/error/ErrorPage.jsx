import { RouteWrapper } from "../../lib";

import "./ErrorPage.css";

const ErrorPage = () => {
  const Component = (
    <>
      <div id="error-404">
        <h2>
          ERROR <span className="detailed">404</span>
        </h2>
        Seems like you tried to access something that doesn't exist, tough luck!
        <br />
        Feel free to try and solve my puzzle:{" "}
        <span className="detailed">
          aa5852fe542096744afe5a43823e42a94144ab6a5d875a45865d2df2
        </span>
      </div>
    </>
  );

  return RouteWrapper({ Component: Component });
};

export default ErrorPage;
