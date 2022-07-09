/* Pseudocode Brainstorm 
Create tamagotchi class
    What does a tamagotchi require?
        Name
        Hunger
        Sleepiness
        Boredom
        Age
    What functions does it need?
        Eat
        Sleep
        Play
        AgeUp

Game Passive Functions
    Create timer that game runs on
        after x sec
            After y min increase age by one
            increase hunger, boredom, sleepiness
        After age reaches z grow pet to next stage
            Stages
                Egg
                Baby
                Child
                Teenager
                Adult
        If any value reaches a certain value = Game Over
            hunger = 10
                Pop up dialogue "died of starvation"
            sleepiness = 10
                - "died of sleep deprivation"
            boredom = 10
                - "$name got bored and left home to pursue its dreams never to be seen again"
        Optional: After x sec/min create new tamagotchi and reset game

Game Player Input
    Start w/ giving pet a name
        Pop up to input name
        add name to create new Tamagotchi through class
    Create button for eating
        when clicked decrease hunger by 1
    Create button for sleeping
        when clicked decrease sleepiness to 0
        Turn off lights
            Optional: increase based on how much time has passed in sleep mode
    Create button for play
        when clicked decrease boredom by 1
*/

//Create Tamagotchi Class

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.age = "Egg";
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.sprite = "img/Snail egg.gif";
    };
    
    eatUp () {
        this.hunger -= 1;

    };
    getHungry () {
        this.hunger += 1;
    };
    sleepPls () {
        this.sleepiness = 0;
    };
    getSleepy () {
        this.sleepiness += 1;
    };
    playBall () {
        this.boredom -= 1;
    };
    getBored () {
        this.boredom += 1;
    };
    // Add clean, buy meds, make money??
};


//Test Tamagotchi + Name input

console.log("connected?");
// let tama1 = new Tamagotchi("tama1");
// console.log (tama1)

//Start Game
const startGame = () => {
    let nameThis = prompt("What's my name?");
    tama1 = new Tamagotchi(nameThis);
    namer.textContent = nameThis;
    timeElapsed();
};

// Update Values

const updateValues = () => {
    hungerNum.textContent = ("Hunger: " + tama1.hunger);
    sleepinessNum.textContent = ("Sleepiness: " + tama1.sleepiness);
    boredomNum.textContent = ("Boredom: " + tama1.boredom);
    ageNum.textContent = ("Age: " + tama1.age);
};

//Timer
let time = 0;

const timeElapsed = () => {
    setInterval(() =>{
        time ++
        console.log(time);
        console.log(tama1);
        timePassing();
    }, 1000);
};

const timePassing = () => {
    //Increase values based on time
    if (time % 2 === 0) {
        tama1.getBored();
        tama1.getHungry();
        updateValues();
    }
    if (time % 3 === 0) {
        tama1.getSleepy();
        updateValues();
    };

    //Stages of growth
    if (time === 20) {
        tama1.age = "Child";
        tama1.sprite = "img/Child snail.gif";
        updateValues();
        sprite.setAttribute("src", "img/Child snail.gif");
    }
    if (time === 30) {
        tama1.age = "Teenager";
        tama1.sprite = "img/Teen snail.gif";
        updateValues();
        sprite.setAttribute("src", "img/Teen snail.gif");
    }
    if (time === 60) {
        tama1.age = "Adult";
        tama1.sprite = "img/Adult Snail.gif";
        updateValues();
        sprite.setAttribute("src", "img/Adult Snail.gif");
    };
    if (time === 120) {
        tama1.age = "Died of old age";
        tama1.sprite = "img/Snail egg.gif";
        updateValues();
        alert("Your pet died of old age, but left an egg!");
        sprite.setAttribute("src", "img/Snail egg.gif");
        startGame();
        //create Death + reset game function
    };
    
};



//Dom elements
let namer = document.createElement("h2");
    namer.id = "name";
    namer.textContent = "Name";
    document.body.appendChild(namer);

let startButt = document.createElement("button");
    startButt.id = "Start";
    startButt.textContent = "Start";
    startButt.className = "Buttons";
    startButt.addEventListener("click", startGame());

//Attribute Display
let attributes = document.createElement("section");
    attributes.id = "attributes";
    document.body.appendChild(attributes);

let hungerNum = document.createElement("p");
    hungerNum.id = "hunger";
    hungerNum.className = "attribute";
    hungerNum.textContent = ("Hunger: 0");
    attributes.appendChild(hungerNum);

let sleepinessNum = document.createElement("p");
    sleepinessNum.id = "sleepiness";
    sleepinessNum.className = "attribute";
    sleepinessNum.textContent = ("Sleepiness: 0");
    attributes.appendChild(sleepinessNum);

let boredomNum = document.createElement("p");
    boredomNum.id = "boredom";
    boredomNum.className = "attribute";
    boredomNum.textContent = ("Boredom: 0");
    attributes.appendChild(boredomNum);

let ageNum = document.createElement("p");
    ageNum.id = "age";
    ageNum.className = "attribute";
    ageNum.textContent = ("Age: Egg");
    attributes.appendChild(ageNum);

// Sprite
let sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.setAttribute("src", "img/Snail egg.gif");
    document.body.appendChild(sprite);

//Buttons
let buttons = document.createElement("section");
    buttons.id = "Buttons";
        // let eatButt = document.createElement("button");
        //     eatButt.id = "Eat";
        //     eatButt.className = "Buttons";
        //     buttons.appendChild(hungerButt);
        // let hungerButt = document.createElement("button");
        //     hungerButt.id = "HungerButt";
        //     hungerButt.className = "Buttons";
        //     buttons.appendChild(hungerButt);
        // let hungerButt = document.createElement("button");
        //     hungerButt.id = "HungerButt";
        //     hungerButt.className = "Buttons";
        //     buttons.appendChild(hungerButt);




