var xmlhttp = new XMLHttpRequest();
const url = "https://restcountries.com/v3.1/alpha/";


console.log(111111111);
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var res = JSON.parse(this.responseText);
    console.log(res);
    var xmlhttp2 = new XMLHttpRequest();

    xmlhttp2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);
        console.log(res);

        var xmlhttp3 = new XMLHttpRequest();
        xmlhttp3.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            console.log(res);
          }
        };
        xmlhttp3.open("GET", url + res[0].borders[0]);
        xmlhttp3.send();
      }
    };

    xmlhttp2.open("GET", url + res[0].borders[1]);
    xmlhttp2.send();
  }
};
xmlhttp.open("GET", url + "gr");
xmlhttp.send();
console.log(123);

console.log("------------------------PROMISES .then .catch .finally");

fetch(url + "gr")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    return data;
  })
  .then(function (data) {
    var newCountry = data[0].borders[0];
    return fetch(url + newCountry);
  })
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log("new data", data);
  })
  .catch(function (err) {
    console.error(err);
  })
  .finally(function () {
    console.log("finally");
  });

async function getData() {
  try {
    var res = await fetch(url + "gr");
    var data = await res.json();
    res = await fetch(url + data[0].borders[1]);
    data = await res.json();
    console.log("DATA", data);
    if (data[0].borders[3] === "SRB") {
      throw new Error("not the country i am looking for");
    }
  } catch (err) {
    console.error(err);
  }
}

getData();

function checkIfEven(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve(`Number: ${number} is even`);
      } else {
        reject(new Error(`Number: ${number} is odd`));
      }
    }, 1000);
  });
}

checkIfEven(7)
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });

async function checkNumber() {
  try {
    var result = await checkIfEven(10);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkNumber();
console.log(222222222222);
