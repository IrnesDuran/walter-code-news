import React from 'react';
import { withRouter } from 'react-router-dom';

const Article = (props) => {

    console.log(props)
    return(
        <div className="card flex my-4 bg-white shadow-md relative">
            <div className="flex-1">
                <img className="object-cover w-full h-48 object-left" 
                src={props.article.urlToImage ? props.article.urlToImage :"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"} alt="Article"/>
            </div>
            <div className="w-2/3 px-4 py-2 flex flex-col justify-between">
                <h1 className="text-lg font-black">{props.article.title}</h1>
                <p className="text-sm">{props.article.description}</p>
                <a href="#" class="hover:text-tertiary text-right text-teal-500">Read more &rarr;</a>
            </div>
            {props.article.author ? (<div className="absolute bottom-0 left-0 bg-white p-1 text-sm uppercase font-extrabold text-teal-500">{props.article.author}</div>) : null}
        </div>

    )};

export default withRouter(Article);



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