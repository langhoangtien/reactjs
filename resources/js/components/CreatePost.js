import React, { Component } from 'react'
import App from './App'
import axios from 'axios'
class CreatePost extends Component{
	constructor(props){
		super(props)
		this.state = {
			title:"phuong",
			description:"",
			author:"",
			category_id:3
		}
		this.changeTitle = this.changeTitle.bind(this)
		this.changeDescription = this.changeDescription.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.changeAuthor = this.changeAuthor.bind(this)
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
	changeAuthor(e){
		this.setState({
			author:e.target.text
		})
	}
	submitForm(e){
		e.preventDefault()
		let url =window.Laravel.baseUrl + '/api/posts'
		const data = {
			title: this.state.title,
			description: this.state.description,
			category_id: this.state.category_id

		}
		axios.post(url,data)
		.then(response => {
			alert('Them bai viet thanh cong')
		})
		.catch(function(error) {
			alert('Them bai viet khong thanh cong')
		})
		
	}

	render(){
		return (
			<App>
			<h1>Create Post rt</h1>
			<div className="form-group">
			Title
			<input className="form-control" value={this.state.title} onChange={this.changeTitle}/>
			</div>
			<div className="form-group">
			Description
			<textarea className="form-control" value={this.state.description} onChange={this.changeDescription} />
			</div>
			<div className="form-group">
			Author
			<input type="number" className="form-control" value={this.state.author} onChange={this.changeAuthor} />
			</div>
			<button onClick={this.submitForm} className="btn btn-primary">Submit</button>
			</App>
			)
	}
}

export default CreatePost