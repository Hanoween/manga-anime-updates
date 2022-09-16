import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Nihon Tracker</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/anime">Anime</a>
                <a href="/manga">Manga</a>
                <a href="/new">Add Entry</a>
            </div>
        </div>
     );
}
 
export default Navbar;