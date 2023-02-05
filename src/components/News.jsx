import React, { Component, useContext, useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import { computeHeadingLevel } from '@testing-library/react';

const News= (props) => {
    let {lang, country,category} = useParams();
    console.log(lang)

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalArticles] = useState(null)
    let error = null;
 
    
    const updateNews= async ()=>{
        // console.log("cdm");
        if(lang && country && category){

            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ead7440fb05472c9e3315666906d761&page=1&max=${this.props.max}`;
            let uri = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&page=1&topic=${category}&max=${props.max}&lang=${lang}&country=${country}`;
            // let url = (this.state.query !== "") ? `https://gnews.io/api/v4/search?q=${this.state.query}&token=3fb55ca4ddae296e27f04ae96268e2c7`: uri
       
console.log(uri)
        // if(props.query){
        //     console.log(props.query)
        //     uri = `https://gnews.io/api/v4/search?q=${props.query}&token=3fb55ca4ddae296e27f04ae96268e2c7`
        //     // query=null
                
        

        setLoading(true)

        // this.setState({loading: true});
        let data = await fetch(uri);
        let parsedData = await data.json(); 
        // console.log(parsedData);
        if(parsedData.errors){
            error= parsedData.errors
            // console.log(error)
            
        }
        setArticles(parsedData.articles)
        setTotalArticles(parsedData.totalArticles)
        setLoading(false)

    }
        
        // this.setState({articles: parsedData.articles,
        //      totalArticles :parsedData.totalArticles,
        //     loading:false});

        // let myCategory = this.props.category ;
        // myCategory = myCategory[0].toUpperCase() +myCategory.substring(1)        
    }

    useEffect(() => {
      updateNews()
    //   query = null
    }, [lang, country, category])
    

    

      return( 
        <div className="container my-3">
            {
               error ? console.log(error) : 
               <>

        
            
            <h1 className="text-center my-3">NewsApp- Top {category} Headlines</h1>
            {loading && <Spinner/>}
            <div className="row">
                  
                {!loading && articles.map((element, index)=>{
                    
                    return <div className="col-md-12" key={element.url} >
                        {/* <NewsItem title={element.title} description ={element.description} content ={element.content} imageurl ={element.urlToImage} newsUrl={element.url}/>  */}
                        <NewsItem index={index} title={element.title} source={element.source.name} description ={element.description} content ={element.content} imageurl ={element.image} newsUrl={element.url}/> 
                    </div>
                })}

            </div>
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.max)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            
        </div> */}
        </>

     }
        </div>
        
    )
  }


News.defaultProps = {
    country: 'in',
    max: 9,
    category: 'breaking-news'
}

News.propTypes = {
    country: PropTypes.string,
    max: PropTypes.number,
    category: PropTypes.string,

}
export default News;


    
    
    // handlePrevClick = async () =>{
    //     console.log("Previous");
        
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ead7440fb05472c9e3315666906d761&page=${this.state.page - 1}&max=${this.props.max}`;
    //     let url = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&page=${this.state.page - 1}&country=${this.props.country}&topic=${this.props.category}&max=${this.props.max}`;

    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json(); 
    //     console.log(parsedData);
        
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
        
    // }
    
    // handleNextClick = async () =>{
    //     console.log("Next");
    //         if(!(this.state.page+1>Math.ceil(this.state.totalArticles/15))){
    //         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4ead7440fb05472c9e3315666906d761&page=${this.state.page + 1}&max=${this.props.max}`;
    //         let url = `https://gnews.io/api/v4/top-headlines?token=3fb55ca4ddae296e27f04ae96268e2c7&ppage=${this.state.page - 1}&country=${this.props.country}&topic=${this.props.category}&max=${this.props.max}`;

    //         this.setState({loading: true});
    //         let data = await fetch(url);
    //         let parsedData = await data.json(); 
    //         console.log(parsedData);
            
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         })
    //     }
    // }