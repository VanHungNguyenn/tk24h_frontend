import React from 'react'

const InfoUser = () => {
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
							value='vanhungnguyen'
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
							type='text'
							className='form-control'
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
							name='old_pass'
							type='password'
							className='form-control'
							// onChange={(e) => {
							// 	this.ChangeInfoUser(e)
							// }}
							// value={old_pass}
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
							name='new_pass'
							type='password'
							className='form-control'
							onChange={(e) => {
								this.ChangeInfoUser(e)
							}}
							// value={new_pass}
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
							name='re_pass'
							type='password'
							className='form-control'
							onChange={(e) => {
								this.ChangeInfoUser(e)
							}}
							// value={re_pass}
						/>
					</div>
				</div>

				<div className='row mt-4'>
					<div className='col-md-12'>
						<div className='form-group float-right w-100'>
							<button
								onClick={() => {}}
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
