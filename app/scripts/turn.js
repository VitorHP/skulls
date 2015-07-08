class Turn extends Component {
  constructor(player) {
    super();
    this.player = player
    this.player.subscribe('ready', this);
    this.player.wake();

    this.subscribers = { 'end-turn' : [] }
  }

  update () {
    console.log(`${this.player.name} turn ended`);
    this.player.sleep();
    this.publish('end-turn');
    this.player.unsubscribe('ready', this);
  }

}
