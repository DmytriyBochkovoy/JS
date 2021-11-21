function getGameTime(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
}

const GAME_STEP_DELAY = 1;

const objects = [];

const BLOCK_ARRAY = [];

function Ball(options) {
    this.id = Math.trunc(1000 * Math.random());
    this.color = options.color;
    this.size = options.size;
    this.height = this.size*8;
    this.width = this.size*8;

    this.x = 100;
    this.y = 300;

    this.directionX = 1;
    this.directionY = 1;

    this._createView = function () {
        let result = document.createElement('div');
        result.style.cssText = `
        display: inline-block;
        position: absolute;
        background: ${this.color};
        border-radius: 50%;
        height: ${this.height}px;
        width: ${this.width}px;
        margin: 0;`;

        document.body.append(result);
        return result;
    }

    this._div = this._createView();
    

    this.live = function () {
        this.renderState();
        this.renderView();
    }

    this.renderState = function () {
        this.x = this.x + this.directionX;
        this.y = this.y + this.directionY;
    }

    this.renderView = function () {
        this._div.style.left = `${this.x}px`;
        this._div.style.top = `${this.y}px`;
    }
}

function Wall (options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;

    this._createView = function () {
        let result = document.createElement('div');
        result.style.cssText = `
        display: inline-block;
        position: absolute;
        left: ${this.x}px;
        top: ${this.y}px;
        width: ${this.width}px;
        height: ${this.height}px;
        background: green;
        `;

        document.body.append(result);
        return result;
    }

    this._div = this._createView();

    this.live = function () {
        this.renderState();
        this.renderView();
    }

    this.renderState = function () {}

    this.renderView = function () {}
}

function Racket (options) {
    this.x = options.x || 10;
    this.y = options.y || 10;
    this.width = Math.min(options.width, 100);
    this.width = Math.max(this.width, 10);
    this.height = Math.min(options.height, 100);
    this.height = Math.max(this.height, 10);

    this._createView = function () {
        let result = document.createElement('div');
        result.style.cssText = `
        display: inline-block;
        position: absolute;
        left: ${this.x}px;
        top: ${this.y}px;
        width: ${this.width}px;
        height: ${this.height}px;
        background: red;
        `;

        document.body.append(result);
        return result;
    }

    this._div = this._createView();

    this.live = function () {
        this.renderState();
        this.renderView();
    }

    this.renderState = function () {}

    this.renderView = function () {
        this._div.style.left = `${this.x}px`;
        this._div.style.top = `${this.y}px`;
    }

    this.onMouseMove = function(event) {
        this.x = event.x;
    }
}

function Block (options) {
    this.width = options.width;
    this.height = options.height;
    this.count = options.count;

    this.countBlock = (() => {
        for (let i = 0; i <= this.count; i++) {
            BLOCK_ARRAY.push(document.createElement('div'));
            BLOCK_ARRAY[i].style.cssText = `
                display: inline-block;
                width: ${this.width}px;
                height: ${this.height}px;
                background: red;
                margin: 10px;
            `
            document.body.prepend(BLOCK_ARRAY[i]);
        }
        return BLOCK_ARRAY
    })
}

objects.push(new Ball({
    color: 'skyblue',
    size: 5,
})
);

objects.push(new Wall({
    x: 0,
    y: 0,
    width: 10,
    height: document.documentElement.clientHeight,
})
);


objects.push(new Wall({
    x: document.documentElement.clientWidth-10,
    y: 0,
    width: 10,
    height: document.documentElement.clientHeight,
})
);

objects.push(new Wall({
    x: 0,
    y: 0,
    width: document.documentElement.clientWidth,
    height: 10,
})
);

let r = new Racket({
    y: document.documentElement.clientHeight - 20,
    width: 100,
    height: 20,
});

objects.push(r);

document.addEventListener('mousemove', r.onMouseMove.bind(r));

let blocks = new Block({
    width: 50,
    height: 25,
    count: 50,
});

blocks.countBlock();

objects.push(blocks);

// for (let i = 0; i <= BLOCK_ARRAY.length-1; i++) {
//     let index = BLOCK_ARRAY[i].getBoundingClientRect();
//     console.log(index.top);
    
// }


function checkCollision (objectA, objectB) {
    if (objectA !== objectB) {
        let ball = null;
        let wall = null;
        let racket = null;
        let block = null; 

        if (objectA instanceof Ball) {
            ball = objectA;
        } else if (objectA instanceof Wall) {
            wall = objectA;
        }

        if (objectB instanceof Ball) {
            ball = objectB;
        } else if (objectB instanceof Wall) {
            wall = objectB;
        }

        if (objectA instanceof Racket) {
            racket = objectA;
        } else if (objectB instanceof Racket) {
            racket = objectB;
        }

        if (objectA instanceof Block) {
            block = objectA;
        } else if (objectB instanceof Block) {
            block = objectB;
        }

        if (ball && wall) {
            if ((ball.x === wall.x || ball.x + ball.width === wall.x) && (ball.y > wall.y && ball.y < wall.height)) {
                ball.directionX = ball.directionX * -1;
            }

            if (ball.y === wall.y) {
                ball.directionY = ball.directionY * -1;
            }
        }
    
        if (ball && racket) {
            if (ball.x > racket.x && ball.x < racket.x + racket.width && ball.y + ball.height === racket.y) {
                ball.directionY = ball.directionY * -1;
            }
        }

        if (ball && block) {
            for (let i = 0; i <= BLOCK_ARRAY.length-1; i++) {
                let index = BLOCK_ARRAY[i].getBoundingClientRect();
                if (ball.y == index.bottom) {
                    ball.directionY = ball.directionY * -1;
                    BLOCK_ARRAY[i].remove();
                }
            }
        }
        
    }
}

function isGameOver (ball, racket) {
    return ball.y > racket.y;
}

function doGameStep () {
    let gameOver = false;

    let currentGameTime = getGameTime(new Date());

    for (let i = 0; i < objects.length-1; i++) {
        objects[i].live();
    }

    for (let i = 0; i < objects.length; i++) {
        let objectA = objects[i];
        for (let j = i + 1; j < objects.length; j++) {
            let objectB = objects[j];
            checkCollision(objectA, objectB);
        }
    }

    let ball = objects.find(item => item instanceof Ball);
    let racket = objects.find(item => item instanceof Racket);
    gameOver = isGameOver(ball, racket);

    currentGameStep++;
    if (currentGameStep < 1000000 && !gameOver) {
        setTimeout(doGameStep, GAME_STEP_DELAY);
    } else {
        alert('Game over');
    }
} 

let currentGameStep = 0;
setTimeout(doGameStep, GAME_STEP_DELAY);