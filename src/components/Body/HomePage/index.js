import React from 'react'

import Facebook from './Facebook'
import Hotmail from './Hotmail'
import Outlook from './Outlook'
import Gmail from './Gmail'
import Tiktok from './Tiktok'

import ListHistoryOrder from './ListHistoryOrder'
import ListHistoryRecharge from './ListHistoryRecharge'

import LoginOrRegister from './LoginOrRegister'

const HomePage = () => {
	return (
		<>
			{/* Form login / register */}
			<LoginOrRegister />
			{/* Quang cao */}
			<div className='homepage__title'>
				<h2 style={{ textAlign: 'center' }}>DANH SÁCH TÀI KHOẢN</h2>
				<p style={{ textAlign: 'center', fontStyle: 'italic' }}>
					TK24H.COM cung cấp tài khoản quảng cáo Facebook: Tài khoản
					Cá nhân (VIA, CLONE) - Mail verify (HOTMAIL, GMAIL) -
					Tiktok...
				</p>
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
						<Hotmail />
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
						<Outlook />
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
						<Tiktok />
					</div>
				</div>
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
						<Gmail />
					</div>
				</div>
			</div>

			{/* Lich su order */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								LỊCH SỬ ORDER
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<ListHistoryOrder />
					</div>
				</div>
			</div>

			{/* Lich su order */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								LỊCH SỬ NẠP TIỀN
							</span>
						</h3>
					</div>
					<div className='block-content'>
						<ListHistoryRecharge />
					</div>
				</div>
			</div>
			{/* Chinh sach he thong */}
			<div className='block block-rounded block-bordered'>
				<div className='custom_content' style={{ paddingTop: '0px' }}>
					<div className='block-header block-header-default border-bottom'>
						<h3 className='block-title'>
							<span className='text-muted font-bold'>
								CHÍNH SÁCH CỦA HỆ THỐNG
							</span>
						</h3>
					</div>
					<div
						className='block-content'
						style={{ background: '#cde0f6' }}
					>
						<ul style={{ marginBottom: '0px' }}>
							<li>
								Khi mua via hệ thống đã check live acc rồi xuất
								cho bạn (nick có 2fa) nên bạn nào hiểu rõ hãy
								dùng tránh khiếu nại hệ thống
							</li>
							<li>
								Nên login ở dạng{' '}
								<a
									href='https://m.facebook.com'
									target='_blank'
									rel='noreferrer'
								>
									m.facebook.com
								</a>{' '}
								để hạn chế checkpoint vì acc khi xuất ra đã
								check live trước khi xuất!
							</li>
							<li>
								Vui lòng đọc kỹ chính sách bảo hành trước khi
								mua tài khoản trên hệ thống TK24H.com. Mọi
								trường hợp cố tình gian lận bảo hành sẽ bị khoá
								tài khoản trên hệ thống vĩnh viễn.
							</li>
							<li>
								Tất cả tài nguyên trên website chỉ phục vụ với
								mục đích QUẢNG CÁO. Tất cả hành vi sử dụng vi
								phạm nào trái pháp luật Việt Nam, chúng tôi đều
								không chịu bất cứ trách nhiệm nào!
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage
