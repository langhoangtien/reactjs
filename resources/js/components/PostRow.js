import React, { Component } from 'react'
import App from './App'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostRow extends Component {
	constructor(props){
		super(props)
		this.deletePost = this.deletePost.bind(this)
	}
	deletePost(){
		let key =confirm('Do you want to delete this?')
		let url = window.Laravel.baseUrl + '/api/posts/'+this.props.item.id
		if(key)
		{
			axios.delete(url)
			.then(res =>{
				console.log(res)
				alert(res.data.message)
			})
			.catch(function(error){
				console.log(error)
				alert(error.data.error)
			})
		}
	}

	render(){
		return (
			<tr>
				<td>{this.props.item.id}</td>
				<td>{this.props.item.title}</td>
				<td>{this.props.item.description}</td>
				<td><button className="btn btn-danger" onClick={this.deletePost}>Delete</button></td>
			</tr>
		)
	}
}
export default PostRow