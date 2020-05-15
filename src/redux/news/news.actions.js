import { newsActionTypes } from './news.types';

export const setTopNews = (item) => ({
    type: newsActionTypes.SET_TOP_NEWS,
    item: item
});

export const fetchNewsPages = (item) => ({
    type: newsActionTypes.FETCH_NEWS_PAGES,
    item: item
});

export const setButtonLoader = () => ({
    type: newsActionTypes.SET_BUTTON_LOADER,
});


export const setIsLoading = () => ({
    type: newsActionTypes.SET_IS_LOADING,
});

export const clearNews = () => ({
    type: newsActionTypes.CLEAR_NEWS,
});




export const initNews = (url) => {
    return dispatch => {
        dispatch(setIsLoading());

        try {
            const fetchData = async () => {
                const res = await fetch(url);
                const results = await res.json();
                  
                dispatch(setTopNews(results.articles));
      
              };
              fetchData();
            
        } catch (error) { 
        
            console.error(error) 
      
      }

        

    }
};



export const initNewsPages = (url) => {
    return dispatch => {
        dispatch(setButtonLoader());
        const fetchData = async () => {
          const res = await fetch(url);
          const results = await res.json();
            
          dispatch(fetchNewsPages(results.articles));

        };
        fetchData();
    }
};


