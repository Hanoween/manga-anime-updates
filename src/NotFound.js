import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p style={{color: "black"}}>Page not found</p>
            <Link to="/" style={{color: "black"}}>Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;