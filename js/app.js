// Enemies our player must avoid

var Enemy = function(y, speed) {
	'use strict';
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
	'use strict';
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. 
    this.x = this.x + this.speed * dt
    // when the coordinates for the enemy and the player get enough close to look 
    // like a collision, all the coordinates for location are reassigned with the starting values
    if (((player.x - this.x) < 40) && ((player.x - this.x) > -40) && ((player.y - this.y ) < 40) && ((player.y - this.y ) > -40)) {
        player.x = 300;
        player.y = 400;
    }       
    if (this.x > 500) {
        this.x = 1;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
	'use strict';
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
	'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
	'use strict';
    if(key === "up"){
        // makes sure that incrementing the position will not get the player outside the canvas
        if(this.y > -10) {
          this.y -= 50;  
        }
        // checking if the player reached the water
        if (this.y < 0) {
            alert ('Yeeeeey! You made it!');
            this.y = 400;
            this.x = 300;
        }
    }
    // make sure that incrementing the position will not get the player outside the canvas
    if(key === "down"){
        if(this.y < 400) {
          this.y += 50;  
        }
    }
    // make sure that incrementing the position will not get the player outside the canvas
    if(key === "right"){
        if(this.x < 400) {
          this.x += 50;  
        }
    }
    // make sure that incrementing the position will not get the player outside the canvas
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
const allEnemies = [new Enemy(130, 100), new Enemy(50, 180), new Enemy(230, 80)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	'use strict';
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
