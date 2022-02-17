import React from 'react'
import ReactLoading from 'react-loading'
import './Loading.css'

const Loading = () => {
	return (
		<ReactLoading
			className='app_loading'
			type='bars'
			color='#000'
			height={100}
			width={100}
		/>
	)
}

export default Loading
