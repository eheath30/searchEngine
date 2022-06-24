const searchButton = document.querySelector('#search-btn')
const listAllButton = document.querySelector('#list-all')
const searchText = document.getElementById('search-text')

// Search database

listAllButton.addEventListener('click',function(e){
  e.preventDefault();
    const searchText = document.querySelector('#list-all')
    window.location.href =  `/client/result.html?s=${searchText.value}`;


})

// Recieves value and displays

function hndlr(res) {
  fetch(`http://localhost:3000/search`)
    .then(resp => resp.json())
    .then(res => {

      try {
        document.getElementById('content').innerHTML = ''
          document.getElementById('content').innerHTML += `<div style="color: grey;">About ${res.searchInformation.formattedTotalResults} results(${res.searchInformation.formattedSearchTime} seconds)`;


          for (let i = 0; i < res.items.length; i++) {

            document.getElementById('content').innerHTML
              += `<br><a style="color: grey; font-size: 12px; text-decoration: none;" href=${res.items[i].link} target="_blank">
      ${res.items[i].link}
      </a>
      <a target="_blank" href=${res.items[i].link} style="text-decoration: none;">
      <h2 style="font-family: Poppins; margin-top: -1px;" >
      ${res.items[i].title}
      </h2>
      </a>
      <div style="margin-top: -15px; margin-bottom: 15px;">
      ${res.items[i].htmlSnippet}</div>`
          }


        } catch(error) {
          document.getElementById('content').innerHTML = ''
        }



    })
  }


// Send search value to server

searchButton.addEventListener('click',function(e) {
    e.preventDefault();
    hndlr()
    const valueToSend = [{
      value: searchText.value,
    }];



    const options = {
      method: "POST",
      body: JSON.stringify(valueToSend),
      headers: {
        "Content-Type": "application/json",
      },
    };


    fetch( 'http://localhost:3000/pages/search', options )
    .then( response => response.json() )
    .catch((err) => {
      console.log(err);
    });

    // window.location.href =  `/client/result.html`;

});
