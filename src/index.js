import React from 'react'
import ReactDOM from 'react-dom'

function Message(props){
	if(props.value){
		return <h1>First Message</h1>

	}
	return <h1>Second Message</h1>

}
class Btn extends React.Component{
	constructor(props) {
		super(props)
	
		this.state = {
			value : true
			 
		}
	}

	handleClick =() =>{
		this.setState({
			value :!this.state.value

		});
	}
render(){
	return <div>
		<button onClick={this.handleClick}>Click Here</button>
		<Message value={this.state.value}/>

		

	</div>	
}	
}
ReactDOM.render(
	<Btn />,document.getElementById('root')
)