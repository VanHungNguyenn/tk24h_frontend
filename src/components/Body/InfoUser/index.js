import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { showErrorMsg, showSuccessMsg } from '../../utils/Notification'
import axios from 'axios'

const initialState = {
	oldPass: '',
	newPass: '',
	rePass: '',
}

const InfoUser = () => {
	const name = useSelector((state) => state.user.user.name)
	const phone = useSelector((state) => state.user.user.phone)
	const id = useSelector((state) => state.user.user._id)

	const [form, setForm] = useState(initialState)

	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setForm({ ...form, [name]: value })
	}

	const handleChangePassword = async ({ oldPass, newPass, rePass }) => {
		try {
			const res = await axios.post(
				'/user/update',
				{ oldPass, newPass, rePass, id },
				{
					headers: {
						'Content-Type': 'application/json',
						'auth-token': localStorage.getItem('token'),
					},
				}
			)

			console.log({ res })
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div className='block block-rounded block-bordered'>
			<div className='block-header block-header-default border-bottom'>
				<h3 className='block-title'>THÔNG TIN TÀI KHOẢN</h3>
			</div>
			<div className='block-content'>
				<div className='row form-group'>
					<div className='col-md-2'>
						<label className='mt-2'>Tên tài khoản:</label>
					</div>
					<div className='col-md-10'>
						<input
							disabled
							type='text'
							className='form-control'
							value={name}
						/>
					</div>
				</div>
				<div className='row form-group'>
					<div className='col-md-2'>
						<label className='mt-2'>Số điện thoại:</label>
					</div>
					<div className='col-md-10'>
						<input
							name='phone'
							disabled
							type='number'
							className='form-control'
							value={phone}
						/>
					</div>
				</div>
				<div className='row form-group'>
					<div className='col-md-2'>
						<label className='mt-2'>Mật khẩu cũ:</label>
					</div>
					<div className='col-md-10'>
						<input
							autoComplete='new-password'
							name='oldPass'
							type='password'
							className='form-control'
							onChange={handleChangeInput}
						/>
					</div>
				</div>

				<div className='row form-group'>
					<div className='col-md-2'>
						<label className='mt-2'>Mật khẩu mới:</label>
					</div>
					<div className='col-md-10'>
						<input
							autoComplete='new-password'
							name='newPass'
							type='password'
							className='form-control'
							onChange={handleChangeInput}
						/>
					</div>
				</div>

				<div className='row form-group'>
					<div className='col-md-2'>
						<label className='mt-2'>Nhập lại mật khẩu mới:</label>
					</div>
					<div className='col-md-10'>
						<input
							autoComplete='new-password'
							name='rePass'
							type='password'
							className='form-control'
							onChange={handleChangeInput}
						/>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col-md-12'>
						<div className='form-group float-right w-100'>
							<button
								onClick={() => handleChangePassword(form)}
								type='button'
								className='btn btn-primary btn-rounded btn-block'
							>
								Lưu
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoUser
