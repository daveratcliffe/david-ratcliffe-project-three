const myApp = {};
// number option callback function
myApp.handleChoiceClick = function () {
  // save selected number from user
  const userNumber = parseInt($(this).val());
  // disable other buttons after choice has been picked
  $('.numberOption').attr('disabled', true);
  // save randomly generate number between zero and five for computer player
  const opponentNumber = Math.floor(Math.random() * 5) + 1;
  console.log(opponentNumber);
  // have the chosen number for the user and the computer display on the page with a hand
  const displayHand = function () {
    $(`.evenFinger${userNumber}`).css('z-index', '10');
    $(`.finger${opponentNumber}`).css('z-index', '10');
  };
  displayHand();
  // set score counter to zero
  // compare if even or odd wins by using modulos
  // display "winner"/"lose" on the page if the user wins/loses
  const summedFingers = userNumber + opponentNumber;
  if (summedFingers % 2 === 0) {
    $('.winSum').html(`${summedFingers} fingers`);
    $('.winDeclaration').html('evens wins');
    $(`.playAgain`).css('visibility', 'visible');
    // add score to user
    let userScore = 0;
    userScore += 1;
    $('.evenScore').html(userScore);
    console.log(userScore);
  } else {
    $('.winSum').html(`${summedFingers} fingers`);
    $('.winDeclaration').html('odds wins');
    $(`.playAgain`).css('visibility', 'visible');
    // add score to opponent
    let opponentScore = 0;
    opponentScore += 1;
    $('.oddScore').html(opponentScore);
    console.log(opponentScore);
  }
};

// create a play again button the resets the code
myApp.handlePlayAgainClick = function () {
  $('.handReset').css('z-index', '0');
  $('.playAgain').css('visibility', 'hidden');
  $('.winSum').html(' ');
  $('.winDeclaration').html(' ');
  $('.numberOption').attr('disabled', false);
};
// fade in header text on pageload
myApp.headerAnimate = function () {
  $('.hidden').fadeIn(1250).removeClass('hidden');
};
// play again click function
myApp.playAgain = function () {
  $('.playAgain').on('click', myApp.handlePlayAgainClick);
};
// number option click function
myApp.clickNumbers = function () {
  $('.numberOption').on('click', myApp.handleChoiceClick);
};
// initialization
myApp.init = function () {
  myApp.clickNumbers();
  myApp.playAgain();
  myApp.headerAnimate();
};
// pageload
$(function () {
  myApp.init();
});

// STRECH GOALS

// create a counter so the user knows how many times they've won and lost
// create a reset button so the user can reset the counter
// allow the user to choose if they want to be evens or odds
// add a visual countdown "one, two, three, shoot!" after the user picks to add some drama
// Have an option to play the traditional Morra
