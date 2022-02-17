/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img_user from '../../assets/avatar12.jpg'

const Header = () => {
	const domainSite = window.location.hostname

	const [isOpenMenuProfile, setIsOpenMenuProfile] = useState(false)

	const handleClickMenuProfile = () => {
		setIsOpenMenuProfile(!isOpenMenuProfile)
	}

	const dropdownMenuBlur = (e) => {
		if (e.relatedTarget === null) {
			setIsOpenMenuProfile(false)
		}
	}

	return (
		<header id='page-header'>
			<div className='content-header'>
				<div>
					<Link className='font-size-lg text-dual' to='/'>
						<span className='font-w300 text-dual text-uppercase'>
							{domainSite}
						</span>
					</Link>
				</div>
				<div>
					<div className='dropdown d-inline-block'>
						<Link
							to=''
							className='btn btn-dual'
							id='page-header-user-dropdown'
							aria-haspopup='true'
							aria-expanded='false'
							onClick={handleClickMenuProfile}
							onBlur={(e) => dropdownMenuBlur(e)}
						>
							<img
								className='img-avatar img-avatar32 img-avatar-thumb'
								src={img_user}
								alt=''
							/>
							<i className='fa fa-fw fa-angle-down ml-1'></i>
						</Link>
						<div
							className={
								isOpenMenuProfile
									? 'dropdown-menu dropdown-menu-right p-0 show open-menu-profile-custom'
									: 'dropdown-menu dropdown-menu-right p-0'
							}
							aria-labelledby='page-header-user-dropdown'
						>
							<div className='rounded-top font-w600 text-center p-3 border-bottom'>
								<img
									className='img-avatar img-avatar48'
									src={img_user}
									alt=''
								/>
								<div className='pt-2' />
								<a className='font-w600 text-blue' href='#'>
									NguyenVanHung
								</a>
								{/* <div className='pt-1' /> */}
								<div className='font-size-sm text-muted'>
									ID: 1
								</div>
								<div className='font-size-sm text-muted'>
									Phone: 0332305444
								</div>
							</div>
							<div className='p-2'>
								<span className='' onClick={() => {}}>
									<Link className='dropdown-item mb-0' to='/'>
										<i className='fa fa-fw fa-cog text-gray mr-2'></i>
										Chuyển đến trang Admin
									</Link>
								</span>
							</div>
							<div className='p-2'>
								<span className='' onClick={() => {}}>
									<Link className='dropdown-item mb-0' to='/'>
										<i className='far fa-fw fa-user text-gray mr-2'></i>
										Thông tin tài khoản
									</Link>
								</span>
							</div>
							<div className='p-2'>
								<span className='' onClick={() => {}}>
									<Link className='dropdown-item mb-0' to='/'>
										<i className='fa fa-fw fa-arrow-alt-circle-left text-gray mr-2'></i>
										Đăng xuất
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
