const convertFahrToCelsius = (parameter) => {
  let int = parseInt (parameter);
  if (int === NaN) {
    let paratype = typeof int;
    console.log(`${parameter} is not a valid number but a/an ${paratype}`)
  }
  else{
    let celsius = ((parameter-32)*0.5556).toFixed(4);
    console.log(celsius);
  }
}

convertFahrToCelsius(40);
