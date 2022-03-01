import { Component } from 'react';
import LeftBlock from '../left-block/leftBlock';
import CenterBlock from '../center-block/centerBlock';
import RightBlock from '../right-block/rightBlock';
import Menu from '../menu/menu';
import Data from './data';

import './app.css';

class App extends Component {
  state = {
    id: 0
  }

  choiceCard = (id) => {
    this.setState(({id: id}));
  }
 
  render(){
    const idCard = this.state.id;
    return (
      <div className="section-card">
        <LeftBlock data={Data[idCard]}/>
        <CenterBlock />
        <RightBlock data={Data[idCard]}/>
        <Menu 
          choiceCard = {this.choiceCard}
          data = {Data}/>
      </div>
    );
  }
}

export default App;
