import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { showErrorMsg, showSuccessMsg } from '../../../utils/Notification'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { login } from '../../../../redux/actions/userActions'

const initialState = {
	name: '',
	password: '',
}

const Login = ({ changeFormLogin }) => {
	const [user, setUser] = useState(initialState)

	const dispatch = useDispatch()
	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmitLogin = async ({ name, password }) => {
		try {
			const res = await axios.post(
				'/user/login',
				{ name, password },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			setUser({ ...user })

			if (res.status === 200) {
				showSuccessMsg(res.data.message)
			}

			localStorage.setItem('token', res.data.token)

			dispatch(login(res.data))
		} catch (error) {
			error.response.data.message &&
				setUser({
					...user,
				})
			showErrorMsg(error.response.data.message)
		}
	}

	return (
		<div className='block block-rounded block-bordered'>
			<div className='block-header block-header-default border-bottom'>
				<h3 className='block-title'>
					<span className='text-muted font-bold'>
						ĐĂNG NHẬP / ĐĂNG KÍ
					</span>
				</h3>
			</div>
			<div
				className='block-content block-content-full  bg-white'
				style={{ padding: '20px !important' }}
			>
				<div className='mb-2 text-center'></div>
				<Form
					name='basic'
					onFinish={handleSubmitLogin}
					layout='vertical'
				>
					<Form.Item
						label='Name'
						name='name'
						htmlFor='name'
						className='mb-4'
						rules={[
							{
								required: true,
								message: 'Please input your name!',
							},
						]}
						style={{ width: '100%' }}
					>
						<Input
							type='name'
							name='name'
							id='name'
							onChange={handleChangeInput}
						/>
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						htmlFor='password'
						className='mb-4'
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password
							type='password'
							name='password'
							id='password'
							onChange={handleChangeInput}
						/>
					</Form.Item>

					<Form.Item className='mb-2'>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>

					<Form.Item className='mb-1'>
						New Customer?{'  '}
						<Link to='/' className='link' onClick={changeFormLogin}>
							Register now!
						</Link>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Login
