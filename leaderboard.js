function setup() {
}

var houseArray = [{name: 'maitarangi', points: 460}, {name: 'pukeatua', points: 500},
                  {name: 'orongorongo', points: 457}, {name: 'tararua', points: 674},
                  {name: 'remutaka', points: 399}, {name: 'pukeariki', points: 400},]


function leaderboard() {
  houseArray.sort((a, b) => b.points - a.points);
  houseArray.forEach((e) => {
    console.log(`${e.name} ${e.points}`);
});
 
  for (var i = 0; i < 6; i++) {
  document.getElementById(houseArray[i].name + 'Bar').style.order = houseArray[i].points;
  document.getElementById(houseArray[i].name + 'Bar').style.width = houseArray[i].points / houseArray[0].points * 100 + "%";
  document.getElementById(houseArray[i].name + 'Points').innerHTML = houseArray[i].points;
  }
}