import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about/about-app"  className="nav-link">About App</Link>
            <Link to="/about/about-author"  className="nav-link">About Author</Link>
        </nav>
    )
}
