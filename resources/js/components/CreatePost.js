import React, { Component } from 'react'
import App from './App'
class CreatePost extends Component{
	constructor(props){
		super(props)
		this.state = {
			title:"phuong",
			description:"",
			author:""
		}
		this.changeTitle = this.changeTitle.bind(this)
		this.changeDescription = this.changeDescription.bind(this)
	}


	changeTitle(e){
		this.setState({
			title:e.target.value
		})
	}
	changeDescription(e){
		this.setState({
			description:e.target.text
		})
	}
	submitForm(e){
		let url =window.Laravel + 'api/'
	}

	render(){
		return (
			<App>
			<h1>Create new Post</h1>
			<div className="form-group">
			Title
			<input className="form-control" value={this.state.title} onChange={this.changeTitle}/>
			</div>
			<div className="form-group">
			Description
			<textarea className="form-control" value={this.state.description} onChange={this.changeDescription} />
			</div>
			<button className="btn btn-primary">Submit</button>
			</App>
			)
	}
}

export default CreatePost