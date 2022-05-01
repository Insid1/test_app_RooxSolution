import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>
        Error 404 occurred.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFoundPage;
