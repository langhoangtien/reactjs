import React, { Component } from 'react'
import App from './App'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostRow from './PostRow'


class PostList extends Component {
	constructor(props){
		super(props)
		this.state = {
			posts:''
		}
		this.getPost()
	}


	getPost(){
		let url = window.Laravel.baseUrl + '/api/posts'
		axios.get(url)
		.then(res => {
			this.setState({posts:res.data})
			console.log(res.data)
		})
		.catch(function(error){
			console.log(error)
		})
		
	}
	fetchRows () {
		if(this.state.posts instanceof Array){
			return this.state.posts.map( (item, i) => {
				return <PostRow item={item} key={i} index={i} />
			})
		}
	}
	render(){
	return (	
		<App>
			<table className="table">
			<thead>
				<tr>
					<th>STT</th>
					<th>Tiêu đề</th>
					<th>Mô tả</th>
					<th>Hành động</th>
				</tr>
				</thead>
				<tbody>
				 {this.fetchRows()}
				</tbody>
			</table>
		</App>
		)
	}
}
export default PostList