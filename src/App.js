import './App.css';
import React, { Component, useContext } from 'react';
import Navbar from './components/Navbar';
// import News2 from './components/News2';
import { render } from "react-dom";
import News from './components/News';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
  HashRouter
  } from "react-router-dom";
import Footer from './components/Footer';
import SearchState from './context/SearchState';

import SearchContext from './context/SearchContext';
import Search from './components/Search';

  
const App = () => {
  
  const context=useContext(SearchContext)
  let {query, setQuery} = context
 let {search} = useParams()

//  const [searchParams, setSearchParams] = useSearchParams();

//  const value = searchParams.get('value')


//     setSearchParams(
//             createSearchParams({value: query})
// )

    return ( 
      <>
    
          <HashRouter>
            <Navbar/>
            {/* <News/> */}
            {/* <News key="/" query={submitfunc()} max={12} country="in" category="health"/> */}
            

            <Routes>
              
                <>
                  <Route exact path= '/' element={<News key="Breaking-news" max={12} country="in" category="breaking-news"/>}></Route>
                  <Route exact path="/world" element={<News key="World" max={12} country="in" category="world"/>}></Route>
                  <Route exact path="/nation" element={<News key="Nation" max={12} country="in" category="nation"/>}></Route>
                  <Route exact path="/business" element={<News key="Business" max={12} country="in" category="business"/>}></Route>
                  <Route exact path="/entertainment" element={<News key="Entertainment" max={12} country="in" category="entertainment"/>}></Route>
                  <Route exact path="/health" element={<News key="Health" max={12} country="in" category="health"/>}></Route>
                  <Route exact path="/science" element={<News key="Science" max={12} country="in" category="science"/>}></Route>
                  <Route exact path="/sports" element={<News key="Sports" max={12} country="in" category="sports"/>}></Route>
                  <Route exact path="/technology" element={<News key="Technology" max={12} country="in" category="technology"/>}></Route>
          
                  {/* <Route exact path={`/search/${query}`} element={<News key="search" max={12} country="in" category="" query = {query}/>}></Route>
                  <Route exact path={`/search/:search`} element={<News key="search" max={12} country="in" category="" query = {search}/>}></Route>
                  <Route path="/query/:query" element={<News key="Search" max={12} country="in" />}></Route> */}
                  <Route exact path={`/search/:query`} element={<Search  />}/>
                </>
              
              
            </Routes>
          </HashRouter> 

          <Footer/>
      
    </>
    )
  }

  export default App

