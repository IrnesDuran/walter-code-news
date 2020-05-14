import { newsActionTypes } from './news.types';

const INITIAL_STATE = {
  top_articles:[],
  isLoading:false,
  buttonLoader:false  
};


const newsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
      case newsActionTypes.SET_TOP_NEWS:
          return {...state,
            top_articles: action.item,
            isLoading:false
          };
      case newsActionTypes.FETCH_NEWS_PAGES:
          return {...state,
            top_articles:[...state.top_articles,...action.item],
            buttonLoader:false
          };
      case newsActionTypes.SET_BUTTON_LOADER:
          return {...state,
            buttonLoader:true
          };
      case newsActionTypes.CLEAR_NEWS:
          return {...state,
            top_articles:[],
          };
      case newsActionTypes.SET_IS_LOADING:
           return {...state,
            isLoading:true
           };
      default:
            return state;
    };
};

export default newsReducer;


// const contactDetailsReducer = (state=INITIAL_STATE, action) => {
//   switch (action.type) {
//       case contactDetailsActionTypes.FETCH_TOP_NEWS:
//           return {...state,
//               name: action.text
//           };
//       case contactDetailsActionTypes.SET_CONTACT_ADDRESS:
//           return {...state,
//               address: action.text
//           };
//       case contactDetailsActionTypes.SET_CONTACT_EMAIL:
//           return {...state,
//               email: action.text
//           };
//       case contactDetailsActionTypes.SET_CONTACT_PHONE:
//           return {...state,
//               phone: action.text
//           };  
//       case contactDetailsActionTypes.CLEAR_CONTACTS:
//           return {...state,
//               name:'',
//               address:'',
//               email:'',
//               phone:''
//           };       
//       default:
//           return state;
//   };
// };