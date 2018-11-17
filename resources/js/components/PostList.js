import React, { Component } from 'react'
import App from './App'
import axios from 'axios'
import { Link } from 'react-router-dom'



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
			alert('Lấy dữ liệu không thành công')
		})
		
	}
	deleteRow(key){
		var post = [...this.state.posts];
		post.splice(key,1);
		this.setState({posts:post});
	}
	fetchRows () {
		if(this.state.posts instanceof Array){
			return this.state.posts.map( (item, i) => {
				return <PostRow item={item} key={i} index={i} deleteRow= {this.deleteRow.bind(this)}  />
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
					<th></th>
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



class PostRow extends Component {
	constructor(props){
		super(props)
		this.deletePost = this.deletePost.bind(this)
		// this.editPost = this.editPost.bind(this)
	}
	deletePost(){
		let key = confirm('Do you want to delete this?')
		let url = window.Laravel.baseUrl + '/api/posts/'+this.props.item.id
		if(key)
		{
			axios.delete(url)
			.then(res =>{
				this.props.deleteRow(this.props.index)
			})
			.catch(function(error){
				console.log(error)
				alert(error.data.error)
			})
		}
	}
	editPost(){
		
	}

	render(){
		return (
			<tr>
				<td>{this.props.item.id}</td>
				<td>{this.props.item.title}</td>
				<td>{this.props.item.description}</td>
				<td><a href={'/posts/edit/' +this.props.item.id} className="btn btn-primary">Edit </a></td>
				<td><button className="btn btn-danger" onClick={this.deletePost}>Delete</button></td>
			</tr>
		)
	}
}
export default PostList