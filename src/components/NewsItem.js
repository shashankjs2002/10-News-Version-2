import React, { useContext, useEffect, useRef } from 'react';
import SearchContext from '../context/SearchContext';
import Modal from './Modal';

const NewsItem = (props) => {
  const context = useContext(SearchContext)
  const {modalId, setModalId} = context
  useEffect(() => {
    setModalId(modalId+1)
  }, [])

  let {index, title, description, imageurl, content, newsUrl, source } = props;

  const modalRef = useRef(null)

  return <div className="my-3">
    <div className="card" style={{flexDirection:'row', flexWrap:'wrap'}} >
      {/* <span className="badge text-bg-success" styles={{position:"absolute", top: "0", color: "#000"}}>{source}</span> */}
      <div className='col-md-4'>

      <span className="badge rounded-pill text-bg-danger"
        style={{
          background: "red",
          width: "fit-content",
          position: "absolute",
          right: "0"
        }}>
        {source}
      </span>
      <img src={!imageurl ? "./noImageAvailable1.png" : imageurl} className="card-img-top" alt="..." />
          </div>
      <div className="card-body col-md-8">

        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description ? description : content}...</p>
       <div>
        <button type="button" ref={modalRef} className="btn btn-dark" data-bs-toggle="modal" data-bs-target={"#exampleModal"+index}>
              Read More
        </button>
        {
          <Modal url={newsUrl} source={source} title = "10 News" id={index}/>

        }
        
      </div>
      </div>
    </div>



    {/* <Modal url={newsUrl}/> */}
  </div>;
}


export default NewsItem;
