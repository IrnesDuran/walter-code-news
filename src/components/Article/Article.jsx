import React from 'react';
import { withRouter } from 'react-router-dom';

const Article = (props) => {
    return(
        <div className="card flex flex-col bg-white m-2">
            <div className="flex-1 relative">
                <img className="object-cover w-full h-48 object-center" 
                src={props.article.urlToImage ? props.article.urlToImage :"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"} alt="Article"/>
                <div className="absolute py-1 px-3 bg-white text-teal-500 uppercase font-extrabold text-sm bottom-0 left-0 -my-4">{props.article.author}</div>
            </div>
            <div className="w-full h-64 p-4 flex flex-col justify-between">
                <h1 className="text-lg font-black">{props.article.title}</h1>
                <p className="text-sm">{props.article.description}</p>
                <button className="hover:text-tertiary text-teal-500 cursor-pointer w-28 self-end"
                    onClick={() => props.history.push(`articles/${props.article.title}`)}>Read full article &rarr;</button>
            </div>
        </div>

    )};

export default withRouter(Article);

