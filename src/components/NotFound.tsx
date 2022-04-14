import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container">
    <h2>Sorry, there is nothing here!</h2>
    <div className="link">
      <Link to="/">
      Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;