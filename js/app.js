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
    returnOriSprite () {
        action.setAttribute("src", "https://thumbs.gfycat.com/SophisticatedWelltodoBluetonguelizard.webp");
    }
    eatUp () {
        this.hunger = 0;
        action.setAttribute("src", "https://thumbs.gfycat.com/LawfulSereneFlamingo.webp");
        setTimeout(this.returnOriSprite, 1990);
    };
    getHungry () {
        this.hunger += 1;
    };
    sleepPls () {
        this.sleepiness = 0;
        action.setAttribute("src", "https://thumbs.gfycat.com/MealyBowedBuck.webp");
        setTimeout(this.returnOriSprite, 1990);
    };
    getSleepy () {
        this.sleepiness += 1;
    };
    playBall () {
        this.boredom = 0;
        action.setAttribute("src", "https://thumbs.gfycat.com/PlumpUltimateClingfish.webp");
        setTimeout(this.returnOriSprite, 1990);
    };
    getBored () {
        this.boredom += 1;
    };

    //addEventListener needs this step to invoke object methods
    eat = this.eatUp.bind(this);
    sleep = this.sleepPls.bind(this);
    play = this.playBall.bind(this)
};


//Test Tamagotchi + Name input

console.log("connected?");
// let tama1 = new Tamagotchi("tama1");
// console.log (tama1)

//Start Game

tama1 = new Tamagotchi("Name");

const startGame = () => {
    let nameThis = prompt("What's my name?");
    tama1.name = nameThis;
    namer.textContent = nameThis;
    startButt.textContent = "Reset";
    timeElapsed();
    startStatus = resetGame;
};

let startStatus = startGame;
const changeStartButt = () => {
    startStatus();
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
let timer = null;

const timeElapsed = () => {
        timer = setInterval(() =>{
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
        if(tama1.hunger === 10) {
            alert("Your snail died of starvation!");
            resetGame();
        };
        if(tama1.boredom === 15) {
            alert("Your snail got restless and decided to pursue its dreams without you!");
            resetGame();
        }
    if (time % 3 === 0) {
        tama1.getSleepy();
        updateValues();
    };
        if(tama1.sleepiness === 10) {
            alert("Your snail went insane from lack of sleep!");
            resetGame();
        }

    //Stages of growth
    if (time === 20) {
        tama1.age = "Child";
        tama1.sprite = "img/Child snail.gif";
        updateValues();
        sprite.setAttribute("src", "https://thumbs.gfycat.com/RaggedBlankBadger.webp");
    }
    if (time === 30) {
        tama1.age = "Teenager";
        tama1.sprite = "img/Teen snail.gif";
        updateValues();
        sprite.setAttribute("src", "https://thumbs.gfycat.com/QuestionableWideeyedHoatzin.webp");
    }
    if (time === 60) {
        tama1.age = "Adult";
        tama1.sprite = "img/Adult Snail.gif";
        updateValues();
        sprite.setAttribute("src", "https://thumbs.gfycat.com/ConstantDefenselessDwarfmongoose.webp");
    };
    if (time === 120) {
        tama1.age = "Died of old age";
        tama1.sprite = "img/Snail egg.gif";
        updateValues();
        alert("Your pet died of old age, but left an egg!");
        resetGame();
        //create Death + reset game function
    };
    
};

//Reset Game
const resetGame = () => {
    //Reset Start Button
    startStatus = startGame;
    startButt.textContent = "Start";
    //Reset Time
    clearInterval(timer);
    time = 0;
    //Reset Object
    namer.textContent = "";
    tama1.age = "Egg";
    tama1.hunger = 0;
    tama1.sleepiness = 0;
    tama1.boredom = 0;
    tama1.sprite = "img/Snail egg.gif";
    sprite.setAttribute("src", "https://thumbs.gfycat.com/PowerlessOpulentDutchshepherddog.webp");
    updateValues();
};



//Dom elements
let namer = document.createElement("h2");
    namer.id = "name";
    namer.textContent = "";
    document.body.appendChild(namer);

let startButt = document.createElement("button");
    startButt.id = "Start";
    startButt.textContent = "Start";
    startButt.className = "Buttons";
    let switchStart = startButt.addEventListener("click", changeStartButt);
    document.body.appendChild(startButt);

//Attribute Display
let attributes = document.createElement("section");
    attributes.id = "attributes";
    document.body.appendChild(attributes);

let hungerNum = document.createElement("div");
    hungerNum.id = "hunger";
    hungerNum.className = "attribute";
    hungerNum.textContent = ("Hunger: 0");
    attributes.appendChild(hungerNum);

let sleepinessNum = document.createElement("div");
    sleepinessNum.id = "sleepiness";
    sleepinessNum.className = "attribute";
    sleepinessNum.textContent = ("Sleepiness: 0");
    attributes.appendChild(sleepinessNum);

let boredomNum = document.createElement("div");
    boredomNum.id = "boredom";
    boredomNum.className = "attribute";
    boredomNum.textContent = ("Boredom: 0");
    attributes.appendChild(boredomNum);

let ageNum = document.createElement("div");
    ageNum.id = "age";
    ageNum.className = "attribute";
    ageNum.textContent = ("Age: Egg");
    attributes.appendChild(ageNum);

// Sprite
let images = document.createElement("div");
    images.id = "images";
    document.body.appendChild(images);
let sprite = document.createElement("img");
    sprite.id = "sprite";
    sprite.className = "image";
    sprite.setAttribute("src", "https://thumbs.gfycat.com/PowerlessOpulentDutchshepherddog.webp");
    images.appendChild(sprite);
let action = document.createElement("img");
    action.id = "action";
    action.className = "image";
    action.setAttribute("src", "https://thumbs.gfycat.com/SophisticatedWelltodoBluetonguelizard.webp");
    images.appendChild(action);

//Buttons
let buttons = document.createElement("section");
    buttons.id = "Buttons";
        let eatButt = document.createElement("button");
            eatButt.id = "Eat";
            eatButt.className = "Buttons";
            eatButt.textContent = "Eat";
            eatButt.addEventListener("click", tama1.eat);
            buttons.appendChild(eatButt);
        let sleepButt = document.createElement("button");
            sleepButt.id = "sleepButt";
            sleepButt.className = "Buttons";
            sleepButt.textContent = "Sleep";
            sleepButt.addEventListener("click", tama1.sleep);
            buttons.appendChild(sleepButt);
        let playButt = document.createElement("button");
            playButt.id = "playButt";
            playButt.className = "Buttons";
            playButt.textContent = "Play";
            playButt.addEventListener("click", tama1.play);
            buttons.appendChild(playButt);
    document.body.appendChild(buttons);



