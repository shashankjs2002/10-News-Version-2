import './App.css';
import React, { Component, useContext, useEffect } from 'react';
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
import Filter from './components/Filter';
import NotFound from './components/NotFound';

const App = () => {
  localStorage.setItem('filters', 'hi')
  
  const context=useContext(SearchContext)
  let {query, setQuery, filters} = context
  let {search} = useParams()

//  const [searchParams, setSearchParams] = useSearchParams();

//  const value = searchParams.get('value')


//     setSearchParams(
//             createSearchParams({value: query})
// )
useEffect(() => {
  
}, [filters])


    return ( 
      <>
    
          <HashRouter>
            <Navbar/>
            {/* <News/> */}
            {/* <News key="/" query={submitfunc()} max={12} country="in" category="health"/> */}
            
            <Filter/>
            <Routes>
              
                <>

                  {/* <Route exact path='*' element={<NotFound/>}></Route> */}
                  <Route exact path={`/:country/:lang/:category`} element={<News key="" max={12}/>}></Route>
                  {/* <Route exact path={`/home/:country/:lang`} element={<News key="Breaking-news" max={12} country="in" category="breaking-news"/>}></Route>
                  <Route exact path="/world/:country/:lang" element={<News key="World" max={12} country="in" category="world"/>}></Route>
                  <Route exact path="/nation/:country/:lang" element={<News key="Nation" max={12} country="in" category="nation"/>}></Route>
                  <Route exact path="/business/:country/:lang" element={<News key="Business" max={12} country="in" category="business"/>}></Route>
                  <Route exact path="/entertainment/:country/:lang" element={<News key="Entertainment" max={12} country="in" category="entertainment"/>}></Route>
                  <Route exact path="/health/:country/:lang" element={<News key="Health" max={12} country="in" category="health"/>}></Route>
                  <Route exact path="/science/:country/:lang" element={<News key="Science" max={12} country="in" category="science"/>}></Route>
                  <Route exact path="/sports/:country/:lang" element={<News key="Sports" max={12} country="in" category="sports"/>}></Route>
                  <Route exact path="/technology/:country/:lang" element={<News key="Technology" max={12} country="in" category="technology"/>}></Route> */}
          
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

