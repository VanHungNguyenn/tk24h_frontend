import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { showErrorMsg, showSuccessMsg } from '../../../utils/Notification'
import { Link } from 'react-router-dom'
import axios from 'axios'

const initialState = {
	name: '',
	password: '',
	repeatPassword: '',
	phone: '',
}

const Register = ({ changeFormLogin }) => {
	const [user, setUser] = useState(initialState)

	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmitRegister = async ({
		name,
		password,
		repeatPassword,
		phone,
	}) => {
		try {
			const res = await axios.post(
				'/user/register',
				{ name, password, repeatPassword, phone },
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
			<div className='block-content block-content-full bg-white'>
				<div className='mb-2 text-center'></div>

				<Form
					name='basic'
					onFinish={handleSubmitRegister}
					layout='vertical'
				>
					<Form.Item
						label='Tên tài khoản'
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
						label='Mật khẩu'
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
					<Form.Item
						label='Nhập lại mật khẩu'
						name='repeatPassword'
						htmlFor='repeatPassword'
						className='mb-4'
						rules={[
							{
								required: true,
								message: 'Please input your repeat password!',
							},
						]}
					>
						<Input.Password
							type='password'
							name='repeatPassword'
							id='repeatPassword'
							onChange={handleChangeInput}
						/>
					</Form.Item>
					<Form.Item
						label='Số điện thoại'
						name='phone'
						htmlFor='phone'
						className='mb-4'
						rules={[
							{
								required: true,
								message: 'Please input your phone!',
							},
						]}
					>
						<Input
							type='number'
							name='phone'
							id='phone'
							onChange={handleChangeInput}
						/>
					</Form.Item>

					<Form.Item className='mb-2'>
						<Button
							type='primary'
							htmlType='submit'
							className='w-100'
						>
							Đăng kí
						</Button>
					</Form.Item>

					<Form.Item className='mb-1'>
						Bạn đã có tài khoản?{'  '}
						<Link to='/' className='link' onClick={changeFormLogin}>
							Đăng nhập ngay!
						</Link>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Register
