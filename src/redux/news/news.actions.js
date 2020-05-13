import { newsActionTypes } from './news.types';

export const setTopNews = (item) => ({
    type: newsActionTypes.SET_TOP_NEWS,
    item: item
});

export const setIsLoading = () => ({
    type: newsActionTypes.SET_IS_LOADING,
});


let currentPage=1;
export const initNews = (item) => {
    //currentPage++;
    console.log(currentPage);
    return dispatch => {
        dispatch(setIsLoading());

        const fetchData = async () => {
          const res = await fetch(`http://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&apiKey=45bd70397f764ef39b884110ac6fb3c1`);
          const results = await res.json();
            dispatch(setTopNews(results.articles));
        };
        fetchData();
    }
};

