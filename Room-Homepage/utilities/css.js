const css = (...classes) =>{
     
    return classes.filter( c=>typeof c!=="undefined").join(" ");

}

const cond = (className,condition)=>condition?className:undefined;

export{css,cond};