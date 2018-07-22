// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed = speed;
    this.x = 1;
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //while (this.x < 506) {
    this.x = this.x + this.speed * dt
    //};
    //this.x = 1;
    if (((player.x - this.x) < 10) && ((player.y - this.y )< 10)) {
        player.x = 300;
        player.y = 400;
        this.x = 1;

    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.x = 300;
    this.y = 400;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function(dt) {
    

};


// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if(key === "up"){
        if(this.y > -10) {
          this.y -= 50;  
        }
        if (this.y < 0) {
            alert ('Yeeeeey! You made it!');
            this.y = 400;
            this.x = 300;
        }
    }
    if(key === "down"){
        if(this.y < 400) {
          this.y += 50;  
        }
    }
    if(key === "right"){
        if(this.x < 400) {
          this.x += 50;  
        }

    }
    if(key === "left") {
        if(this.x > 20) {
          this.x -= 50;  
        }
    }
 };



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
const allEnemies = [new Enemy(130, 100), new Enemy(50, 180), new Enemy(230, 100), new Enemy(150, 140)];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
