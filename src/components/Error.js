import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <h2>The page you are looking for does not exist.</h2>
      <h3>{err.status + " : " + err.statusText}</h3>
    </div>
  );
};
export default Error;
