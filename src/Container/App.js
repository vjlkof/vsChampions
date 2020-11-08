import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from '../Component/CardList.js';
import Scroll from '../Component/Scroll.js';
import SearchBox from '../Component/SearchBox.js';
import ErrorBoundry from '../Component/ErrorBoundry.js';
import 'tachyons';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state ={  
      champs: [],
      selectChamp1: ''
    }
  }

  componentDidMount(){
    fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(users => this.setState({ champs : Object.values(users.data)}));
  }

  onSelectChamp = (event) => {
    this.setState({selectChamp1: event.target.value}) 
  }

  render() {
    const {champs, selectChamp1} = this.state;
    console.log("Data about champs2");
    console.log(champs);
    const filterChamps = champs.filter(champ =>{
    return champ.name.toLowerCase().includes(selectChamp1.toLowerCase())
    })
    return (champs.length === 0) ?
        <h1 className='f1'>Loading</h1> :
    (
          <div className='tc'>
            <React.StrictMode>
              <h1 className='f1'>VsChampions</h1>
              <SearchBox searchChange={this.onSelectChamp}/>
                <Scroll>
                  <ErrorBoundry>
                   <CardList champs= {filterChamps}/>  
                   </ErrorBoundry>
                </Scroll>
            </React.StrictMode>,
          </div>
        );
    }
}
   
  export default App;