function searchData(title) {

    fetch(`http://localhost:3000/pages/all`)
      .then(resp => resp.json())
      .then(results => {

          for (let index = 0; index < results.length; index++) {
              const element = results[index];
              const div = document.createElement('div')
              div.textContent = element.title;
              div.setAttribute('style', 'padding-bottom: 5vh');
              document.getElementById('result').append(div)
          }

      } )
  }


  function resultLoad(){
      const urlParams = new URLSearchParams(window.location.search);
      const search = urlParams.get('s');
      const resultDiv = document.querySelector('#result')
      if(search != null){

          searchData(search);

      }else {
          resultDiv.textContent = "enter your key word";
      }
  }
