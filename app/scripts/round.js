class Round extends Component {
  constructor(){
    var events = [
      { name: 'start'     , from: 'initial'     , to: 'preparing' }     , 
      { name: 'bet'       , from: 'preparing'   , to: 'betting' }     , 
      { name: 'challenge' , from: 'betting'     , to: 'challenging' } , 
      { name: 'reveal'    , from: 'challenging' , to: 'revealing' }   , 
      { name: 'end'       , from: 'revealing'   , to: 'finished' }
    ]

    super(events);

    this.state = 'initial';
  }

  availableActions () {
    return {
      'preparing'   : ['bet'],
      'betting'     : ['bet', 'challenge'],
      'challenging' : ['raise', 'fold'],
      'revealing'   : ['show'],
      'finished'    : [],
    }
  }
}


