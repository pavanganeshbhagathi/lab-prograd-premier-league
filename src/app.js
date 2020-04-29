//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var data = [];
  data.push(managerName, managerAge, currentTeam, trophiesWon);
  return data;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation) {
  if (formation.length == 0)
    return null;
  else
    var obj = {
      "defender": formation[0],
      "midfield": formation[1],
      "forward": formation[2]
    }
  return obj;
}


//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var data = players.filter(player => player.debut == year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var data = players.filter(player => player.position == position);
  return data;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let arr = [];
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
      if (players[i].awards[j].name == awardName)

        arr.push(players[i]);
  return arr;

}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  var data = [];
  for (var i = 0; i < players.length; i++) {
    var count = 0;
    var fcount = 0;
    let fifa = "FIFA Men's Player;"
    for (var j = 0; j < players[i].awards.length; j++)
      if (players[i].awards[j].name == awardName) {
        count++;
        //   if (players[i].awards[j].name == fifa) {
        //     fcount++
        //   }
        //  }

        //  if (fcount == 2) {
        //   data.push(players[i]);
        //  return data;
      }
    if (count == noOfTimes)
      arr.push(players[i]);

  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let arr = [];
  for (var i = 0; i < players.length; i++)
    for (var j = 0; j < players[i].awards.length; j++)
      if ((players[i].awards[j].name == awardName) && (players[i].country == country))

        arr.push(players[i]);
  return arr;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)

{
  let arr = [];
  for (var i = 0; i < players.length; i++) {

    if ((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age < age))
      arr.push(players[i]);
  }
  return arr;


}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var data = players.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].age < data[j].age) {
        var temp = data[i].age;
        data[i].age = data[j].age;
        data[j].age = temp;
      }
    }
  }

  return data;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {

  var teamData = players.filter(player => player.team == team);
  return teamData.sort().reverse();
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order