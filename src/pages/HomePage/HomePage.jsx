import React, { useState, useEffect } from 'react';

import Article from '../../components/Article/Article';
import Spinner from '../../components/Spinner/Spinner';

const HomePage = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=45bd70397f764ef39b884110ac6fb3c1`);
          const results = await res.json();

           setData(results.articles);
        };
        fetchData();
      },[setData]);

    return(

        <div className="bg-white w-2/3 m-auto pt-24">
            <div className="font-extrabold text-2xl mx-4">TOP HEADLINES</div>
            { data ? 
                data.map(article => (<Article key = {article.publishedAt} article={article}/> ))
                :<Spinner/> 
            }

        </div>

    
    )};

export default HomePage;


// http://newsapi.org/v2/top-headlines?country=us&apiKey=45bd70397f764ef39b884110ac6fb3c1;

// {
//     "source": {
//         "id": "ars-technica",
//         "name": "Ars Technica"
//     },
//     "author": "Eric Berger",
//     "title": "Large chunks of a Chinese rocket missed New York City by about 15 minutes - Ars Technica",
//     "description": "China's Long March 5B rocket launched without a second stage.",
//     "url": "https://arstechnica.com/science/2020/05/large-chunks-of-a-chinese-rocket-missed-new-york-city-by-about-15-minutes/",
//     "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/05/GettyImages-1211854948-760x380.jpg",
//     "publishedAt": "2020-05-12T15:52:00Z",
//     "content": "Enlarge/ A Long March 5B rocket lifts off from the Wenchang launch site on China's southern Hainan Island on May 5, 2020.\r\n105 with 74 posters participating\r\nA week ago, China launched the newest version of its largest rocket, the Long March 5B, from its sout… [+3351 chars]"
// },