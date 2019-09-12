$(document).ready(function () {

    var Numbers = ["50", "70", "83",]
    var targetNumber = Numbers[Math.floor(Math.random() * Numbers.length)];
    $("#target-number").text(targetNumber);


    var startMoney = ["3", "7", "11", "13"]
    var pocketMoney = startMoney[Math.floor(Math.random() * startMoney.length)];
    $("#pocket-money").text(pocketMoney);
    // I am going to need a way to add to pocketMoney

    var wins = 0;
    var losses = 0;

    var j1;
    var j2;
    var j3;
    var j4;


    console.log(targetNumber)

    var counter = 0;
    var crystalOptions = [10, 5, 3, 7];

    var randomItem = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
    // function crystalValues(crystalOptions) {
    // for (i = 0; i < crystalOptions.length; i++)
    {

        $("#button-" + (i + 1)).attr("value", randomItem[i]);
        console.log(this);
    }
    j1 = arr[0];
    j2 = arr[1];
    j3 = arr[2];
    j4 = arr[3];
    // This SHOULD assign values to crystals


    //  This should reset everything
    function gameReset(x) {

        pickRandomNumber(rand);

        pickRandomCrystals(crystals);

        crystalValues(crystalOptions);

        $("#pocket-money").html(pocketMoney);

        alert(x);
    }
    // end of reset game

    // The game settings

    $("#button-1").on("click", function () {

        pocketMoney += j1;
        $("#pocket-money").html(pocketMoney);
    });

    $("#button-2").on("click", function () {

        pocketMoney += j2;
        $("#pocket-money").html(pocketMoney);
    });

    $("#button-3").on("click", function () {

        pocketMoney += j3;
        $("#pocket-money").html(pocketMoney);
    });

    $("#button-4").on("click", function () {

        pocketMoney += j4;
        $("#pocket-money").html(pocketMoney);
    });


    $("button").on("click", function () {
        if (pocketMoney == Numbers) {

            wins++;
            console.log(pocketMoney);
            $("#pocket-money").html(pocketMoney);
            $("#wins").html("Wins: " + wins);


            setTimeout(function () { gameReset("YOU WIN!! Welcome to the Taliban!") }, 200);
        }

        else if (pocketMoney > Numbers) {

            losses++;
            $("#pocket-money").html(pocketMoney);
            $("#losses").html("Losses: " + losses);

            setTimeout(function () { gameReset("INFIDEL! You stole too much! YOU LOSE!") }, 200);
        }
    });

});
