import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {  initNews, initNewsPages, clearNews } from '../../redux/news/news.actions';
import { clearSearchField } from '../../redux/search/search.actions';

import Article from '../../components/Article/Article';
import Spinner from '../../components/Spinner/Spinner';
import CustomButtom from '../../components/CustomButton/CustomButton';

const HomePage = (props) => {
  

    const [currentPage, setCurrentPage] = useState(1);
    const {onInitNews, initNewsPages, clearNews,search, clearSearchField} = props;



    const sortTerm = "popularity"
    //URL endpoint selection, whether it is for top articles, or searched terms
    const initialUrl =  search.length ? `https://newsapi.org/v2/everything?q=${search}&sortBy=${sortTerm}&apiKey=45bd70397f764ef39b884110ac6fb3c1`:`http://newsapi.org/v2/top-headlines?country=us&apiKey=45bd70397f764ef39b884110ac6fb3c1`;

    const additionalPagesUrl = search.length ? `https://newsapi.org/v2/everything?q=${search}&sortBy=${sortTerm}&page=${currentPage+1}&apiKey=45bd70397f764ef39b884110ac6fb3c1`: `http://newsapi.org/v2/top-headlines?country=us&page=${currentPage+1}&apiKey=45bd70397f764ef39b884110ac6fb3c1`;


    
useEffect(() => {
    clearNews();
    //clearSearchField();
    onInitNews(initialUrl);
    setCurrentPage(1);
  },[onInitNews, clearNews, initialUrl]);

  useEffect(() => {
    clearSearchField();
    clearNews();
    setCurrentPage(1);
  },[onInitNews]);

   


      const loadMorePages = () => {
          if (currentPage <= Math.ceil(props.articles.length/20)) {
            setTimeout(function(){setCurrentPage(currentPage+1); }, 300);
          }
          initNewsPages(additionalPagesUrl); 
      };



      const MainComponent = () => (
        <div className="bg-secondary mx-12 md:mx-24 lg:mx-40 py-6">
        <div className="font-extrabold text-2xl border-b border-black m-4">TOP HEADLINES</div>
        <div className="flex flex-wrap items-start justify-center" >
        { 
            props.articles.map(article => (<div className="w-full md:w-1/2" key={article.publishedAt} ><Article article={article}/> </div>))
        }
        </div>
            <div className={`text-center mt-12 mb-6 ${currentPage > Math.ceil(props.articles.length/20) ? 'opacity-50 pointer-events-none' : ''}`}><CustomButtom onLoadMore={loadMorePages} buttonLoader={props.buttonLoader}>{currentPage > Math.ceil(props.articles.length/20) ? 'No new articles' : 'Load more'}</CustomButtom></div>
        </div>);

console.log(search)

    return(

        <div className="pt-16">
            { props.isLoading ? <Spinner/> :<MainComponent/> }
        </div>
    
    )};

    const mapStateToProps = state => {
        return {
            articles:state.articles.top_articles,
            isLoading:state.articles.isLoading,
            buttonLoader:state.articles.buttonLoader,
            search:state.search.searchField
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
