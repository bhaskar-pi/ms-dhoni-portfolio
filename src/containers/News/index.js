import React, { useEffect, useState } from 'react';
import './index.css';
import { getMsDhoniApi } from '../../apiServices/services';
import NewsCard from '../../components/NewsCard';
import { newsUrl } from '../../apiServices/confidential';
import Loading from '../../components/Loading';

const News = () => {
    const [news, setNews] = useState([]);
    const [errorMsg, setErrorMsg] = useState(undefined);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true)
                const response = await getMsDhoniApi(newsUrl);
                if (response.status === 200) {
                    setNews(response.data.storyList);
                    setErrorMsg(undefined)
                    setLoading(false)
                }
            } catch (error) {
                setErrorMsg(error.response.data.message);
                setLoading(false)
            }
        };

        getNews();
    }, []); 

    return (
        <div className='news-container'>
            <h1>Latest News</h1>
            <div className='error' style={{height: loading || errorMsg ? '80vh' : '0px'}}>
                {loading && <Loading />}
                {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            </div>
           
            {!errorMsg && !loading && <div className='news-cards'>
                {news.map((eachNews, index) => {
                    if (eachNews.story) {
                        return (
                            <NewsCard story={eachNews.story} />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>}
        </div>
    );
};

export default News;
