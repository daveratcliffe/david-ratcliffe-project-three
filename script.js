const myApp = {};
// number option callback function
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
  // set score counter to zero
  // compare if even or odd wins by using modulos
  // display "winner"/"lose" on the page if the user wins/loses
  const summedFingers = userNumber + opponentNumber;
  if (summedFingers % 2 === 0) {
    $('.winSum').html(`${summedFingers} fingers`);
    $('.winDeclaration').html('even wins').css('color', '#6E954B');
    $(`.playAgain`).css('visibility', 'visible');
    // add score to user
    myApp.userScore++;
    $('.evenScore').html(myApp.userScore);
  } else {
    $('.winSum').html(`${summedFingers} fingers`);
    $('.winDeclaration').html('odd wins').css('color', '#B34248');
    $(`.playAgain`).css('visibility', 'visible');
    // add score to opponent
    myApp.opponentScore++;
    $('.oddScore').html(myApp.opponentScore);
  }
};
myApp.resetScores = function () {
  myApp.userScore = 0;
  $('.evenScore').html(myApp.userScore);
  myApp.opponentScore = 0;
  $('.oddScore').html(myApp.opponentScore);
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
  myApp.userScore = 0;
  myApp.opponentScore = 0;
  myApp.clickNumbers();
  myApp.playAgain();
  myApp.headerAnimate();
  myApp.resetScores();
};
// pageload
$(function () {
  myApp.init();
});
