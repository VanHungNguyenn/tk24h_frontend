import React from 'react'

import Facebook from './Facebook'

const HomePage = () => {
	return (
		<>
			<div className='homepage__title'>
				<h2 style={{ textAlign: 'center' }}>DANH SÁCH TÀI KHOẢN</h2>
				<p style={{ textAlign: 'center', fontStyle: 'italic' }}>
					TK24H.COM cung cấp tài khoản quảng cáo Facebook: Tài khoản
					Cá nhân (VIA, CLONE) - Mail verify (HOTMAIL, GMAIL) -
					Tiktok...
				</p>
			</div>
			{/* Danh sach facebook */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								TÀI KHOẢN FACEBOOK
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<Facebook />
					</div>
				</div>
			</div>
			{/* Danh sach hotmail */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								TÀI KHOẢN HOTMAIL
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<Facebook />
					</div>
				</div>
			</div>

			{/* Danh sach outlook */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								TÀI KHOẢN OUTLOOK
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<Facebook />
					</div>
				</div>
			</div>

			{/* Danh sach gmail */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								TÀI KHOẢN GMAIL
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<Facebook />
					</div>
				</div>
			</div>

			{/* Danh sach tiktok */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								TÀI KHOẢN TIKTOK
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<Facebook />
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
