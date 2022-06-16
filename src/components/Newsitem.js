import React from 'react'

function Newsitem(props) {
    // let {title,description,imgUrl,newsUrl,author,date}=props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={props.imgUrl ? props.imgUrl : "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376__340.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.newsUrl} target="_blank" className='btn btn-sm btn-dark'>Read More</a>
                    <p className="card-text"><small className="text-muted">By {props.author ? props.author : "unknown author"} on {new Date(props.date).toLocaleDateString()}</small></p>

                </div>
            </div>
        </div>
    )
}

export default Newsitem