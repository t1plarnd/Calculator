function div(a, b){
    if(b != 0){
        return (a/b)
    }
    throw console.error('b can`t be equal to 0');
}

export {div};