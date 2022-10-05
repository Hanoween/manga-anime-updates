import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Nihon Tracker</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/anime">Anime</Link>
                <Link to="/manga">Manga</Link>
                <Link to="/add">Add Entry</Link>
            </div>
        </div>
     );
}
 
export default Navbar;