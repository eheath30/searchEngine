const express = require("express");
const app = express();
const cors = require("cors");
const { ALL } = require("dns");
const { application } = require("express");

app.use(express.json());

pages = [
  {
    id: 1,
    title:
      "⭐ Wikipedia Sports: Football: Latest news, reaction and breaking updates - Metro: Get the latest football news, transfer updates and reaction from Premier League, EFL and European football, Football: Latest news, reaction and breaking updates - Metro: Get the latest football news, transfer updates and reaction from Premier League, EFL and European football.",
  },
  {
    id: 2,
    title:
      "⭐ Wikipedia Sports: Basketball: Why is basketball not popular in UK    Its ironic to note that while London is a strategic location for the NBA to promote its brand and the sport of basketball throughout Europe, the Middle East, and Asia  there has seemingly just not been enough space for this game in the crowded landscape of British sport. ",
  },
  {
    id: 3,
    title:
      "⭐ Wikipedia Sports: Soccer: Linguistically creative students at the University of Oxford in the 1880s distinguished between the sports of “rugger” (rugby football) and “assoccer” (association football). The latter term was further shortened to “soccer” (sometimes spelled “socker”), and the name quickly spread beyond the campus. ",
  },
  {
    id: 4,
    title:
      "⭐ Wikipedia Sports: Baseball: A bat-and-ball game played between two teams of nine players each, that take turns batting and fielding. The game is in play when a player on the fielding team, called the pitcher, throws a ball that a player on the batting team tries to hit with a bat. The objective of the offensive team (batting team) is to hit the ball into the field of play, #getMore",
  },
  {
    id: 5,
    title:
      "⭐ Wikipedia Sports: Volleyball: is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been a part of the official program of the Summer Olympic Games since Tokyo 1964. ",
  },
  {
    id: 6,
    title:
      "⭐ NIKE Sports: Get The Latest Nike Football Gear. Shop Online & Get Free Delivery.. Train, Play, Dominate With Nike's Latest Football Collection. Shop Online At Nike.com",
  },
  {
    id: 7,
    title:
      "⭐ Sports shop for adidas shoes and sportswear: Originals, running, football and training on the official adidas UK website. Return for free for 60 days!",
  },
  {
    id: 8,
    title:
      "⭐ Wikipedia Sports: Lacrosse: Lacrosse is a team sport played with a lacrosse stick and a lacrosse ball. It is the oldest organized sport in North America, with its origins with the indigenous people of North America as early as the 12th century.",
  },
  {
    id: 9,
    title:
      "⭐ Wikipedia Sports: Running: Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).",
  },
  {
    id: 10,
    title:
      "⭐ NBA Basketball: Get the Official NBA Jerseys, Clothing & Team Merchandise. Order Online Now! Sports USA.",
  },
];

app.use(cors());


const search = "Sports";

// console.log(pages.filter((page) => page.title.includes(search)));

app.get("/pages/:id", (req, res) =>
  res.send(pages.filter((pages) => pages.id == req.params.id))
);

app.get("/pages", function (req, res) {
  let title = req.query.title;
  res.send(pages.filter((page) => page.title.includes(title)));
});

app.get("/pages/all", function (req, res) {
  res.json(pages);
});



//TODO


const searchTerm = [];

let result;

app.post('/pages/search', (req, res)=>{

  res.json(req.body)
  console.log(req.body[0].value)
  result = req.body[0].value
  searchTerm[0] = ({value: result})

  console.log(searchTerm)

});

app.get('/search', (req, res) => {

  fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBCLLL_YvsSDlEZG3l2DNHryH1ow-lw2Tc&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${searchTerm[0].value}`)
  .then(res => res.json())
  .then(data => {res.send(data)
  console.log(data);
  })

  })





// resultList = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBk8zJb9iVWE6KxobRc6h2x2MXrb2jn2ME&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${result}&callback=hndlr`;


// function hndlr(res) {
//   try {
//     console.log(res.searchInformation)

//     document.getElementById('content').innerHTML += `<div style="color: grey;">About ${res.searchInformation.formattedTotalResults} results(${res.searchInformation.formattedSearchTime} seconds)`;


//     for (let i = 0; i < res.items.length; i++) {

//       document.getElementById('content').innerHTML
//         += `<br><a style="color: grey; font-size: 12px; text-decoration: none;" href=${res.items[i].link} target="_blank">
// ${res.items[i].link}
// </a>
// <a target="_blank" href=${res.items[i].link} style="text-decoration: none;">
// <h2 style="margin-top: 2px">
// ${res.items[i].title}
// </h2>
// </a>
// <div style="margin-top: 8px;">
// ${res.items[i].htmlSnippet}</div>`
//     }


//   } catch(error) {
//     // document.getElementById('content').innerHTML = ''
//     console.log(error)
//   }
// }





app.listen(3000, () =>
  console.log(`\nExpress departing now from port 3000!\n`)
);
