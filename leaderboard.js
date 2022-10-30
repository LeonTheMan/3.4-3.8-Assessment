function setup() {
}

var houseArray = [{name: 'maitarangi', points: 420}, {name: 'pukeatua', points: 563},
                  {name: 'orongorongo', points: 357}, {name: 'tararua', points: 474},
                  {name: 'remutaka', points: 399}, {name: 'pukeariki', points: 360},]


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