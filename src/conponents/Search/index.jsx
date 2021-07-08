import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    Search =()=>{
        //获取用户的输入(连续解构赋值+重命名)

        const {keyWordElement:{value:keyword}} = this
        console.log(keyword) 
        //发送网络请求
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response=>{
                this.props.saveUsers(response.data.items)
            },
            error=>{console.log('失败了',error);}
        )
        
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref = {c => this.keyWordElement = c}type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.Search}>搜索</button>
                </div>
            </section>
        )
    }
}
