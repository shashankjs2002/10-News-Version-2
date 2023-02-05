import React, { Component, useContext, useEffect, useState } from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import SearchContext from '../context/SearchContext';


const Navbar = () => {
    const context = useContext(SearchContext)
    const {query,setQuery} = context

    const [search, setSearch] = useState({search: ""})
    const navigate = useNavigate(null)
    const location = useLocation(null)
    let path = location.pathname
    useEffect(() => {
    //   console.log(path)
    }, [location])
    
   

    const submitQuery = (e) => {
        e.preventDefault();
        // console.log(search)
        setQuery(search.search)
        // context.router.push()
        navigate(`/search/${search.search}`)
        setSearch({search: ""})
        
    }

    const onchange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    } 


    return( <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/10-News">10-News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* <li className="nav-link">
                    <Link className={`nav-link ${(path==='/') ? 'active': ''}`} to="/breaking-news/in/hi">Home</Link>
                    </li> */}
                    {/* <li className={`nav-link ${(path==='/world') ? 'active': ''}`}><Link className="nav-link" to="/world">World</Link></li>
                    <li className={`nav-link ${(path==='/nation') ? 'active': ''}`}><Link className="nav-link" to="/nation">Nation</Link></li>
                    <li className={`nav-link ${(path==='/business') ? 'active': ''}`}><Link className="nav-link" to="/business">Business</Link></li>
                    <li className={`nav-link ${(path==='/entertainment') ? 'active': ''}`}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className={`nav-link ${(path==='/health') ? 'active': ''}`}><Link className="nav-link" to="/health">Health</Link></li>
                    <li className={`nav-link ${(path==='/science') ? 'active': ''}`}><Link className="nav-link" to="/science">Science</Link></li>
                    <li className={`nav-link ${(path==='/sports') ? 'active': ''}`}><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className={`nav-link ${(path==='/technology') ? 'active': ''}`}><Link className="nav-link" to="/technology">Technology</Link></li>
                     */}
                    {/* {(query!==null) ? :} */}
                    {/* <li className="nav-item"><Link className="nav-link" to={`/search=${query}`}>Technology</Link></li> */}

                </ul>
                <form className="d-flex" >
                    <input className="form-control me-2" type='search' name='search' id='search' placeholder="Search" aria-label="Search" onChange={onchange} value={search.search}/>
                    {/* <btn value='Search' className=" btn-outline-dark"/> */}
                    <button className="btn btn-outline-dark" type="submit" onClick={submitQuery}> 
                    {/* <Link to={`/search/${query}`}>
                       
                    </Link> */}
                    Search
                    </button>
                </form>
                </div>
            </div>
            </nav>
         
    </div>
    )

}

export default Navbar
