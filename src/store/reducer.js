const initState = {
    shift : 3,

    text : 'Rajesh',

    caesarText : ''
 
};

const reducer = (state = initState, action)=> {

 const newState = {...state};

 const caesar = (text, shift) => {
    return String.fromCharCode(
      ...text.split('').map(char => ((char.charCodeAt() - 97 + shift) % 26) + 97),
    );
}

const y = caesar(initState.text, initState.shift);
 if (action.type === 'CHANGE_TEXT'){
    return {
    
        ...state, 
        caesarText: y,
        // year:++state.years
        
    }
    
 }
//  if (action.type === 'AGE_DECRE'){
    
//     newState.age = newState.age + action.value;
//     newState.year = newState.year + action.value;

//  }


 return newState;

}

export default reducer;

