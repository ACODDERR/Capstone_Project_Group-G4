import React from 'react'
import { NavLink } from 'react-router-dom'
import "./CSS/Categories.css"

function CategoriesBar() {
    return (
        
        <div>
            <nav className="navbar navbar-expand-lg bg-color-categories">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#categorySupportedContent" aria-controls="categorySupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="categorySupportedContent" data-toggle="collapse" data-target=".navbar-collapse" >
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item a">
                                <NavLink className="nav-link btn-active-categories" aria-current="page" to="/category/Sofa">Sofa</NavLink>
                            </li>
                            <li className="nav-item a">
                                <NavLink className="nav-link btn-active-categories" aria-current="page" to="/category/recliner">Recliners</NavLink>
                            </li>
                            
                            <li className="nav-item a">
                                <NavLink className="nav-link btn-active-categories" aria-current="page" to="/category/wall-accent">Wall accents</NavLink>
                            </li>
                            <li className="nav-item a">
                                <NavLink className="nav-link btn-active-categories"  aria-current="page" to="/category/decor">Decor</NavLink>
                            </li>
                            <li className="nav-item a">
                                <NavLink className="nav-link btn-active-categories" aria-current="page" to="/category/lighting">Lighting</NavLink>
                            </li>
                            <li className="nav-item a">
                                <NavLink className="nav-link btn-active-categories" aria-current="page" to="/category/carpet">Carpet</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CategoriesBar
