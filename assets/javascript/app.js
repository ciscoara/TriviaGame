//set the questions
//set the answers
//make sure only 1 answer is selected
//give total of correct and wrong answers at the end
//have a timer going 
//have fun

var panel = $("#play");
$(document).on("click", "#start", function(event){
    game.start();
});

$(document).on("click", "#done", function(event){
    game.done();
});

var questions = [{
        question: "True of False, A Pterosaur is a dinosaur.",
        choices: ["True", "False"],
        right: "False"
        },
        {
        question: "BLANK means good mother lizard",
        choices: ["Mososaurus", "Maiasaura", "Megolosaurus", "Microraptor"],
        right: "Maiasaura"
        },
        {
            question: "Brachiosaurus was a ...",
            choices: ["Carnivore", "Herbivore", "Omnivore"],
            right: "Herbivore"
            },
            {
                question: "This dinosaur had a large sail on its back",
                choices: ["Spinosaurus", "Stegosaurus", "Dimetredon", "Styracosaurus"],
                right: "Spinosaurus"
                },
                {
                    question: "Biggest known flying Pterosaur...",
                    choices: ["Pteranodon", "Ptradactyl", "Dimorphodon", "Quetzocoatlus"],
                    right: "Quetzocoatlus"
                    },
                    {
                        question: "Which of these is not a marine reptile?",
                        choices: ["Plesiosaurus", "Icthyosaurus", "Mososaurus", "Iguanadon"],
                        right: "Iguanadon"
                        },
                        {
                            question: "What is the largest raptor found?",
                            choices: ["Velociraptor", "Oviraptor", "Utahraptor", "Microraptor"],
                            right: "Utahraptor"
                            },
                            {
                                question: "Which is not a carnivore?",
                                choices: ["Allosaurus", "Carnotaurus", "Giganotosaurus", "Diplodocus"],
                                right: "Diploducus"
                                },
                                {
                                    question: "True or False, Tyrranosaurus Rex means Tyrant Lizard and King",
                                    choices: ["True", "False"],
                                    right: "True"
                                    },
                                    {
                                        question: "Brachiosaurus was estimated to be..",
                                        choices: ["Weigh between 30-45 metric tons", "85 feet long", "All of the above"],
                                        right: "All of the above"
                                        }];    
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,

countdown: function(){
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
        alert("OUT OF TIME!");
        game.done();
    }
},
start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
    panel.append('<h2>' + questions[i].question + '</h2>');
    for (var j = 0; j < questions[i].choices.length; j++){
      panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
      }
        }
        panel.append("<button id='done'>DONE</button>");
    })
    
