# Feedback

# Client 
## index.html 

1. UI looks really good! 

2. There is no form element containing the search input. There should be button which submits the form containing search data

3. Links in top right could be active URLs to the google page. 

## result.html

1. There is no form element containing the search input. There should be button which submits the form.

2. There 

## index.js

## result.js
1. The for loop on line 7-12 could be put into its own 'helper function to help keep the code clean. 


# Server

## app.js

1. Mock data shoudl be in its own file to keep server file clean

2. you could make a route for pages

3. you are requiring two items you don't use ( they may have accidentally important themselves from the autocomplete? )

4.  the data should include at least three items 1. url, 2 title, 3 body text. this is what the search results will be made up from. 

5. you should not be data ghadnling inside of the res.send. This won't allow for any error checking

6. there is no error checking. 


# General 

1. Would be nice to see some testing set up on both client and server side. 
