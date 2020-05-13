import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const ArticlePage = (props) => {

    const relatedArticle = props.articles.filter(article=>article.title===props.match.params.article)
    const date = new Date(relatedArticle[0].publishedAt);
    const displayDate = date.toDateString().replace(' ', ', ');

    useEffect(() => {
      window.scrollTo(0,0);
    },[]);

    return(
        <div className="h-full mx-24 lg:mx-48 bg-white py-32 px-10 lg:px-32 m-auto">
            <h1 className="font-black text-xl md:text-4xl">{relatedArticle[0].title}</h1>
            <h4 className="font-black text-teal-500">{`by ${relatedArticle[0].author}`}</h4>
            <h4 className="text-tertiary my-2">{displayDate}</h4>
            <p className="italic my-6 text-base md:text-xl text-tertiary">{relatedArticle[0].description}</p>
            Read more <a  className="text-teal-500" href={relatedArticle[0].url} target="_blank" >here</a>
            <div className="w-full object-cover object-center overflow-hidden">
              <img className="object-contain w-full object-center mt-3" 
                  src={relatedArticle[0].urlToImage ? relatedArticle[0].urlToImage : "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"} alt="Article"/></div>
            <p className="my-6">{relatedArticle[0].content}</p>
            <p className="text-tertiary my-2 ">SOURCE: <span>{relatedArticle[0].source.name}</span></p>

        </div>
    )};

    const mapStateToProps = state => {
      return  {
        articles:state.articles.top_articles,
      }
    };

export default connect (mapStateToProps)(ArticlePage);

// {
//     "source": {
//         "id": "ars-technica",
//         "name": "Ars Technica"
//     },

//     "url": "https://arstechnica.com/science/2020/05/large-chunks-of-a-chinese-rocket-missed-new-york-city-by-about-15-minutes/",

