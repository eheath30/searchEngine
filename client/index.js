const searchButton = document.querySelector('#search-btn')
const listAllButton = document.querySelector('#list-all')


searchButton.addEventListener('click',function(e){

    const searchText = document.querySelector('#search-text')
    window.location.href =  `/client/result.html?s=${searchText.value}`;

})






// listAllButton.addEventListener('click',function(e){

//     const searchAllText = document.querySelector('#search-text')

//     window.location.href =  `/client/result.html?s=${pages.value}`;
//     console.log(searchAllText);

// })
