import { Link } from 'react-router-dom';

function Nav() {
    return <div>
        <nav>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    </div>
}

export default Nav;
