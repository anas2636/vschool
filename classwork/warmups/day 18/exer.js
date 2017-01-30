function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Enemy = function(names) {
    var names = names;
    this.enemyName = "";
    this.hitpoints = 0;
    this.defense = 0;
    this.generate = function() {
    var index = getRandom(0, names.length -1);
    this.enemyName = names[index];
    if (this.enemyName ==="Ancient Dragon") {
        this.hitpoints = getRandom(80,100);
        this.defense = this.hitpoins * 3;
    } else if(this.enemyName ==="Prowler") {
        this.hitpoints = getRandom(50,79);
        this.defense = this.hitpoins * 3;
    } else  { 
        this.hitpoints = getRandom(20,49);
        this.defense = this.hitpoins * 3;
          }
       }
    }
var possibleName = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
 for(var i = 0; i < 100; i++) {
     var tembEnemy = new Enemy(possibleName);
     tembEnemy.generate();
     console.log(tembEnemy.enemyName);
     console.log(tembEnemy.hitpoints);
     console.log(tembEnemy.difense);
 }