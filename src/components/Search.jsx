import React, { Component, useContext, useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import SearchContext from '../context/SearchContext';
import { useParams } from 'react-router-dom';


const Search= (props) => {
    let { query } = useParams();

    // console.log(query)

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(null)
    let error = null;
 
    
    const updateNews= async ()=>{
        // let uri = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&page=1&topic=${props.category}&max=${props.max}&lang=hi&country=${props.country}`;
        let uri = null
        if(query){
            let URIquery = encodeURI(query)
            // console.log(query)
           uri = `https://gnews.io/api/v4/search?q=${URIquery}&token=3fb55ca4ddae296e27f04ae96268e2c7`
        //    console.log(uri)
                    
        }

        setLoading(true)

        let data = await fetch(uri);
        let parsedData = await data.json(); 
        console.log(parsedData);
        if(parsedData.errors){
            error= parsedData.errors
            // console.log(error)
            
        }
        setArticles(parsedData.articles)
        setTotalArticles(parsedData.totalArticles)
        setLoading(false)
    }

    useEffect(() => {
      updateNews()
    }, [query])
    
      return( 
        <div className="container my-3">
            {
               error ? console.log(error) : 
               <>   
            <h1 className="text-center my-3">NewsApp- Top {query} Headlines</h1>
            {loading && <Spinner/>}
            <div className="row">
                  
                {!loading && articles.map((element, index)=>{
                    
                    return <div className="col-md-12" key={element.url} >
                       <NewsItem index={index} title={element.title} source={element.source.name} description ={element.description} content ={element.content} imageurl ={element.image} newsUrl={element.url}/> 
                    </div>
                })}

            </div>
        </>

     }
        </div>
        
    )
  }

// News.defaultProps = {
//     country: 'in',
//     max: 9,
//     category: 'breaking-news'
// }
// News.propTypes = {
//     country: PropTypes.string,
//     max: PropTypes.number,
//     category: PropTypes.string,

// }
export default Search;