import { Link } from 'react-router-dom';
import { AppRoute } from 'util/const';

function NotFoundPage() {
  return (
    <>
      <h1>
        Error 404 occurred.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoute.MAIN}>Go to main page</Link>
    </>
  );
}

export default NotFoundPage;
