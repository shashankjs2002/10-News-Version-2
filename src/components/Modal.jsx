import React, {useEffect} from "react";

const Modal = (props) => {
    useEffect(() => {
    }, [props])

  return (
    <>
      <div style={{  width:"100vw",  height: "99vh", top: "0px", overflowY: "hidden"}} className={"modal fade"} id={"exampleModal"+props.id} tabIndex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document" style={{height: "97%",maxWidth: "100%"}}>
          <div className="modal-content" style={{height: "100%"}}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" data-bs-dismiss="modal">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <iframe style={{height: "100%", width: "100%"}} 
              src={props.url}
              ></iframe>
            </div>
            <div className="modal-footer">
              <a target="_blank" href={props.url} rel='nofollow'><button type="button" className="btn btn-dark">Go To {props.source}</button></a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal