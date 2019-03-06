// Global Variables
var startingRandomNumber = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var totalScore = 0;
var StartingScore = 0
var wins = 0;
var losses = 0;


// Global Functions
function reset() {
    $("#randomStartingNumber").text("Click Here To Start");
    $("#totalScoreDisplay").html(startingScore);
    startingScore = 0;
}

function conditions() {
    if (totalScore > startingRandomNumber) {
        alert("You Lose! Final Score was RandomNumber: " + startingRandomNumber + " TotalScore: " + totalScore);
        totalScore = 0;
        $("#totalScoreDisplay").html(totalScore);
        // startingRandomNumber = 0
        $("#randomStartingNumber").text("Click Here to Begin New Round");
        losses += 1;
        $("#losses").text("Losses: " + losses);
    }
    if (totalScore === startingRandomNumber) {
        alert("You Win! Final Score was RandomNumber: " + startingRandomNumber + " TotalScore: " + totalScore);
        totalScore = 0;
        $("#totalScoreDisplay").html(totalScore);
        // startingRandomNumber = 0;
        $("#randomStartingNumber").text("Click Here To Begin New Round");
        wins += 1;
        $("#wins").text("Wins: " + losses);
    }
}

// on clicking Random Number Column
$(".randomNumberColumn").on("click", function () {

    // Generate a Random Starting Number between 19-120
    startingRandomNumber = Math.floor(Math.random() * 119) + 1;
    console.log(startingRandomNumber);

    //Display Random Starting Number in it's container
    $("#randomStartingNumber").html(startingRandomNumber);

    // Display Total Score Counter in it's container
    $("#totalScoreDisplay").html(totalScore);

    // On clicking Crystal 1...
    $("#crystal1").on("click", function () {
        // Generate Crystal 1 Random Number between 1-12
        crystal1 = Math.floor(Math.random() * 11) + 1;
        totalScore += crystal1;
        $("#totalScoreDisplay").html(totalScore);
        conditions();
    })

    // On clicking Crystal 2...
    $("#crystal2").on("click", function () {
        // Generate Crystal 2 Random Number between 1-12
        crystal2 = Math.floor(Math.random() * 11) + 1;
        totalScore += crystal2;
        $("#totalScoreDisplay").html(totalScore);
        conditions();
    })

    // On clicking Crystal 3...
    $("#crystal3").on("click", function () {
        // Generate Crystal 3 Random Number between 1-12
        crystal3 = Math.floor(Math.random() * 11) + 1;
        totalScore += crystal3;
        $("#totalScoreDisplay").html(totalScore);
        conditions();
    })

    // On clicking Crystal 4...
    $("#crystal4").on("click", function () {
        // Generate Crystal 4 Random Number between 1-12
        crystal4 = Math.floor(Math.random() * 11) + 1;
        totalScore += crystal4;
        $("#totalScoreDisplay").html(totalScore);
        conditions();
    })
})



