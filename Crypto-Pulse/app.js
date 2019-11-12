///  Calling crypto data API and modeling data for each chart ///
const btcData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const cosmosData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const chainlinkData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=LINK&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const ethereumData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


/// Calling News API and modeling data ///
const getNews = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&feeds=decrypt,cointelegraph,newsbtc&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data
  const urls = data.map(obj => obj.url)
  const imgURLs = data.map(obj => obj.imageurl)
  const titles = data.map(obj => obj.title)
  const sources = data.map(obj => obj.source)
  console.log(urls, imgURLs, titles, sources)
  return {
    titles,
    imgURLs,
    sources,
    urls
  }
}


/// Error handling ///
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

getNews()

async function printNews() {
  let { titles, sources, imgURLs, urls } = await getNews();

  /// URL's ///
  let firstURL = urls[0];
  let secondURL = urls[1];
  let thirdURL = urls[2];
  let fourthURL = urls[3];
  let fifthURL = urls[4];
  let sixthURL = urls[5];
  let seventhURL = urls[6];
  let eighthURL = urls[7];
  let ninthURL = urls[8];

  /// Images ///
  let firstImg = imgURLs[0];
  let secondImg = imgURLs[1];
  let thirdImg = imgURLs[2];
  let fourthImg = imgURLs[3];
  let fifthImg = imgURLs[4];
  let sixthImg = imgURLs[5];
  let seventhImg = imgURLs[6];
  let eighthImg = imgURLs[7];
  let ninthImg = imgURLs[8];

  /// Titles ///
  let firstTitle = titles[0].substring(0, 70) + "...";
  let secondTitle = titles[1].substring(0, 70) + "...";
  let thirdTitle = titles[2].substring(0, 70) + "...";
  let fourthTitle = titles[3].substring(0, 70) + "...";
  let fifthTitle = titles[4].substring(0, 70) + "...";
  let sixthTitle = titles[5].substring(0, 70) + "...";
  let seventhTitle = titles[6].substring(0, 70) + "...";
  let eighthTitle = titles[7].substring(0, 70) + "...";
  let ninthTitle = titles[8].substring(0, 70) + "...";


  /// Sources ///
  let firstSource = sources[0].toUpperCase();
  let secondSource = sources[1].toUpperCase();
  let thirdSource = sources[2].toUpperCase();
  let fourthSource = sources[3].toUpperCase();
  let fifthSource = sources[4].toUpperCase();
  let sixthSource = sources[5].toUpperCase();
  let seventhSource = sources[6].toUpperCase();
  let eighthSource = sources[7].toUpperCase();
  let ninthSource = sources[8].toUpperCase();

//   /// Dates ///
//   let firstDate = dates[0];
//   let secondDate = dates[1];
//   let thirdDate = dates[2];
//   let fourthDate = dates[3];
//   let fifthDate = dates[4];
//   let sixthDate = dates[5];

  /// First Card ///
  // document.getElementById("img1").style.backgroundImage = firstImg;
  document.getElementById("img1").src = firstImg;
  document.getElementById("url1").href = firstURL;
  document.getElementById("title1").innerHTML = firstTitle;
  document.getElementById("source1").innerHTML = firstSource;
//   document.getElementById("date1").innerHTML = firstDate;

  /// Second Card ///
  document.getElementById("img2").src = secondImg;
  document.getElementById("url2").href = secondURL;
  document.getElementById("title2").innerHTML = secondTitle;
  document.getElementById("source2").innerHTML = secondSource;
//   document.getElementById("date2").innerHTML = secondDate;

  /// Third Card ///
  document.getElementById("img3").src = thirdImg;
  document.getElementById("url3").href = thirdURL;
  document.getElementById("title3").innerHTML = thirdTitle;
  document.getElementById("source3").innerHTML = thirdSource;
//   document.getElementById("date3").innerHTML = thirdDate;

  /// Fourth Card ///
  document.getElementById("img4").src = fourthImg;
  document.getElementById("url4").href = fourthURL;
  document.getElementById("title4").innerHTML = fourthTitle;
  document.getElementById("source4").innerHTML = fourthSource;
//   document.getElementById("date4").innerHTML = fourthDate;

  /// Fifth Card ///
  document.getElementById("img5").src = fifthImg;
  document.getElementById("url5").href = fifthURL;
  document.getElementById("title5").innerHTML = fifthTitle;
  document.getElementById("source5").innerHTML = fifthSource;
//   document.getElementById("date5").innerHTML = fifthDate; 
  
  /// Sixth Card ///
  document.getElementById("img6").src = sixthImg;
  document.getElementById("url6").href = sixthURL;
  document.getElementById("title6").innerHTML = sixthTitle;
  document.getElementById("source6").innerHTML = sixthSource;
//   document.getElementById("date6").innerHTML = sixthDate;

/// Seventh Card ///
document.getElementById("img7").src = seventhImg;
document.getElementById("url7").href = seventhURL;
document.getElementById("title7").innerHTML = seventhTitle;
document.getElementById("source7").innerHTML = seventhSource;
//   document.getElementById("date6").innerHTML = sixthDate;

/// Eighth Card ///
document.getElementById("img8").src = eighthImg;
document.getElementById("url8").href = eighthURL;
document.getElementById("title8").innerHTML = eighthTitle;
document.getElementById("source8").innerHTML = eighthSource;
//   document.getElementById("date6").innerHTML = sixthDate;

/// Ninth Card ///
document.getElementById("img9").src = ninthImg;
document.getElementById("url9").href = ninthURL;
document.getElementById("title9").innerHTML = ninthTitle;
document.getElementById("source9").innerHTML = ninthSource;
//   document.getElementById("date6").innerHTML = sixthDate;
}

printNews();

/// Charts ///
let createBtcChart
let createCosmosChart
let createLinkChart
let createethereumChart

async function printBtcChart() {
  let { times, prices } = await btcData()

  let btcChart = document.getElementById('btcChart').getContext('2d');

  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}



async function printCosmosChart() {
  let { times, prices } = await cosmosData()

  let cosmosChart = document.getElementById('cosmosChart').getContext('2d');

  let gradient = cosmosChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(27,30,54,.5)');
  gradient.addColorStop(.425, 'rgba(46,49,72,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createCosmosChart = new Chart(cosmosChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: "",
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(46,49,72,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}


async function printChainlinkChart() {
  let { times, prices } = await chainlinkData()

  let chainlinkChart = document.getElementById('chainlinkChart').getContext('2d');

  let gradient = chainlinkChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(42, 89, 217, .5)');
  gradient.addColorStop(.425, 'rgba(42, 89, 217, 0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createChainlinkChart = new Chart(chainlinkChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: "",
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgb(42, 89, 217, 1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}



async function printEthereumChart() {
  let { times, prices } = await ethereumData()

  let ethereumChart = document.getElementById('ethereumChart').getContext('2d');

  let gradient = ethereumChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(89, 156, 237, .5)');
  gradient.addColorStop(.43, 'rgba(83, 211, 224, 0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createEthereumChart = new Chart(ethereumChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(89, 156, 237, 1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
      },

      legend: {
        display: false
      },

      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}


/// Update current price ///
async function updateEthereumPrice() {
  let { times, prices } = await ethereumData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}

async function updateCosmosPrice() {
  let { times, prices } = await cosmosData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}

async function updateChainlinkPrice() {
  let { times, prices } = await chainlinkData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("chainlinkPrice").innerHTML = "$" + currentPrice;
}

async function updateBitcoinPrice() {
  let { times, prices } = await btcData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}


/// Print charts ///
updateEthereumPrice()
updateCosmosPrice()
updateChainlinkPrice()
updateBitcoinPrice()

printBtcChart()
printCosmosChart()
printChainlinkChart()
printEthereumChart()


/// Current time ///
async function updateClock() {
let time = new Date();
let clock = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
document.getElementById("clock").innerHTML = clock;
}

updateClock()
