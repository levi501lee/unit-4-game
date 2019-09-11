
    var targetDiv = document.getElementById("empty-div");
    targetDiv.textContent = "Welcome to the Taliban";

var Numbers = ["50", "70", "83",]
var startMoney = ["3", "7", "11", "13"]
var currentMoney = 0;
var wins = 0;
var losses = 0;

var targetNumber = Numbers[Math.floor(Math.random() * Numbers.length)];

$("#number-to-guess").text(targetNumber);

var pocketMoney = startMoney[Math.floor(Math.random() * startMoney.length)];

$("#pocket-money").text(pocketMoney);
// I am going to need a way to add to pocketMoney

console.log(targetNumber)

var counter = 0;

var numberOptions = [10, 5, 3, 7];

// This loop creates each crystal for each option, but I need it to be random still
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal to have CSS, it will be given the class ".crystal-image".
    imageCrystal.addClass("crystal-image");


    var imageType = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];
    imageType.forEach(function() {
    
    };
    // for (var j = 0; j < imageType.length; j++) {
        // Each imageCrystal will be given a src link to the crystal image NEED THIS TO BE RANDOM MAYBE
        imageCrystal.attr("src", imageType[j]);
    }

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);


    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    $("button").on("click", function() {
    if (currentMoney == Numbers) {

        wins++;
        console.log(currentMoney);
        $("#totalNumber").html(currentMoney);
        $("#wins").html("Wins: " + wins);


        setTimeout(function() {gameReset("YOU WIN!! Welcome to the Taliban!")}, 200);
    }

    else if (currentMoney > Numbers){

        losses++;
        $("#totalNumber").html(currentMoney);
        $("#losses").html("Losses: " + losses);

        setTimeout(function() {gameReset("INFIDEL! You stole too much! YOU LOSE!")}, 200);
    }
});
