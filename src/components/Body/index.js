import React, { useEffect, useCallback } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import NotFound from '../utils/NotFound'
import HomePage from './HomePage'
import ReCharge from './ReCharge'
import Tutorial from './Tutorial'
import HistoryBuy from './HistoryBuy'
import HistoryDeposit from './HistoryDeposit'
import Contact from './Contact'
import InfoUser from './InfoUser'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../redux/actions/userActions'
import formatMoney from '../utils/formatMoney'

const tabUser = (isLogin, balance) => (
	<>
		<li className='nav-item'>
			<NavLink
				to='/'
				activeClassName='active'
				className='nav-link text-body-color py-4'
			>
				<i className='nav-main-link-icon si si-home text-gray pr-1'></i>
				<span className='d-none d-md-inline ml-1'>Trang chủ</span>
			</NavLink>
		</li>
		{isLogin && (
			<>
				<li className='nav-item'>
					<NavLink
						to='/recharge'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Nạp tiền
						</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/tutorial'
						id='api'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon fas fa-tape text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>API</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/historybuy'
						id='lichsumua'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-book-open text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Lịch sử mua
						</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/historydeposit'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Lịch sử nạp tiền
						</span>
					</NavLink>
				</li>
			</>
		)}

		<li className='nav-item'>
			<NavLink to='/contact' className='nav-link text-body-color py-4'>
				<i className='nav-main-link-icon si si-book-open text-gray pr-1'></i>
				<span className='d-none d-md-inline ml-1'>Liên hệ</span>
			</NavLink>
		</li>
		{isLogin && (
			<>
				<li className='nav-item'>
					<NavLink
						to='/info_user'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-user text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Tài khoản
						</span>
					</NavLink>
				</li>

				<li className='nav-item'>
					<div className='nav-link text-body-color py-4'>
						<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Số dư: {formatMoney(balance)} VNĐ
						</span>
					</div>
				</li>
			</>
		)}
	</>
)

const Body = () => {
	const dispatch = useDispatch()
	const balance = useSelector((state) => state.user.user.balance)

	const isLogin = !!localStorage.getItem('token')

	const getTokenUser = useCallback(() => {
		const token = localStorage.getItem('token')
		if (token) {
			dispatch(getToken(token))
		}
	}, [dispatch])

	useEffect(() => {
		if (isLogin) {
			getTokenUser()
		}
	}, [isLogin, getTokenUser])

	return (
		<>
			<main id='main-container'>
				<div className='bg-white border-bottom'>
					<div className='content py-0'>
						<ul className='nav nav-tabs nav-tabs-alt border-bottom-0 justify-content-center justify-content-md-start'>
							{tabUser(isLogin, balance)}
						</ul>
					</div>
				</div>
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/contact' component={Contact} />
						<Route exact path='/recharge' component={ReCharge} />

						<Route path='/tutorial' component={Tutorial} />
						<Route path='/historybuy' component={HistoryBuy} />
						<Route
							path='/historydeposit'
							component={HistoryDeposit}
						/>
						<Route path='/info_user' component={InfoUser} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</main>
		</>
	)
}

export default Body
