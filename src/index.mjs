import "./styles.css";
const getData = () => {
  //calls an api and get data
  console.log("fetching data");
};

//Debouncing

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

// onkeyup="betterFunction()"
const betterFunction = doSomeMagic(getData, 1000);
document.getElementById("input").onkeyup = betterFunction;
