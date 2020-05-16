import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {  initNews, initNewsPages, clearNews } from '../../redux/news/news.actions';
import { clearSearchField } from '../../redux/search/search.actions';


import Article from '../../components/Article/Article';
import Spinner from '../../components/Spinner/Spinner';
import CustomButtom from '../../components/CustomButton/CustomButton';


const HomePage = (props) => {
  
    //Counter for page number
    const [currentPage, setCurrentPage] = useState(1);
    const {onInitNews, initNewsPages, clearNews,search, clearSearchField,sortBy} = props;

    //Search term URL encoding
    const delimitedSearch = search.split(' ').join('%20');

    //URL endpoint selection, whether it is for top articles, or searched terms
    const initialUrl =  search.length>0 ? `https://newsapi.org/v2/everything?q="${delimitedSearch}"&sortBy=${sortBy}&apiKey=45bd70397f764ef39b884110ac6fb3c1`:`https://newsapi.org/v2/top-headlines?country=us&apiKey=45bd70397f764ef39b884110ac6fb3c1`;

    //URL endpoint selection, whether it is for top articles additional pages, or searched terms additional pages
    const additionalPagesUrl = search.length ? `https://newsapi.org/v2/everything?q="${delimitedSearch}"&sortBy=${sortBy}&page=${currentPage+1}&apiKey=45bd70397f764ef39b884110ac6fb3c1`: `https://newsapi.org/v2/top-headlines?country=us&page=${currentPage+1}&apiKey=45bd70397f764ef39b884110ac6fb3c1`;

    //alternative API key because of request number restriction
    //gmail :45bd70397f764ef39b884110ac6fb3c1
    //code gmail:f930211ac5a543f0a784268fbda87a67
    //code hotmail: a4bf2438c6a14afdb96adf464ea6b166
    //walter: e0966cb0fcd14b89aab54ea0bea5f22d

    //clear search field state
       useEffect(() => {
        clearSearchField();
        clearNews();
    },[]);

    // Reload top news state
    useEffect(() => {
        clearNews();            
        setCurrentPage(1);
        onInitNews(initialUrl);
    },[onInitNews, clearNews,initialUrl]);
    
    //Timeout so the "load more "button does not get inactive during fetching
    const loadMorePages = () => {
        if (currentPage <= Math.ceil(props.articles.length/20)) {
            setTimeout(function(){setCurrentPage(currentPage+1); }, 400);
        }
        initNewsPages(additionalPagesUrl); 
    };



      const MainComponent = () => (
        <div className="bg-secondary mx-12 md:mx-24 lg:mx-40 py-6">
        <div className="font-extrabold text-2xl border-b border-black m-4">{search.length ? "SEARCHED ARTICLES" : "TOP HEADLINES"}</div>
        <div className="flex flex-wrap items-start justify-center" >
        { 
            props.articles.map(article => (<div className="w-full md:w-1/2" key={article.publishedAt} ><Article article={article}/> </div>))
        }
        </div>
            <div className={`text-center mt-12 mb-6 ${currentPage > Math.ceil(props.articles.length/20) ? 'opacity-50 pointer-events-none' : ''}`}><CustomButtom onLoadMore={loadMorePages} buttonLoader={props.buttonLoader}>{currentPage > Math.ceil(props.articles.length/20) ? 'No new articles' : 'Load more'}</CustomButtom></div>
        </div>);

    return(

        //Show spinner while fetching data
        <div className="pt-32 sm:pt-16">
            { props.isLoading ? <Spinner/> :<MainComponent/> }
        </div>
    
    )
};

const mapStateToProps = state => {
    return {
        articles:state.articles.top_articles,
        isLoading:state.articles.isLoading,
        buttonLoader:state.articles.buttonLoader,
        search:state.search.searchField,
        sortBy:state.search.sortBy
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitNews: (url) => dispatch(initNews(url)),
        initNewsPages: (page) => dispatch (initNewsPages(page)),
        clearNews: () => dispatch(clearNews()),
        clearSearchField : () => dispatch(clearSearchField())
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
