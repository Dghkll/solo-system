// Player Data

let player = {
    xp: Number(localStorage.getItem("xp")) || 0,
    gold: Number(localStorage.getItem("gold")) || 0,

    strength: Number(localStorage.getItem("strength")) || 5,
    agility: Number(localStorage.getItem("agility")) || 5,
    endurance: Number(localStorage.getItem("endurance")) || 5,
    intelligence: Number(localStorage.getItem("intelligence")) || 5,
    focus: Number(localStorage.getItem("focus")) || 5,
    luck: Number(localStorage.getItem("luck")) || 5
};

function savePlayer(){

    for(let key in player){
        localStorage.setItem(key,player[key]);
    }

}

function completeQuest(xp,gold,stats){

    player.xp += xp;
    player.gold += gold;

    for(let stat in stats){
        player[stat] += stats[stat];
    }

    savePlayer();

    alert("🎉 QUEST COMPLETED!");
}

