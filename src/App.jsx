import './App.css';
import Box from './components/Box';
import Coin from './components/Coin';
import Dialog from './components/Dialog';
import $ from 'jquery'
import SolidBox from './components/SolidBox';
import Cloud from './components/Cloud';
import Refresh from './components/Refresh'
import Navigator from './components/Navigator'

function App() {

  let show = 1

  function alternar () {
    show = !show
  }

  function showDialog () {
    alternar()
    show == true 
    ? $('.Dialog').css({visibility: 'visible'})
    : $('.Dialog').css({visibility: 'hidden'})
  }

  function hideCoin() {
    $('.Component-Coin').css({width: '0px'})
  }

  function refreshPage () {
    window.location.reload()
  }

  return (
    
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      <nav>
          <Dialog />
          <Box showDialog={showDialog}/>
      </nav>
      <main>
        <Navigator/>
        <h1 className="Title">SUPER PIXELED WORLD!</h1>
        <div className="Coin">
          <Coin hideCoin={hideCoin}/>
          <SolidBox/>
        </div>
      </main>
      <nav>
        <div className="refresh">
          <Refresh refreshPage={refreshPage}/>
        </div>
        <Cloud/>
        <div className="space"></div>
      </nav>
    </div>
  );
}

export default App;
