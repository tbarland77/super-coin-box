var loadState = {
  preload: function() {
    var loadingLabel = game.add.text(game.width/2, 150, 'loading...',
    { font: '30px Arial', fill: 'rgb(12, 213, 249)'});

    loadingLabel.anchor.setTo(0.5);

    // Display the progress bar
    var progressBar = game.add.sprite(game.width/2, 200,
    'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

    game.load.image('player', 'assets/player.png');
    game.load.image('enemy', 'assets/enemy.png');
    game.load.image('coin', 'assets/coin.png');
    game.load.image('wallV', 'assets/wallVertical.png');
    game.load.image('wallH', 'assets/wallHorizontal.png');
    // Load a new asset that we will use in the menu state
    game.load.image('background', 'assets/background.png');

    game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.ogg']);
    game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.ogg']);
    game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.ogg']);
  },

  create: function() {
    game.state.start('menu');
  }
};
