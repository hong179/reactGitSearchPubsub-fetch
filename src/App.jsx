import React, { Component } from 'react'
import Search from './conponents/Search'
import List from './conponents/List'


export default class App extends Component {

    // //更新App的state
    // updateAppState=(stateObj)=>{
    //     this.setState(stateObj)
        
    // }
    //  updateAppState={this.updateAppState}
    // {...this.state}


    render() {
        return (
            <div className="container">
                <Search/>
                <List/>
            </div>
        )
    }
}
