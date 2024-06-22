import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} - {error.statusText}
        </h1>
        <Link to="/" reloadDocument>
          На главную
        </Link>
      </>
    );
  }
  return (
    <div>
      <h1>ОШИБКА</h1>
    </div>
  );
};

export default ErrorPage;
