import { Component } from 'react';

import './menu.css';

class Menu extends Component {
    state = {
        active: false
    }
    menuToggle = () => {
        if(!this.state.active){
            this.setState(({active: true}));
        } else {
            this.setState(({active: false}))
        }
    }


    

    render(){

        const {data, choiceCard} = this.props;
        const {active} = this.state;
        const foto = require('../assets/pngegg.png');

        const clasMenu = active ? 'menu--active' : 'menu--close';
        const element = data.map(item => {
            const findFoto = item.foto ? item.foto : foto;

            return(
                <div className="card" onClick={() => {
                    return(
                        this.setState(({active: false})),
                        choiceCard(item.id))
                }} 
                    key = {item.id}>
                    <div className="foto-box">
                        <img src={findFoto} alt="" />
                    </div>
                    <div className="description">{item.surname} {item.name}</div>
                </div>
            )
        });

        return (
            <div className={`menu ${clasMenu}`}>
                <div className="item" onClick={this.menuToggle}>!</div>
                <div className="close" onClick={this.menuToggle}>X</div>
                {element}
            </div>
        )
    }
};

export default Menu;