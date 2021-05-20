const checkFactors= (parameter)=>{
  if(parameter % 2 === 0 && parameter % 3 === 0 && parameter % 5 === 0){
    return "yu-gi-oh";
  }
  else if (parameter % 2 === 0 && parameter % 3 === 0) {return "yu-gi";}
  else if (parameter % 2 === 0 && parameter % 5 === 0){return "yu-oh";}
  else if (parameter % 3 === 0 && parameter % 5 === 0) {return "gi-oh";}
  else if (parameter % 2 === 0) {return "yu";}
  else if (parameter % 3 === 0) {return "gi";}
  else if (parameter % 5 === 0) {return "oh";}
  else{return parameter}
}

const arrayOfNum = (parameter) => {
  let arry=
  [...Array(parameter).keys()].map(i => checkFactors(i+1));
  console.log(arry);
}

const checkYuGiOh = (parameter) => {
  let int = parseInt(parameter)
  if(int === NaN){
    return console.log(`invalid parameter:${parameter}`);
  }
  else{
    arrayOfNum(int);
  }
}

checkYuGiOh(10);
