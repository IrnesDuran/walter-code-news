import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setTopNews, initNews, setIsLoading } from '../../redux/news/news.actions';

import Article from '../../components/Article/Article';
import Spinner from '../../components/Spinner/Spinner';
import CustomButtom from '../../components/CustomButton/CustomButton';

const HomePage = (props) => {

    useEffect(() => {
        props.onInitNews();
      },[]);
     

      const MainComponent = () => (
        <div className="bg-secondary mx-12 md:mx-24 lg:mx-40 py-6">
        <div className="font-extrabold text-2xl border-b border-black m-2">TOP HEADLINES</div>
        <div className="flex flex-wrap items-start justify-center" >
        { 
            props.articles.map(article => (<div className="w-full md:w-1/2" key={article.publishedAt} ><Article article={article}/> </div>))
        }

        </div>
            <div className="text-center mt-12 mb-6"><CustomButtom/></div>
        </div>);


    return(

        <div className="pt-16">
            { props.isLoading ? <Spinner/> :<MainComponent/> }
        </div>
    
    )};

    const mapStateToProps = state => {
        return {
            articles:state.articles.top_articles,
            isLoading:state.articles.isLoading
        }
    };

    const mapDispatchToProps = dispatch => {
        return {
            setTopArticles:(item) => dispatch(setTopNews(item)),
            onInitNews: () => dispatch(initNews()),
            setIsLoading: () => dispatch(setIsLoading()),
        }
    };


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
