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
        this.status = "Egg";
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        //Maybe add bladder + sickness + money gain
    };
    
    eatUp () {
        this.hunger -= 1;
    };
    getHungry () {
        this.hunger += 1;
    };
    sleepPls () {
        this.sleepiness = 0;
        //add something to increment the decrease once time cycle is created
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

//Dom elements
let namer = document.createElement("h2");
    namer.id = "name";
    namer.textContent = "Name";
    document.body.appendChild(namer);


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
    ageNum.textContent = ("Age: 0");
    attributes.appendChild(ageNum);

// Update Values

const updateValues = () => {
    hungerNum.textContent = ("Hunger: " + tama1.hunger);
};


//Test Tamagotchi + Name input

console.log("connected?");
// let tama1 = new Tamagotchi("tama1");
// console.log (tama1)

//add button for start game pop up prompt
const startGame = () => {
    let nameThis = prompt("What's my name?");
    tama1 = new Tamagotchi(nameThis);
    namer.textContent = nameThis;
    timeElapsed();
};


//Display
// const updateValues = () => {
//     //Hunger
//     let textHunger = ("Hunger: " + tama1.hunger);
//     hungerNum.textContent = textHunger;
// };

//setTimeOut or setInterval or maybe just for loop?

let time = 0;

const timeElapsed = () => {
    setInterval(() =>{
        time ++
        console.log(time);
        console.log(tama1);
        timePassing();
    }, 500);
};

const timePassing = () => {
    //Increase values based on time
    if (time % 10 === 0) {
        tama1.getBored();
        tama1.getHungry();
        updateValues();
    }
    if (time % 20 === 0) {
        tama1.getSleepy();
    };

    //Stages of growth
    if (time === 20) {
        tama1.status = "Child";
    }
    if (time === 30) {
        tama1.status = "Teenager";
    }
    if (time === 60) {
        tama1.status = "Adult";
    };
    if (time === 90) {
        tama1.status = "Died of old age";
        alert("Your pet died of old age, but left an egg!");
        startGame();
        //create Death + reset game function
    };
    
};



// setInterval only works passes one function, so multiple set interval functions are needed




