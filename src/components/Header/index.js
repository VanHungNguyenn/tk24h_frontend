/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import img_user from '../../assets/avatar12.jpg'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getUser, switchAdmin } from '../../redux/actions/userActions'
import { Logout } from '../../redux/actions/historyActions'

const Header = () => {
	const dispatch = useDispatch()

	const user = useSelector((state) => state.user.user)
	const isAdmin = useSelector((state) => state.user.isAdmin)
	const adminActive = useSelector((state) => state.user.adminActive)

	const isLogin = localStorage.getItem('token')

	const domainSite = window.location.hostname

	const [isOpenMenuProfile, setIsOpenMenuProfile] = useState(false)

	const handleClickMenuProfile = () => {
		setIsOpenMenuProfile(!isOpenMenuProfile)
	}

	const handleSwitchAdmin = () => {
		if (isAdmin) {
			dispatch(switchAdmin())
		}
	}

	const dropdownMenuBlur = (e) => {
		if (e.relatedTarget === null) {
			setIsOpenMenuProfile(false)
		}
	}

	const handleLogout = () => {
		try {
			localStorage.removeItem('token')
			dispatch(getUser())
			dispatch(Logout())

			window.location.href = '/'
		} catch (error) {
			window.location.href = '/'
		}
	}

	const getInfoUser = useCallback(async () => {
		try {
			const res = await axios.get('/user/info', {
				headers: {
					'auth-token': `${localStorage.getItem('token')}`,
				},
			})

			dispatch(getUser(res.data))
		} catch (error) {
			console.log(error.message)
		}
	}, [dispatch])

	useEffect(() => {
		if (isLogin) {
			getInfoUser()
		}
	}, [isLogin, getInfoUser])

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
				{isLogin && (
					<div>
						<div className='dropdown d-inline-block'>
							<div
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
							</div>
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
									<a
										className='font-w600 text-blue fst-italic'
										href='#'
									>
										{user.name}
									</a>

									<div className='font-size-sm text-muted fst-italic'>
										ID: {user.id_user}
									</div>
									<div className='font-size-sm text-muted fst-italic'>
										Phone: {user.phone}
									</div>
								</div>
								{isAdmin && (
									<div className='p-2'>
										<span
											className=''
											onClick={handleSwitchAdmin}
										>
											{adminActive ? (
												<Link
													className='dropdown-item mb-0'
													to='/'
												>
													<i className='fa fa-fw fa-cog text-gray mr-2'></i>
													Chuy???n ?????n trang User
												</Link>
											) : (
												<Link
													className='dropdown-item mb-0'
													to='/admin_user'
												>
													<i className='fa fa-fw fa-cog text-gray mr-2'></i>
													Chuy???n ?????n trang Admin
												</Link>
											)}
										</span>
									</div>
								)}

								<div className='p-2'>
									<span className='' onClick={handleLogout}>
										<Link
											className='dropdown-item mb-0'
											to='/'
										>
											<i className='fa fa-fw fa-arrow-alt-circle-left text-gray mr-2'></i>
											????ng xu???t
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
