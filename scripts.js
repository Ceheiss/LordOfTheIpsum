(function(){
 
  const button = document.querySelector("#btn");
  const iteration = document.querySelector("#iteration");
  const container = document.querySelector("#container");
  const url = "https://gist.githubusercontent.com/Ceheiss/087aa8e996fc28c4180118413042b0f7/raw/60e0f82322a2777d455680ab4209b8ae48c45d51/lotrquotes.json";;

  button.addEventListener("click", function(){
     axios.get(url)
     .then(getRandomQuote)
     .catch(function(e){
      console.log(e);
    })
  })

  function getRandomQuote (res){
    const times = iteration.value;
    const arr = res.data.quotes;
    cleanPrevious();
    for(let i = 0; i < times; i++){
      const random = Math.floor(Math.random() * arr.length);
      const randomQuote = arr[random];
      addElement(randomQuote);
    }
  }

  function addElement(content){ 
    const paragraph = document.createElement("p");
    const paraText = document.createTextNode(content);
    paragraph.appendChild(paraText);
    container.appendChild(paragraph);
  }

  function cleanPrevious(){
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
})()
