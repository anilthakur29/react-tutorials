import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props){
	return <h1>Hello, {props.name} and {props.show}</h1>

}
function Show(){
	return  <div>
		<Cartoon name='pikachu' show='Pokemon' />
		<Cartoon name='Tom' show='Jerry' />
	</div>
}


ReactDOM.render(
<Show />, document.getElementById('root')
)