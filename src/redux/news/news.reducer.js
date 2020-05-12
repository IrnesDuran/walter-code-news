const INITIAL_STATE = {
  dummy:"data"   
};


const newsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

export default newsReducer;