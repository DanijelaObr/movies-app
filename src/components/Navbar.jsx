import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <div className='navbar-brand'>
                MoviesApp
            </div>

            <div className='navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar