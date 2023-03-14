import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "/utils.js";

// constructor function

// function Character(data) {
//   Object.assign(this, data);

//   this.getHealthBarHtml = function () {
//     const percent = getPercentage(this.health, this.maxHealth);
//     return `<div class="health-bar-outer">
//         <div class="health-bar-inner ${percent < 26 ? "danger" : ""}"
//             style="width: ${percent}%;">
//         </div>
//         </div>`;
//   };

//   this.maxHealth = this.health; // svårt...kolla igen...koppplat till ->

//   this.diceArray = getDicePlaceholderHtml(this.diceCount);

//   this.setDiceHtml = function (diceCount) {
//     this.currentDiceScore = getDiceRollArray(this.diceCount);
//     this.diceArray = this.currentDiceScore
//       .map((num) => `<div class="dice">${num}</div>`)
//       .join("");
//   };

//   this.takeDamage = function (attackScoreArray) {
//     const totalAttackScore = attackScoreArray.reduce(
//       (total, num) => total + num
//     );

//     this.health -= totalAttackScore;

//     if (this.health <= 0) {
//       this.health = 0;
//       this.dead = true;
//     }
//   };

//   this.getCharacterHtml = function () {
//     const { elementId, name, avatar, health, diceCount, diceArray } = this;
//     const healthBar = this.getHealthBarHtml();

//     return `
//             <div class="character-card">
//                 <h4 class="name">${name}</h4>
//                 <img class="avatar" src="${avatar}" />
//                 <p class="health">health: <b> ${health} </b></p>
//                 ${healthBar}
//                 <div class="dice-container">${diceArray}</div>
//             </div>`;
//   };
// }

// class

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.maxHealth = this.health; // svårt...kolla igen...koppplat till ->
    this.diceArray = getDicePlaceholderHtml(this.diceCount);
  }

  getHealthBarHtml() {
    const percent = getPercentage(this.health, this.maxHealth);
    return `<div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                style="width: ${percent}%;">
            </div>
            </div>`;
  }

  setDiceHtml(diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  }

  takeDamage(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, num) => total + num
    );

    this.health -= totalAttackScore;

    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  }

  getCharacterHtml() {
    const { elementId, name, avatar, health, diceCount, diceArray } = this;
    const healthBar = this.getHealthBarHtml();

    return `
                <div class="character-card">
                    <h4 class="name">${name}</h4>
                    <div class="avatar-wrapper">
                    <img class="avatar" src="${avatar}" />
                    </div>
                    <p class="health">health: <b>${health}</b> </p>
                    ${healthBar}
                    <div class="dice-container">${diceArray}</div>
                </div>`;
  }
}

export default Character;
