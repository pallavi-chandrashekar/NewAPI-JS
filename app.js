let genNews = document.getElementById('generateNews');

genNews.addEventListener('click', genArticle);


function genArticle(){
  
  
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=08c00850fce64f3e88ccbdd3855debf1'

fetch(url)
.then(function(res){
return res.json();
}).then(function(data){

  let dataA = data.articles;

  console.log(dataA);

  let output = '';


  dataA.forEach(function(post){
    output+= `<p class="text-white text-center mt-4 mb-3" style="font-size:1.1rem;">${post.title}</p>
            <a href="${post.url}" target=_"blank"> <img src="${post.urlToImage}" class="img-fluid" style="width:500px;">   </img> </a>
    `
    document.querySelector("#render").innerHTML = output;
    
    

    
  })
  

  


  // data.forEach(function(post){
  //   let output = '';
  //   output+= `<li>${post.title}</li>`;

    
  // })
 

})


  
  // let url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=679e46cfd8644d3297d67576874a835c"
  
  // let req = new Request(url);
  
  // fetch(req)
  //   .then(function(response){
  //     console.log(response.json());
  //   }).then()
  }
  
  
  
  


  // UK News

  let UKButton = document.getElementById('generateNewsUK');

  UKButton.addEventListener('click', changeCol);



  function changeCol(){

    
    let url = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=08c00850fce64f3e88ccbdd3855debf1';

    fetch(url)
    .then(function(response){
      return response.json()
    }).then(function(UKData){
      let UK = UKData.articles;

      console.log(UK);

      let output = '' ;

      UK.forEach(function(post){
        output+= `<p class="text-center text-white mt-4 mb-3" style="font-size:1.1rem;">${post.title}</p>
        <a href="${post.url}" target=_"blank"> <img src="${post.urlToImage}" style="width:500px;" class="img-fluid"></img> </a>`;

        document.getElementById('render').innerHTML = output;
      })

    })

  }



// Render UK Sports

  let IndiaNews = document.getElementById('generateNewsIndia');


  IndiaNews.addEventListener('click', readerIndia);



  function readerIndia(){

    let IndiaNewsurl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=08c00850fce64f3e88ccbdd3855debf1';



    fetch(IndiaNewsurl)
    .then(function(UKSportsRes){
      return UKSportsRes.json();
    }).then(function(UKSportsData){

      let UKSData = UKSportsData.articles

      let output = '';

      UKSData.forEach(function(post){
        output+= `<p class= "text-center text-white mt-4 mb-3">${post.title}</p>
        <a href="${post.url}" target=_"blank"> <img src="${post.urlToImage}" style="width:500px;" class="img-fluid"></img> </a>
        `;

        document.getElementById('render').innerHTML = output;
      })

    })

  }
