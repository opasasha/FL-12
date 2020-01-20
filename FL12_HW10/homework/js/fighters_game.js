function fighter(fighter) {
    let fighterWins = 0;
    let fighterLoss = 0;
    this.getName = function () {
        return fighter.name;
    };
    this.getDamage = function () {
        return fighter.damage;
    };
    this.getStrength = function () {
        return fighter.strength;
    };
    this.getAgility = function () {
        return fighter.agility;
    };
    this.getHealth = function () {
        return fighter.health;
    };
    this.dealDamage = function (damage) {
        fighter.health -= damage;
    };
    this.heal = function (health) {
        fighter.health += health;
    };
    this.addWin = function () {
        fighterWins++;
    };
    this.addLoss = function () {
        fighterLoss++
    };
    this.attack = function (defender) {
        let random = Math.floor(Math.random() * 100);
        let success = Math.floor(Math.random() * Math.floor(this.getStrength() + this.getAgility()));
        if(success > random){
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            defender.dealDamage(this.getDamage());
        } else {
            console.log(`${this.getName()} attack missed`)
        }
        this.logCombatHistory = function() {
            return `Name: ${this.getName()}, Wins: ${fighterWins}, Losses: ${fighterLoss}`;
        }
    }
}
function battle(attacker, defender) {
    function attack() {
        attacker.attack(defender);
        defender.attack(attacker);
        if (attacker.getHealth() <= 0 && defender.getHealth() >= 0) {
            attacker.addLoss();
            defender.addWin();
            console.log(`${defender.getName()} has won`)
        } else if (defender.getHealth() <= 0 && attacker.getHealth() >= 0) {
            defender.addLoss();
            attacker.addWin();
            console.log(`${defender.getName()} has won`)
        }
    }
    while (attacker.getHealth() > 0 || defender.getHealth() > 0){
        if (attacker.getHealth() <= 0){
            console.log(`${attacker.getName()} is dead and cant fight`);
            break
        } else if (defender.getHealth() <= 0){
            console.log(`${defender.getName()} is dead and cant fight`);
            break
    } attack();
        if(!attacker.getHealth() > 0 || !defender.getHealth() > 0){
        break;
        }
    }
}
const myFighter = fighter({name: 'Maximus', damage: 20, strength:20, agility: 15, health: 100 });
const myFighter2 = fighter({name: 'Commodus', damage: 25, strength:25, agility: 20, health: 90 });
battle(myFighter, myFighter2);

