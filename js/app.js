/* Pseudocode Brainstorm 
Create tamagotchi class
    What does a tamagotchi require?
        Name
        Hunger
        Energy
        Boredom
        Age
    What functions does it need?
        Eat
        Sleep
        Play
        AgeUp

Game Passive Function
    Create timer that game runs on
        after x sec
            After y min increase age by one
            decrease hunger, energy
            increase boredom
        After age reaches z grow pet to next stage
            Stages
                Egg
                Baby
                Child
                Teenager
                Adult
        If any value reaches a certain value = Game Over
            hunger = 0
                Pop up dialogue "died of starvation"
            energy = 0
                - "died of sleep deprivation"
            boredom = 10
                - "$name got bored and left home to pursue its dreams never to be seen again"
        Optional: After x sec/min create new tamagotchi and reset game (Baby)

Game Player Input
    Start w/ giving pet a name
        Pop up to input name
        add name to create new Tamagotchi through class
    Create button for eating
        when clicked increase hunger by 1
    Create button for sleeping
        when clicked increase sleep to full
        Turn off lights
            Optional: increase based on how much time has passed in sleep mode
    Create button for play
        when clicked decrease boredom by 1
*/

