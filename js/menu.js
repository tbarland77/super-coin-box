var menuState = {
  create: function() {
  // Add a background image
  game.add.image(0, 0, 'background');
  // Display the name of the game
  var nameLabel = game.add.text(game.width/2, -50,
  'Super Coin Box', { font: '50px Arial', fill: '#ffffff' });
  nameLabel.anchor.setTo(0.5, 0.5);

  game.add.tween(nameLabel).to({y: 80}, 1000)
  .easing(Phaser.Easing.Bounce.Out).start();

  // used for setting the best score
  if (!localStorage.getItem('bestScore')) {
  // Then set the best score to 0
  localStorage.setItem('bestScore', 0);
  }
  // If the score is higher than the best score
  if (game.global.score > localStorage.getItem('bestScore')) {
  // Then update the best score
  localStorage.setItem('bestScore', game.global.score);
  }

  var text = 'score: ' + game.global.score + '\nbest score: ' +
  localStorage.getItem('bestScore');

  var scoreLabel = game.add.text(game.width/2, game.height/2, text,
  { font: '25px Arial', fill: '#ffffff', align: 'center' });
  // Show the score at the center of the screen
  scoreLabel.anchor.setTo(0.5);

  var text;
  if (game.device.desktop) {
  text = 'press the up arrow key to start';
  }
  else {
  text = 'touch the screen to start';
  }

  var startLabel = game.add.text(game.width/2, game.height-80, text,
{ font: '25px Arial', fill: '#ffffff' });
  startLabel.anchor.setTo(0.5, 0.5);

  game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 1000)
  .to({angle: 0}, 500).loop().start();

  this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);

  this.muteButton.frame = game.sound.mute ? 1 : 0;

  // Create a new Phaser keyboard variable: the up arrow key
  // When pressed, call the 'start'
  var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  upKey.onDown.add(this.start, this);

  if (!game.device.desktop)
    {
      game.input.onDown.add(this.start, this);
    }
  },
  start: function() {

    if (!game.device.desktop && game.input.y < 50 && game.input.x < 60) {
    // It means we want to mute the game, so we don't start the game
    return;
    }
  // Start the actual game
  game.state.start('play');
  },
  toggleSound: function() {
    game.sound.mute = !game.sound.mute;

    this.muteButton.frame = game.sound.mute ? 1 : 0;
  },
};
