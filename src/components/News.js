import React, {useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

function News(props) {
    const[articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);
    const[totalResults,settotalResults]=useState(0);
    // document.title= `${props.category}-NewsMonkey`

   const updateNews= async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0ab93df5f76b459bbf9dd9c39dbcc3d5&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        let jsonData = await data.json()
        setArticles(jsonData.articles)
        setLoading(false)
        settotalResults(jsonData.totalResults)
    }

    useEffect(() => {
        updateNews(); 
    }, [])


    const handleprevClick = async () => {
         setPage(page-1)
         updateNews();
    }
    const handlenextClick = async () => {
        setPage(page+1)
        updateNews();


    }
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: "40px 0px",marginTop:"90px" }}>NewsMonkey- Top {props.category} Headlines </h1>
                {loading ? <Spinner /> : null}
                <div className="row">
                    {articles.map((element) => {
                            return <div className="col-md-3 mx-4" key={element.url}>
                                <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} />
                            </div>
                        })}
                </div>

                <div className='container d-flex justify-content-around'>
                    <button disabled={page <= 1} type="button" onClick={handleprevClick} className='btn btn-primary'> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / 19)} onClick={handlenextClick} type="button" className='btn btn-primary'>Next &rarr;</button>
                </div>
            </div>
        )
    }

export default News
