import React from 'react'
import facebookLogo from '../../../assets/images/fb_logo.png'
import telegramLogo from '../../../assets/images/tele_logo.png'
import zaloLogo from '../../../assets/images/zalo_logo.png'
import './Contact.css'

const Contact = () => {
	return (
		<div className='block block-rounded block-bordered'>
			<div className='row'>
				<div className='col-lg-4 col-md-6'>
					<a
						href='https://www.facebook.com/groups/1151714455363837'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='contact__container'>
							<img
								src={facebookLogo}
								alt='facebook logo'
								className='contact__img'
							/>
						</div>
					</a>
				</div>
				<div className='col-lg-4 col-md-6'>
					<a
						href='https://zalo.me/g/jwxpuj071'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='contact__container'>
							<img
								src={zaloLogo}
								alt='zalo logo'
								className='contact__img'
							/>
						</div>
					</a>
				</div>
				<div className='col-lg-4 col-md-6'>
					<a
						href='https://t.me/hotrotk24h/2'
						target='_blank'
						rel='noopener noreferrer'
					>
						<div className='contact__container'>
							<img
								src={telegramLogo}
								alt='telegram logo'
								className='contact__img'
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contact
