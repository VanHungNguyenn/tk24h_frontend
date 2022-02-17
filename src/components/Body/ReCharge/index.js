import React from 'react'
import techcombankLogo from '../../../assets/images/techcombank-logo.png'
import momoLogo from '../../../assets/images/momo.png'
import './ReCharge.css'

const ReCharge = () => {
	return (
		<div className='block block-rounded block-bordered'>
			<div className='row '>
				<div className='col-lg-6 recharge__container'>
					<img src={techcombankLogo} alt='techcombank' />
					<div className='title'>
						Card number:
						<div className='info ml-2'>19032725317018</div>
					</div>
					<div className='title'>
						Account:
						<div className='info ml-2'>LE BACH HIEP</div>
					</div>
					<div className='title'>
						Bank:
						<div className='info ml-2'>TECHCOMBANK</div>
					</div>
					<div className='title'>
						Content:
						<div className='info ml-2'>tk24h nguyenvanhung</div>
					</div>
				</div>
				<div className='col-lg-6 recharge__container'>
					<img src={momoLogo} alt='momo' />
					<div className='title'>
						Phone number:
						<div className='info ml-2'>0829999181</div>
					</div>
					<div className='title'>
						Account:
						<div className='info ml-2'>LE BACH HIEP</div>
					</div>
					<div className='title'>
						Wallet:
						<div className='info ml-2'>MOMO</div>
					</div>
					<div className='title'>
						Content:
						<div className='info ml-2'>tk24h nguyenvanhung</div>
					</div>
				</div>
				<div className='col-lg-12'>
					<div className='recharge__note'>
						<div className='note'>
							Note 1: Chuyển khoản sai nội dung sẽ mất đến 48h để
							xử lý!
						</div>
						<div className='note'>
							Note 2: Không hoàn lại số tiền nạp vào hệ thống với
							bất kì lý do nào!
						</div>
						<div className='note'>
							Note 3: ghi đúng nội dung chuyển khoản như bên trên
							(ví dụ: tk24h nguyenvana). Bất cứ sai sót nào cũng
							có thể dẫn đến mất tiền (nạp sai cú pháp phí trừ nạp
							sai 10% số tiền nạp).
						</div>
						<div className='note'>
							Note 4: Các trường hợp cần khẩn cấp vui lòng inbox
							Zalo hoặc gọi trực tiếp số 0829 999 181 để được hỗ
							trợ nhanh nhất.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReCharge
