const initState = {

    a: 1,

};

const reducerA = (state = initState, action)=> {

 const newState = {...state};


 if (action.type === 'ADD_A'){

    newState.a = newState.a + action.b
    

 }



 return newState;

}

export default reducerA;

