// Score is set to zero here so it can be used in each function //
let score = 0;

// Score functions, set on each corresponding image. Increases the score and then appends the score div with more rockets. Checks for certain scores and alerts user if their score isn't high enough to go to the next level. //
function scoreFunOne() {

  if (score == 0) {
  // Removes the 0 from the current score so rocket ships can go there in the future //
  var str = $('#currentScore').text().replace(/0/g, '');
  $('#currentScore').text(str);
}
  score++;
  $("#currentScore").append('<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>');
  if (score < 2) {
    alert("You need more points to go the next level. Why don't you try a round of trivia?");
  } else {
   $("#puzzleOne").hide();
   $("#puzzleTwo").show();
   displayImgTwo();
  }
}

function scoreFunTwo() {
  score++;
  $("#currentScore").append('<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>');
  if (score < 3) {
    alert("You need more points to go the next level. Why don't you try a round of trivia?");
  } else {
   $("#puzzleTwo").hide();
   $("#puzzleThree").show();
   displayImgThree();
 }
}

function scoreFunThree() {
  score++;
  $("#currentScore").append('<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>');
  if (score < 4) {
    alert("You need more points to go the next level. Why don't you try a round of trivia?");
  } else {
   $("#puzzleThree").hide();
   $("#puzzleFour").show();
   displayImgFour();
 }
}

function scoreFunFour() {
  score++;
  $("#currentScore").append('<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>');
  if (score < 5) {
    alert("You need more points to go the next level. Why don't you try a round of trivia?");
  } else {
   $("#puzzleFour").hide();
   $("#puzzleFive").show();
   displayImgFive();
 }
}

function scoreFunFive() {
  score++;
  $("#currentScore").append('<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>');
  if (score < 7) {
    alert("You need more points to go the next level. Why don't you try a round of trivia?");
  } else {
   $("#puzzleFive").hide();
   $(".finalDiv").show();
   var audioWinner = document.getElementById("audioWinner");
   audioWinner.play();
 }
}

// Plays and stops music on corresponding button clicks //
function play(){
  var audio = document.getElementById("audio");
  audio.loop = true;
  audio.play();
}

function stopMusic() {
  var audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
}


// Trivia code //

// Arrays to hold questions, right answers, and wrong answers, they will be shifted each time a question is asked so the next question and answers will show the next time the window is loaded //
let question = ["How many moons does Earth have?", "How many planets is Earth from the sun?", "What is the name of the largest ocean on Earth?", "How much of Earth's surface is covered in water?", "Earth's atmosphere are composed of which two gases?", "True or False: Wasting less food is a way to reduce greenhouse gas emissions."];
let yes = ["One", "Three", "Pacific", "70%", "Oxygen and Nitrogen", "True"];
let no = ["Two", "Four", "Atlantic", "90%", "Oxygen and Hydrodgen", "False"];

// Trivia modal code //
function studentModal(){
  $('#studentModal').show();
  if (question.length == 0) {
    $('#question').text("You have used up all the trivia questions. Sorry!");
  } else {
   $('#yes').show();
   $('#no').show();
   $("#okay").hide();
   $('#question').text(question[0]);
   $('#yes').text(yes[0]);
   $('#no').text(no[0]);
 }
}

// Yes button gives a score and a rocket, then hides everything and splices each array so the question will shift next time //
function yesFun() {
  $('#question').text("You got it! You earned a rocket ship.");
  var right = document.getElementById("right");
  right.play();
  $('#yes').hide();
  $('#no').hide();
  if (score == 0) {
  // Removes the 0 from the current score so rocket ships can go there in the future //
  var str = $('#currentScore').text().replace(/0/g, '');
  $('#currentScore').text(str);
 }
  score++;
  $("#currentScore").append('<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>');
  $("#okay").show();
  question.splice(0, 1);
  yes.splice(0, 1);
  no.splice(0, 1);
}

// Hides okay button when the window is hidden so it won't show the next time the window is opened //
function okayFun() {
  $('#studentModal').hide();
}

// No button does not up score and hides everything, then slices each array so the question will shift next time //
function noFun() {
  $('#question').text("Not quite. Keep trying!");
  var wrong = document.getElementById("wrong");
  wrong.play();
  $('#yes').hide();
  $('#no').hide();
  $("#okay").show();
  question.splice(0, 1);
  yes.splice(0, 1);
  no.splice(0, 1);
}

// Showing and hiding other modals below //
function teacherModal() {
  $('#teacherModal').show();
}

function closeModal() {
  $('#studentModal').hide();
}

function resourcesModal() {
  $('#resourcesModal').show();
}

function closeresourcesModal() {
  $('#resourcesModal').hide();
}

function howModal() {
  $('#howModal').show();
}

function closehowModal() {
  $('#howModal').hide();
}

function closeteacherModal() {
  $('#teacherModal').hide();
}

// Images code for randomizing the images from the different folders for the different levels //

let oneImage = ["wildfires/wildfires_1.jpg", "wildfires/wildfires_2.jpg", "wildfires/wildfires_3.jpg", "wildfires/wildfires_4.jpg", "wildfires/wildfires_5.jpg"];

function displayImg(){
    var num = Math.floor(Math.random() * (oneImage.length));
    document.canvasOne.src=oneImage[num];
}

window.onload = function() {
  displayImg();
};

let TwoImage = ["severe_storms/severe_storms_1.jpg", "severe_storms/severe_storms_2.jpg", "severe_storms/severe_storms_3.jpg", "severe_storms/severe_storms_4.jpg", "severe_storms/severe_storms_5.jpg"];

function displayImgTwo(){
    var num = Math.floor(Math.random() * (TwoImage.length));
    document.canvasTwo.src=TwoImage[num];
}

let ThreeImage = ["sea_and_lake_ice/sea_and_lake_ice_1.jpg", "sea_and_lake_ice/sea_and_lake_ice_2.jpg", "sea_and_lake_ice/sea_and_lake_ice_3.jpg", "sea_and_lake_ice/sea_and_lake_ice_4.jpg", "sea_and_lake_ice/sea_and_lake_ice_5.jpg"];

function displayImgThree(){
    var num = Math.floor(Math.random() * (ThreeImage.length));
    document.canvasThree.src=ThreeImage[num];
}

let FourImage = ["temperature_extremes/temperature_extremes_1.jpg", "temperature_extremes/temperature_extremes_2.jpg", "temperature_extremes/temperature_extremes_3.jpg", "temperature_extremes/temperature_extremes_4.jpg", "temperature_extremes/temperature_extremes_5.jpg"];

function displayImgFour(){
    var num = Math.floor(Math.random() * (FourImage.length));
    document.canvasFour.src=FourImage[num];
}

let FiveImage = ["dust_and_haze/dust_and_haze_1.jpg", "dust_and_haze/dust_and_haze_2.jpg", "dust_and_haze/dust_and_haze_3.jpg", "dust_and_haze/dust_and_haze_4.jpg", "dust_and_haze/dust_and_haze_5.jpg"];

function displayImgFive(){
    var num = Math.floor(Math.random() * (FiveImage.length));
    document.canvasFive.src=FiveImage[num];
}
