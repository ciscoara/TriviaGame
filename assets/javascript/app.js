//set the questions
//set the answers
//make sure only 1 answer is selected
//give total of correct and wrong answers at the end
//have a timer going 
//have fun

//start game at start
var panel = $("#play");
$(document).on("click", "#start", function(event){
    game.start();
});

//done button after answering questions to see stats
$(document).on("click", "#done", function(event){
    game.done();
});

// build the questions. set them up as an array with 10 objects
// set correct answer for later comparison
var questions = [
    {
        question: "1. True of False, A Pterosaur is a dinosaur.",
        choices: ["True", "False"],
        right: "False"
        },
        {
        question: "2. _______ means good mother lizard",
        choices: ["Mososaurus", "Maiasaura", "Megolosaurus", "Microraptor"],
        right: "Maiasaura"
        },
        {
            question: "3. Brachiosaurus was a ...",
            choices: ["Carnivore", "Herbivore", "Omnivore"],
            right: "Herbivore"
            },
            {
                question: "4. This dinosaur had a large sail on its back",
                choices: ["Spinosaurus", "Stegosaurus", "Dimetredon", "Styracosaurus"],
                right: "Spinosaurus"
                },
                {
                    question: "5. Biggest known flying Pterosaur...",
                    choices: ["Pteranodon", "Ptradactyl", "Dimorphodon", "Quetzocoatlus"],
                    right: "Quetzocoatlus"
                    },
                    {
                        question: "6. Which of these is not a marine reptile?",
                        choices: ["Plesiosaurus", "Icthyosaurus", "Mososaurus", "Iguanadon"],
                        right: "Iguanadon"
                        },
                        {
                            question: "7. What is the largest raptor found?",
                            choices: ["Velociraptor", "Oviraptor", "Utahraptor", "Microraptor"],
                            right: "Utahraptor"
                            },
                            {
                                question: "8. Which is not a carnivore?",
                                choices: ["Allosaurus", "Carnotaurus", "Giganotosaurus", "Diplodocus"],
                                right: "Diploducus"
                                },
                                {
                                    question: "9. True or False, Tyrranosaurus Rex means Tyrant Lizard and King",
                                    choices: ["True", "False"],
                                    right: "True"
                                    }];
                                    //{
                                        // question: "Brachiosaurus was estimated to be..",
                                        // choices: ["Weigh between 30-45 metric tons", "85 feet long", "All of the above"],
                                        // right: "All of the above"
                                        // }];    

//game stats, place holder for correct, incorrect, and variable for the timer
    var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
//countdown funtion that reduces the counter value by 1
countdown: function(){
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
        alert("OUT OF TIME!");
        game.done();
    }
},
//the reduction speed will be 1 second
start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#timeLeft').prepend('<h4>Timer: <span id="counter-number">60</span></h4>');
    $("#start").remove();

    //loop for the questions to be added with the multiple choices
    for (var i = 0; i < questions.length; i++) {
    panel.append('<h2>' + questions[i].question + '</h2>');
    for (var j = 0; j < questions[i].choices.length; j++){
      panel.append('<input type="radio" name ="question' + '-' + i + '"value="'  + questions[i].choices[j] + '">' + '<label id="font">' +questions[i].choices[j]+'</label>');

      }
        }
        //showing the done button in case player finishes quick and it doesnt have to wait to see the answers
        panel.append("<br><button id='done' class='btn btn-outline-light btn-lg'>DONE</button>");

    },
    //done function that shows the correct and incorrect answers
    done: function() {

        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].right) {
                console.log(this);
                  game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questions[3].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questions[4].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() == questions[5].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() == questions[6].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-7']:checked"), function() {
            if ($(this).val() == questions[7].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-8']:checked"), function() {
            if ($(this).val() == questions[8].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input[name='question-9']:checked"), function() {
            if ($(this).val() == questions[9].right) {
                console.log(this);
                game.correct++;
            } else {
                game.incorrect++;
            }

        });

        this.results();
    },

//shows results after the done function. gives a total of the game
      results:function() {
          clearInterval(timer);

          $("#subcontainer h4").remove();

       panel.html("<h2>How you did:</h2>");
       panel.append("<h3>You got this many right: " + this.correct + "</h3>");
       panel.append("<h3>You got this many wrong: " + this.incorrect + "</h3>");
       panel.append("<h3>You didn't answer this many: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
      },

};