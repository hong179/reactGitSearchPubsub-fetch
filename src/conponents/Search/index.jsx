import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
    search = async()=>{
        //获取用户的输入(连续解构赋值+重命名)

        const {keyWordElement:{value:keyWord}} = this
        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        //#region 使用axios发送请求
        //发送网络请求使用axios
        // axios.get(`/api1/search/users2?q=${keyword}`).then(
        //     response=>{
        //         //请求成功后通知List更新状态
        //         // this.props.updateAppState({isLoading:false,users:response.data.items})
        //         PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
        //     },
        //     error=>{
        //         //请求失败后通知List更新状态
        //         // this.props.updateAppState({isLoading:false,err:error.message})
        //         PubSub.publish('atguigu',{isLoading:false,err:error.message})
        //     }
        // )
        //#endregion使用axios发送请求
        // 发送网络请求---使用fetch发送(未优化and优化)
        // fetch(`/api1/search/users2?q=${keyword}`).then(
        //     response =>{
        //         return response.json()
        //     },
        //     // error=>{
        //     //     return new Promise(()=>{})
        //     // }
        // ).then(
        //     response =>{
        //         console.log('获取数据成功',response)
        //     },
        //     // error=>{error}
        // ).catch(
        //     error=>{console.log("请求出错",error);}
        // )
        //发送网络请求---使用fetch发送（优化）
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            console.log(data);
            PubSub.publish('atguigu',{isLoading:false,users:data.items})
        } catch (error) {
            console.log('请求出错',error);
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
        } 
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
