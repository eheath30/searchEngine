const searchButton = document.querySelector('#search-btn')
const listAllButton = document.querySelector('#list-all')
const searchText = document.getElementById('search-text').value

// Search database
searchButton.addEventListener('click',function(e){

    const searchText = document.querySelector('#search-text')
    window.location.href =  `/client/result.html?s=${searchText.value}`;

})


// Send search value to server

searchButton.addEventListener('click',function(e) {
    e.preventDefault();

    const valueToSend = {
      "value": searchText,
    };

    checkURL.push(JSON.stringify(valueToSend));

    const options = {
      method: "POST",
      body: JSON.stringify(valueToSend),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // TODO
    // Continue the post method to send the search text to the server
    fetch( 'http://localhost:3000/pages/search', options )
    .then( response => response.json() )
    .catch((err) => {
      console.log(err);
    });
});
    // TODO




// listAllButton.addEventListener('click',function(e){

//     const searchAllText = document.querySelector('#search-text')

//     window.location.href =  `/client/result.html?s=${pages.value}`;
//     console.log(searchAllText);

// })
