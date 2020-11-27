import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from '../Component/CardList.js';
import Card from '../Component/Card.js';
import Scroll from '../Component/Scroll.js';
import Fight from '../Component/Fight.js';
import PlayAgain from '../Component/PlayAgain.js';
import SearchSelectChamp from '../Component/SearchSelectChamp.js';
import ErrorBoundry from '../Component/ErrorBoundry.js';
import 'tachyons';
import './App.css';


class App extends Component {
  constructor (){
    super()
    this.state ={  
      champs: [],
      selectChamp1: '',
      selectChamp2: '',
      champReady1: false,
      champReady2: false,
      energy1: 100,
      energy2: 100,
      champWon: ''
    }
  }

  componentDidMount(){
    fetch('https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(users => this.setState({ champs : Object.values(users.data)}));
  }

  onSelectChamp1 = (event) => {
    this.setState({selectChamp1: event.id})
    this.setState({champReady1: true})
    console.log("ChampReady1: " + this.state.champReady1)
    console.log("energy1: " + this.state.energy1)
  }
  onSelectChamp2 = (event) => {
    this.setState({selectChamp2: event.id}) 
    this.setState({champReady2: true})
    console.log("ChampReady2: " + this.state.champReady2)
    console.log("energy2: " + this.state.energy2)
  }

  onFighting = ()=>{
    let rndNum = Math.random(10) * 10;
    console.log(rndNum);
    (rndNum > 5) ? this.setState({energy1: this.state.energy1 - 10}):
                   this.setState({energy2: this.state.energy2 - 10});
    if (this.state.energy1 <= 0){
      this.setState({champWon: this.state.selectChamp2});
    }
    if (this.state.energy2 <= 0){
      this.setState({champWon: this.state.selectChamp1});
    }
  }

  onRestart = () =>{
    this.setState({champs: [] });
    this.setState({selectChamp1: ''});
    this.setState({selectChamp2: ''});
    this.setState({champReady1: false});
    this.setState({champReady2: false});
    this.setState({energy1: 100});
    this.setState({energy2: 100});
    this.setState({champWon: ''});
    fetch('https://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(users => this.setState({ champs : Object.values(users.data)}));
  }

  render() {
    const {champs, selectChamp1, selectChamp2,champReady1,champReady2,energy1,energy2,champWon} = this.state;
    const filterChamps1 = champs.filter(champ =>{
    return champ.name.toLowerCase().includes(selectChamp1.toLowerCase())   
    })
    const filterChamps2 = champs.filter(champ =>{
    return champ.name.toLowerCase().includes(selectChamp2.toLowerCase())   
    })
    
    if (champs.length === 0) {
      return <h1 className='f1'>Loading</h1>
    }else if (champWon !== ''){
       return (
        <div className='tc'>
          <h1 className='f1'>VsChampions</h1>
          <h2 className='f1'>{champWon.toUpperCase()} WON</h2>
          <Card key={champWon} id={champWon} name={champWon}/>
          <PlayAgain restart={this.onRestart}/>
        </div>
       )}
      else{
      return(
       <div>
         <React.StrictMode>
           <h1 className='f1 tc'>VsChampions</h1>
           <div className='flex items-center'>
             <div className='tc w-40 pa3 pa1-m'>
               <SearchSelectChamp champs={champs} searchChange={this.onSelectChamp1} message={'Select champion 1'} ready1={champReady1} ready2={champReady2}/>
               <Scroll className='tc'>
                 <ErrorBoundry>
                   {!(champReady1) ? <CardList champs= {filterChamps1}/> : <Card key={selectChamp1} id={selectChamp1} name={selectChamp1} ready={champReady1} energy={energy1}/>}
                 </ErrorBoundry>
               </Scroll>
             </div>
             <div className='tc w-20 pa3 pa1-m'>
               <Fight ready1={champReady1} ready2={champReady2} figthing={this.onFighting}/>
             </div>
               <div className='tc w-40 pa3 pa1-m'>
                 <SearchSelectChamp champs={champs} searchChange={this.onSelectChamp2} message={'Select champion 2'} ready1={champReady1} ready2={champReady2}/>
                 <Scroll className='tc'>
                   <ErrorBoundry>
                   {!(champReady2) ? <CardList champs= {filterChamps2}/> : <Card key={selectChamp2} id={selectChamp2} name={selectChamp2} ready={champReady2} energy={energy2}/>}
                   </ErrorBoundry>
                 </Scroll>
               </div>
             </div>
         </React.StrictMode>
       </div>
      );
    }
  }
}
   
  export default App;