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

    game.load.image('jumpButton', 'assets/jumpButton.png');
    game.load.image('rightButton', 'assets/rightButton.png');
    game.load.image('leftButton', 'assets/leftButton.png');

    game.load.spritesheet('player', 'assets/player2.png', 20, 20);
    game.load.image('enemy', 'assets/enemy.png');
    game.load.image('coin', 'assets/coin.png');

    game.load.image('tileset', 'assets/tileset.png');
    game.load.tilemap('map', 'assets/map2.json', null,
    Phaser.Tilemap.TILED_JSON);

    // Load a new asset that we will use in the menu state
    game.load.image('background', 'assets/background.png');

    game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.ogg']);
    game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.ogg']);
    game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.ogg']);
    // bg music
    game.load.audio('music', ['assets/music/Hail8bit.mp3', 'assets/music/Hail8bit.ogg']);

    // particles
    game.load.image('pixel', 'assets/pixel.png');

    game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
  },

  create: function() {
    game.state.start('menu');
  }
};
