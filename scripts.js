(function(){
 
  const button = document.querySelector("#btn");
  const iteration = document.querySelector("#iteration");
  const container = document.querySelector("#container");
  const url = "https://api.myjson.com/bins/v8260";

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
