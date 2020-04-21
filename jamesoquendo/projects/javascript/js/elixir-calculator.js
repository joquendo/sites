//elixir-calculator.js
var totalElixir = 0;
var elixirCost = {
  "barbarian" : 80,
  "archer"  : 160,
  "goblin" : 80,
  "giant" : 2000,
  "wb" : 2500,
  "balloon" : 3000,
  "wizard" : 2500,
  "healer" : 6000,
  "lightning" : 20000,
  "healing" : 18000,
  "rage" : 25000
}
var darkElixirCost = {
  "minion" : 6
}
var level = [0,1,2,3,4,5,6];

function addTroops (t) {
  totalElixir += t;
}

function removeTroops(t) {
  totalElixir -= t;
}

var elixirSpent = 0;
var elixirSpentDisplay = document.getElementById("elixirSpent");
var elixirGained = document.getElementById("elixir-gained");
var elixirGainDisplay = document.getElementById("elixir-gained-display");
var totalElixirDisplay = document.getElementById("totalElixir");

function updateTotal() {
  var elixirGained = Number(document.getElementById("elixir-gained").value);
  var barbarians = Number(document.getElementById("barbarians").value);
  var archers = Number(document.getElementById("archers").value);
  var goblins = Number(document.getElementById("goblins").value);
  var giants = Number(document.getElementById("giants").value);
  var wbs = Number(document.getElementById("wbs").value);
  var balloons = Number(document.getElementById("balloons").value);
  var wizards = Number(document.getElementById("wizards").value);
  var healers = Number(document.getElementById("healers").value);
  var lightning = Number(document.getElementById("lightning").value);
  var healing = Number(document.getElementById("healing").value);
  var rage = Number(document.getElementById("rage").value);

  elixirSpent = barbarians * elixirCost.barbarian;
  elixirSpent += archers * elixirCost.archer;
  elixirSpent += goblins * elixirCost.goblin;
  elixirSpent += giants * elixirCost.giant;
  elixirSpent += wbs * elixirCost.wb;
  elixirSpent += balloons * elixirCost.balloon;
  elixirSpent += wizards * elixirCost.wizard;
  elixirSpent += healers * elixirCost.healer;
  elixirSpent += lightning * elixirCost.lightning;
  elixirSpent += healing * elixirCost.healing;
  elixirSpent += rage * elixirCost.rage;

  
  var totalElixir = elixirGained - elixirSpent;
  
  console.log(elixirGained);
  
  console.log(elixirSpent);
  console.log("total elixir = " + elixirSpent);
  elixirGainDisplay.innerHTML = "Elixir Gained: " + elixirGained;
  elixirSpentDisplay.innerHTML = "Elixir Spent: " + elixirSpent;
  totalElixirDisplay.innerHTML = "Total Elixir: " + totalElixir;
}

