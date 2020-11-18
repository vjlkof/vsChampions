import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from '../Component/CardList.js';
import Scroll from '../Component/Scroll.js';
import Fight from '../Component/Fight.js';
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
      champReady2: false
    }
  }

  componentDidMount(){
    fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(users => this.setState({ champs : Object.values(users.data)}));
  }

  onSelectChamp1 = (event) => {
    this.setState({selectChamp1: event.id}) 
  }
  onSelectChamp2 = (event) => {
    this.setState({selectChamp2: event.id}) 
  }

  render() {
    const {champs, selectChamp1, selectChamp2} = this.state;
    const filterChamps1 = champs.filter(champ =>{
    return champ.name.toLowerCase().includes(selectChamp1.toLowerCase())   
    })
    const filterChamps2 = champs.filter(champ =>{
    return champ.name.toLowerCase().includes(selectChamp2.toLowerCase())   
    })
    
    return (champs.length === 0) ?
        <h1 className='f1'>Loading</h1> :
    (
          <div>
            <React.StrictMode>
              <h1 className='f1 tc'>VsChampions</h1>
              <div className='flex items-center'>
              <div className='w-40 pa3 mr2'>
                <SearchSelectChamp champs={champs} searchChange={this.onSelectChamp1} message={'Select champion 1'}/>
                <Scroll className='tc'>
                  <ErrorBoundry>
                    <CardList champs= {filterChamps1}/>  
                  </ErrorBoundry>
                </Scroll>
              </div>
              <div className='tc w-20 pa3 mr2'>
                <Fight/>
              </div>
              <div className='w-40 pa3 mr2'>
                <SearchSelectChamp champs={champs} searchChange={this.onSelectChamp2} message={'Select champion 2'}/>
                <Scroll className='tc'>
                  <ErrorBoundry>
                    <CardList champs= {filterChamps2}/>  
                  </ErrorBoundry>
                </Scroll>
              </div>
              </div>
            </React.StrictMode>
          </div>
        );
    }
}
   
  export default App;