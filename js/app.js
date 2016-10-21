// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -101;
    this.startY = [54, 226, 312, 398];
    this.y = this.startY[Math.floor(Math.random() * 4)];
    this.speedVariables = [100, 150, 200, 250, 300, 350, 400, 450, 500];
    this.movement = this.speedVariables[Math.floor(Math.random() * 9)];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.y == 54 && this.x == -101){
        this.movement = this.speedVariables[Math.floor(Math.random() * 9) + 5];
    }
    this.x += this.movement * dt;
    if(this.x >= 808){
        this.x = -100;
        this.y = this.startY[Math.floor(Math.random() * 4)];
        this.movement = this.speedVariables[Math.floor(Math.random() * 5)];
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 404;
    this.y = 570;
    this.player1Score = 0;
};

Player.prototype.update = function(dt) {
    if(this.y == -32){
        this.player1Score += 1;
        document.getElementById("player1").innerHTML = this.player1Score;
        this.resetPosition();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.resetPosition = function() {
    this.x = 404;
    this.y = 570;
};

Player.prototype.handleInput = function(key) {
    if(key == 'left'){
        if(this.x != 0){
            this.x += -101;
        }
    }
    if(key == 'up'){
        if(this.y != -32){
            this.y += -86;
        }
    }
    if(key == 'right'){
        if(this.x != 606){
            this.x += 101;
        }
    }
    if(key == 'down'){
        if(this.y != 570){
            this.y += 86;
        }
    }
    if(key == 'one'){
        this.sprite = 'images/char-boy.png';
    }
    if(key == 'two'){
        this.sprite = 'images/char-cat-girl.png';
    }
};

var SecondPlayer = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 570;
    this.player2Score = 0;
};

SecondPlayer.prototype.update = function(dt) {
    if(this.y == -32){
        this.player2Score += 1;
        document.getElementById("player2").innerHTML = this.player2Score;
        this.resetPosition();
    }
};

SecondPlayer.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

SecondPlayer.prototype.resetPosition = function() {
    this.x = 202;
    this.y = 570;
};

SecondPlayer.prototype.handleInput = function(key) {
    if(key == 'a'){
        if(this.x != 0){
            this.x += -101;
        }
    }
    if(key == 'w'){
        if(this.y != -32){
            this.y += -86;
        }
    }
    if(key == 'd'){
        if(this.x != 606){
            this.x += 101;
        }
    }
    if(key == 's'){
        if(this.y != 570){
            this.y += 86;
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player;
var secondPlayer = new SecondPlayer;

allEnemies[0] = new Enemy;
allEnemies[1] = new Enemy;
allEnemies[2] = new Enemy;
allEnemies[3] = new Enemy;
allEnemies[4] = new Enemy;
allEnemies[5] = new Enemy;
allEnemies[6] = new Enemy;
allEnemies[7] = new Enemy;
allEnemies[8] = new Enemy;



// This listens for key presses a   nd sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        87: 'w',
        65: 'a',
        83: 's',
        68: 'd',
        49: 'one',
        50: 'two'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    secondPlayer.handleInput(allowedKeys[e.keyCode]);
});
