const apiKey1 = '04666e5e15b14b6e823d1a93ff2b4c76'; // Replace with your NewsAPI key

fetch(`https://newsdata.io/api/1/news?apikey=pub_208213dd26929f191ad1c2636a45625a6138b&q=usa `)
  .then(response => response.json())
  .then(data => {
    
      document.getElementById('row1').innerHTML = 'Loading Failed - <a href="https://meithecat.net/help/loadingfailed.html">Learn More</a>'
    console.log(data.results)
    var news0 = data.results[0].title
    var news0link = data.results[0].link
    document.getElementById('row1').innerHTML = '<a title="' + data.results[0].description + '" href="' + news0link + '">' + news0 + '</a>'
    var news1 = data.results[1].title
    var news1link = data.results[1].link
    document.getElementById('row2').innerHTML = '<a title="' + data.results[1].description + '" href="' + news1link + '">' + news1 + '</a>'
    var news2 = data.results[2].title
    var news2link = data.results[2].link
    document.getElementById('row3').innerHTML = '<a title="' + data.results[2].description + '" href="' + news2link + '">' + news2 + '</a>'
    var news3 = data.results[3].title
    var news3link = data.results[3].link
    document.getElementById('row4').innerHTML = '<a title="' + data.results[3].description + '" href="' + news3link + '">' + news3 + '</a>'
    console.log(data.results[0].description)
  })
  .catch(error => console.error(error));
