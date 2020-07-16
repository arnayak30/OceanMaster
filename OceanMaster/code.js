var question = [];
var answers = [];
var questionsUsed = [];
var userAnswer = 0;
var a = false;
var random = 0;
var correctAnswer = 0;
var score = 0;
var len = 0;

//q represents the question
//the option parameters represent the answer choices for the question
//the index parameter indicates the position of the answer in the subarray
//Used to add a new question to the game.
function pushData(q, option1, option2, option3, option4, index){
    question.push(q);
    var newQuestion = [];
    newQuestion.push(option1);
    newQuestion.push(option2);
    newQuestion.push(option3);
    newQuestion.push(option4);
    newQuestion.push(index);
    answers.push(newQuestion);
    //alert(question);
}

//Displays the question along with all of its options on the screen.
function setQuestion(){
    document.getElementById("pic").style.visibility = "hidden";
    document.getElementById("pic").src = "";
    document.getElementById("Q").style.color = "black";
    document.getElementById("c1").disabled = false;
    document.getElementById("c2").disabled = false;
    document.getElementById("c3").disabled = false;
    document.getElementById("c4").disabled = false;
    document.getElementById("nextQ").disabled = true;
    document.getElementById("c1").style.backgroundColor = "#0563bb";
    document.getElementById("c2").style.backgroundColor = "#0563bb";
    document.getElementById("c3").style.backgroundColor = "#0563bb";
    document.getElementById("c4").style.backgroundColor = "#0563bb";
    document.getElementById("qNum").style.visibility = "visible";
    len = questionsUsed.length+1;
    document.getElementById("qNum").innerHTML = "Question: " + len + "/15";
    if(questionsUsed.length > 0 && question.length > 0 && questionsUsed.length === question.length){
        gameOver();
    }
    else{
        if(questionsUsed.length == 0){
            random = Math.floor(Math.random() * question.length);
        }
        while(a == false && questionsUsed.length > 0){
            //alert("here");
            random = Math.floor(Math.random() * question.length);
            //alert(random);
            a = checkUsage(random);
            //alert(a);
        }
        //alert("here");
        questionsUsed.push(random);
        //alert(question[random]);
        document.getElementById("Q").innerHTML = question[random];
        document.getElementById("c1").innerHTML = answers[random][0];
        document.getElementById("c2").innerHTML = answers[random][1];
        document.getElementById("c3").innerHTML = answers[random][2];
        document.getElementById("c4").innerHTML = answers[random][3];
        correctAnswer = answers[random][4];
        a = false;
        // alert("QuestionsUsed: " + questionsUsed.length());
        // alert("question: " + question.length());
    }
}

//When all the questions have been used, this function is called to end the game and display the score.
function gameOver(){
    document.getElementById("c1").style.visibility = "hidden";
    document.getElementById("c2").style.visibility = "hidden";
    document.getElementById("c3").style.visibility = "hidden";
    document.getElementById("c4").style.visibility = "hidden";
    document.getElementById("nextQ").style.visibility = "hidden";
    document.getElementById("pic").style.visibility = "hidden";
    document.getElementById("qNum").style.visibility = "visible";
    document.getElementById("qNum").style.color = "darkblue";
    //document.getElementById("qNum").innerHTML = "Congratulations! You completed OceanMaster Trivia.";
    if(score > 0 && score < 5){
        document.getElementById("qNum").innerHTML = "Congratulations! You completed OceanMaster Trivia.\n\nLooks like you need to learn more about the Ocean. Play Again!"
    }
    else if(score > 4 && score < 11){
        document.getElementById("qNum").innerHTML = "Congratulations! You completed OceanMaster Trivia.\n\nLooks like you know some stuff about the Ocean, but you still have a lot to learn. Play Again!";
    }
    else if(score > 9 && score < 14){
        document.getElementById("qNum").innerHTML = "Congratulations! You completed OceanMaster Trivia.\n\nLooks like you a lot about the Ocean, but you still have a little bit more to learn. Play Again!";
    }
    else if(score > 13 && score < 16){
        document.getElementById("qNum").innerHTML = "Congratulations! You completed OceanMaster Trivia.\n\nYou are now an OceanMaster. Play Again for some New Questions!";
    }
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("start").value = "Game Complete";
    document.getElementById("Q").style.color = "darkblue";
    document.getElementById("Q").innerHTML = "Score: " + score + "/15";
}

//Gets the value of the users selected answer and disables the other options.
function getAnswer(num){
    userAnswer = num;
    if (num==0){
        document.getElementById("c1").style.backgroundColor = "red";
    }
    else if (num==1){
        document.getElementById("c2").style.backgroundColor = "red";
    }
    else if (num==2){
        document.getElementById("c3").style.backgroundColor = "red";
    }
    else if (num==3){
        document.getElementById("c4").style.backgroundColor = "red";
    }
    document.getElementById("c1").disabled = true;
    document.getElementById("c2").disabled = true;
    document.getElementById("c3").disabled = true;
    document.getElementById("c4").disabled = true;
    document.getElementById("nextQ").disabled = false;
    checkAnswer();
    if(len == question.length){
        gameOver();
    }
}

//Checks to see if a question has been used before
function checkUsage(num){
    if(questionsUsed.indexOf(num) == -1){
        return true;
    }
    return false;
}

//Checks to see if the user's answer to the question is correct.
function checkAnswer(){
    document.getElementById("nextQ").disabled = false;
    if(userAnswer == correctAnswer){
        document.getElementById("Q").innerHTML = "Correct!";
        document.getElementById("Q").style.color = "green";
        document.getElementById("pic").style.visibility = "visible";
        document.getElementById("pic").src = "assets/img/right.gif";
        score++;
    }
    else{
        document.getElementById("Q").innerHTML = "Incorrect!";
        document.getElementById("Q").style.color = "red";
        document.getElementById("pic").style.visibility = "visible";
        document.getElementById("pic").src = "assets/img/wrong.gif";
    }
    if(questionsUsed.length == 15){
        gameOver();
    }
}

//Starts the game and Initializes all of the variables.
function startGame(){
    //alert("here");
    userAnswer = 0;
    a = false;
    random = 0;
    correctAnswer = 0;
    score = 0;
    document.getElementById("pic").style.visibility = "hidden";
    //alert("1");
    document.getElementById("pic").src = "";
    //alert("2");
    document.getElementById("start").style.visibility = "hidden";
    //alert("3");
    document.getElementById("Q").style.visibility = "visible";
    //alert("4");
    document.getElementById("c1").style.visibility = "visible";
    //alert("5");
    document.getElementById("c2").style.visibility = "visible";
    //alert("6");
    document.getElementById("c3").style.visibility = "visible";
    //alert("7");
    document.getElementById("c4").style.visibility = "visible";
    //alert("8");
    document.getElementById("nextQ").style.visibility = "visible";
    //alert("9");
    document.getElementById("c1").disabled = false;
    //alert("10");
    document.getElementById("c2").disabled = false;
    //alert("11");
    document.getElementById("c3").disabled = false;
    //alert("12");
    document.getElementById("c4").disabled = false;
    //alert("13");
    document.getElementById("nextQ").disabled = true;
    //alert("14");
    document.getElementById("qNum").style.visibility = "hidden";
    document.getElementById("qNum").style.color = "darkblue";
    document.getElementById("qNum").innerHTML = "";
    question = [];
    answers = [];
    questionsUsed = [];
    pushData("How many Marine Animals die from plastic entanglement alone? (in thousands)", "100","10","50","500", "0");
    pushData("Which country contributes to the most ocean pollution?", "China","America","Indonesia","Thailand", "0");
    pushData("At the end of the century, how much more acidic will our oceans be?", "120%","140%","150%","175%", "2");
    pushData("What animal species is the largest in the ocean?", "Shark Whale","Blue Whale","Colossal Squid","Japanese Spider Crab", "1");
    pushData("How much of the Ocean has been discovered?", "10%","25%","15%","5%", "3");
    pushData("How much gold is currently dispersed throughout the ocean? (in Millions of Tons)", "5","20","10","50", "1");
    pushData("How much pressure would a human face at the bottom of the ocean? (in Tons per Square Inch)", "8","10","5","12", "0");
    pushData("How many shipwrecks currently reside in the ocean? (In Millions)", "1","3","10","15", "1");
    pushData("What percent of ocean life has yet to be discovered?", "91%","85%","76%","98%", "0");
    pushData("How deep is the deepest discovered part in the ocean? (In Thousands of Meters)", "25","10","36","18", "2");
    pushData("How much of the water on Earth is currently fresh drinking water?", "10%","5%","25%","1%", "3");
    pushData("What percent of volcanic eruptions on Earth occur underwater?", "80%","25%","60%","95%", "0");
    pushData("How high can tsunamis reach?", "50 ft","100 ft","500 ft","300 ft", "1");
    pushData("How many times faster does sound travel underwater than in the air?", "2.1 times","5.1 times","4.3 times","2.6 times", "2");
    pushData("How deep was the deepest descent into the ocean by a manned vessel? (in Thousands of Meters)", "11","13","8","18", "0");
    pushData("What is the third largest ocean in the world?", "Pacific Ocean","Indian Ocean","Atlantic Ocean","Arctic Ocean", "1");
    pushData("Who was the first woman to fly solo across the ocean?", "Brittney Griner","Rosa Parks","Amelia Earhart ","Susan B. Anthony", "2");
    pushData("Where is the largest waterfall in the world located ?", "Canada ","Ocean","Iceland","Argentina", "1");
    pushData("Who named the Pacific Ocean ?", "Ferdinand Magellan","Francis Drake","Christopher Columbus","Henry Hudson", "0");
    pushData("What is the fastest fish in the ocean?", "Dolphin","Shark","Sailfish","Orcas", "2");
    pushData("Which ocean has the most coral reefs?", "Atlantic Ocean","Pacific Ocean","Arctic Ocean","Indian Ocean", "1");
    pushData("What colors can lobsters be?", "Brown ","Red","Blue","All of the Above", "3");
    pushData("How many hearts does a octopus have?", "3","1","2","5", "0");
    pushData("What is the Largest Mountain in the world (Hint: Most of it is underwater)?", "Mount Everest","Mauna Kea","K2","Kilimanjaro", "1");
    pushData("The Submarine Communication Cables are essential for what?", "Electrical Power","Television","Internet","Nuclear Codes", "2");
    pushData("What Percentage of the Earth’s surface is covered by water?", "50%","70%","80%","99%", "1");
    pushData("How far below sea level is the deepest point of the Mariana Trench?", "11km","23km","8km","18km", "0");
    pushData("In the Pixar Movie Finding Nemo, what real life location do Nemo and Marlin live in?", "Mariana Trench","Great Barrier Reef","Atlantis","Bermuda Triangle", "1");
    pushData("What are some of the biggest threats plaguing the Great Barrier Reef?", "It lost half its coral cover in the past decade","Pollution caused deadly starfish outbreaks","Global Warming caused Coral Bleaching","All of the Above", "3");
    pushData("What is the main source of Ocean Pollution?", "Oil Spills","Radioactive Pollution","Runoff Pollution","Non Human Pollution", "2");
    pushData("Squidward Tentacles is what kind of Underwater Creature?", "Squid","Octopus","Kraken","Jellyfish", "1");
    pushData("What is Aquaman’s Secret Identity?", "Oliver Queen","Kevin McCalister","Namor Submariner","Arthur Curry", "3");
    pushData("Why do so many Sea Turtles choke on Plastic Bags?", "They are stupid","They can’t see it","They think it is Jellyfishes","They think it is safe", "2");
    pushData("How Large is the Great Pacific Garbage Patch?", "Twice the size of a Person","Size of a Blue Whale","Size of the UK","Twice the size of Texas", "3");
    pushData("Scientists Estimate Plastic in the Ocean will outweigh Fish by what year?", "2050","2100","2500","3000", "0");
    pushData("How much Microplastic is in the Ocean?", "No such thing as Microplastics","A Garbage Truck’s worth","About as many Fish in the Water","More than the stars in the Milky Way", "3");
    pushData("How many seabirds die annually due to Ocean Pollution? (In Thousands)", "10,000","500,000","1,000,000","100,000", "2");
    pushData("What area is ignored by microplastics?", "The Deep Ocean","Arctic Ice","Isolated Tropical Islands","Nowhere", "3");
    pushData("Which part of the Food Chain is safe from Microplastics?", "The fish who accidentally swallow Microplastics","Predators that eat contaminated Fish","Humans eating seafood","None of them", "3");
    pushData("How many Major Garbage Patches are in the Oceans?", "1","2","5","10", "2");
    pushData("Which ocean is the coldest in the world?", "Pacific Ocean","Arctic Ocean ","Indian Ocean","Atlantic Ocean", "1");
    setQuestion();
}
