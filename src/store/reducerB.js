const initState = {

    b: 1
};

const reducerB = (state = initState, action)=> {

 const newState = {...state};





 if (action.type === 'ADD_B'){

    newState.b = action.a + newState.b
    

 }


 return newState;

}

export default reducerB;

