// Choosies MVP
const myApp = {};
myApp.handleChoiceClick = function () {
  // save selected number from user
  const userNumber = parseInt($(this).val());
  // disable other buttons after choice has been picked
  $('.numberOption').attr('disabled', true);
  // save randomly generate number between zero and five for computer player
  const opponentNumber = Math.floor(Math.random() * 5) + 1;
  // have the chosen number for the user and the computer display on the page with a hand
  const displayHand = function () {
    $(`.evenFinger${userNumber}`).css('z-index', '10');
    $(`.finger${opponentNumber}`).css('z-index', '10');
  };
  displayHand();
  // compare if even or odd wins by using modulo
  // display "winner"/"lose" on the page if the user wins/loses
  const summedFingers = userNumber + opponentNumber;
  if (summedFingers % 2 === 0) {
    $('.winSum').html(`${summedFingers} fingers`);
    $('.winDeclaration').html('evens wins');
    $(`.playAgain`).css('visibility', 'visible');
  } else {
    $('.winSum').html(`${summedFingers} fingers`);
    $('.winDeclaration').html('odds wins');
    $(`.playAgain`).css('visibility', 'visible');
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
myApp.playAgain = function () {
  $('.playAgain').on('click', myApp.handlePlayAgainClick);
};
myApp.clickNumbers = function () {
  $('.numberOption').on('click', myApp.handleChoiceClick);
};
myApp.init = function () {
  myApp.clickNumbers();
  myApp.playAgain();
};
$(function () {
  myApp.init();
});

// STRECH GOALS

// create a counter so the user knows how many times they've won and lost
// create a reset button so the user can reset the counter
// allow the user to choose if they want to be evens or odds
// add a visual countdown "one, two, three, shoot!" after the user picks to add some drama
// Have an option to play the traditional Morra
