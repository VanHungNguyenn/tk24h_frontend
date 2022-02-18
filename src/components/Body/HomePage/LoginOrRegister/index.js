import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { showErrorMsg, showSuccessMsg } from '../../../utils/Notification'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { login } from '../../../../redux/actions/userActions'

const initialState = {
	name: '',
	password: '',
}

const LoginOrRegister = () => {
	const [user, setUser] = useState(initialState)
	const dispatch = useDispatch()

	const [isLogin, setIsLogin] = useState(true)

	const changeFormLogin = () => {
		setIsLogin(!isLogin)
	}

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
		<>
			{/* Title homepage */}
			<h1
				style={{
					fontSize: '30px',
					textAlign: 'center',
					margin: '2rem 0',
				}}
			>
				HỆ THỐNG TK24H.COM MUA BÁN TÀI KHOẢN QUẢNG CÁO (VIA, CLONE, BM,
				HOTMAIL, GMAIL...) FACEBOOK GIÁ RẺ, UY TÍN NHẤT VIỆT NAM
			</h1>

			{isLogin ? (
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
								<Link to='/' className='link'>
									Register now!
								</Link>
							</Form.Item>
						</Form>
					</div>
				</div>
			) : (
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

						<form
							className='js-validation-signup user'
							// onSubmit={this.onSubmit}
							style={{ padding: '0px 10% 0px 10%' }}
						>
							<div className='form-group'>
								<div className='input-group'>
									<input
										type='text'
										className='form-control form-control-user'
										id='name'
										name='name'
										placeholder='Tên tài khoản'
										// onChange={this.onChange}
									/>
									<div className='input-group-append'>
										<span className='input-group-text'>
											<i className='fa fa-user-circle'></i>
										</span>
									</div>
								</div>
							</div>
							<div className='form-group'>
								<div className='input-group'>
									<input
										type='text'
										className='form-control form-control-user'
										id='phone'
										name='phone'
										placeholder='Số điện thoại'
										// onChange={this.onChange}
									/>
									<div className='input-group-append'>
										<span className='input-group-text'>
											<i className='fa fa-envelope-open'></i>
										</span>
									</div>
								</div>
							</div>
							<div className='form-group'>
								<div className='input-group'>
									<input
										type='password'
										className='form-control form-control-user'
										id='password'
										name='password'
										placeholder='Mật khẩu'
										// onChange={this.onChange}
									/>
									<div className='input-group-append'>
										<span className='input-group-text'>
											<i className='fa fa-asterisk'></i>
										</span>
									</div>
								</div>
							</div>
							<div className='form-group'>
								<div className='input-group'>
									<input
										type='password'
										className='form-control form-control-user'
										id='repeatpassword'
										name='repeatpassword'
										placeholder='Nhập lại mật khẩu'
										// onChange={this.onChange}
									/>
									<div className='input-group-append'>
										<span className='input-group-text'>
											<i className='fa fa-asterisk'></i>
										</span>
									</div>
								</div>
							</div>
							<div className='form-group text-center'>
								<button
									// onClick={this.clearAlert}
									className='btn btn-primary'
								>
									Đăng ký
								</button>
							</div>

							<div className='d-flex justify-content-center text-center'>
								<div className='font-w600 font-size-sm text-center'>
									Bạn có tài khoản?
									<Link
										to='/'
										className='ml-2'
										onClick={changeFormLogin}
									>
										Đăng nhập!
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default LoginOrRegister
