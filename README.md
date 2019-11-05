# The Lord of The Ipsum
Lorem Ipsum based in Lord Of The Rings coded in JS and the help of Axios library.

All of the **LOTR quotes** come from a **JSON file** I built and hosted in [here](https://api.myjson.com/bins/v8260) .


Here is some sample code (almost the whole app tbh):


```javascript
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
```


## Go [here](https://ceheiss.github.io/LordOfTheIpsum/) to check it out, do it for Gondor!
