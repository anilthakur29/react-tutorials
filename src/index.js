import React from 'react'
import ReactDOM from 'react-dom'

function ToonList(props){
	const list = props.cartoon
	
	return <ul>{
		list.map((list,index)=><li key={index}>{list}</li>)
	}</ul>
}
const cartoons =['Pikachu','Aladin','Tom','Tom'];

ReactDOM.render(
	<ToonList cartoon={cartoons}/>,
	document.getElementById('root')
)