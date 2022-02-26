import React, { useEffect, useCallback } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
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
import MessengerCustomerChat from 'react-messenger-customer-chat'

import AdminManageUser from './AdminManageUser'
import AdminManageProduct from './AdminManageProduct'
import AdminManageCategory from './AdminManageCategory'
import AdminTutorialAPI from './AdminTutorialAPI'
import AdminHistoryBuy from './AdminHistoryBuy'
import AdminHistoryDeposit from './AdminHistoryDeposit'

const tabAdmin = (isLogin) => (
	<>
		{isLogin && (
			<>
				<li className='nav-item'>
					<NavLink
						to='/admin_user'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-user text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Manage user
						</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/admin_category'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-book-open text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Manage category
						</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/admin_product'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-book-open text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							Manage product
						</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/admin_tutorial'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon fas fa-tape text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>API</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/admin_historybuy'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon fas fa-shopping-bag text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							History Buy
						</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						to='/admin_historydeposit'
						className='nav-link text-body-color py-4'
					>
						<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
						<span className='d-none d-md-inline ml-1'>
							History Deposit
						</span>
					</NavLink>
				</li>
			</>
		)}
	</>
)

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
				<i className='nav-main-link-icon fas fa-address-book text-gray pr-1'></i>
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

function PrivateRoute({ component: Component, authed, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				authed === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	)
}

const Body = () => {
	const dispatch = useDispatch()
	const balance = useSelector((state) => state.user.user.balance)
	const adminActive = useSelector((state) => state.user.adminActive)

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
						{adminActive ? (
							<>
								<ul className='nav nav-tabs nav-tabs-alt border-bottom-0 justify-content-center justify-content-md-start'>
									{tabAdmin(isLogin)}
								</ul>
							</>
						) : (
							<>
								<ul className='nav nav-tabs nav-tabs-alt border-bottom-0 justify-content-center justify-content-md-start'>
									{tabUser(isLogin, balance)}
								</ul>
							</>
						)}
					</div>
				</div>
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/contact' component={Contact} />
						<PrivateRoute
							exact
							path='/recharge'
							component={ReCharge}
							authed={isLogin}
						/>

						<PrivateRoute
							path='/tutorial'
							component={Tutorial}
							authed={isLogin}
						/>
						<PrivateRoute
							path='/historybuy'
							component={HistoryBuy}
							authed={isLogin}
						/>
						<PrivateRoute
							path='/historydeposit'
							component={HistoryDeposit}
							authed={isLogin}
						/>
						<PrivateRoute
							path='/info_user'
							component={InfoUser}
							authed={isLogin}
						/>

						<PrivateRoute
							path='/admin_user'
							component={AdminManageUser}
							authed={adminActive}
						/>
						<PrivateRoute
							path='/admin_product'
							component={AdminManageProduct}
							authed={adminActive}
						/>
						<PrivateRoute
							path='/admin_category'
							component={AdminManageCategory}
							authed={adminActive}
						/>
						<PrivateRoute
							path='/admin_tutorial'
							component={AdminTutorialAPI}
							authed={adminActive}
						/>
						<PrivateRoute
							path='/admin_historybuy'
							component={AdminHistoryBuy}
							authed={adminActive}
						/>
						<PrivateRoute
							path='/admin_historydeposit'
							component={AdminHistoryDeposit}
							authed={adminActive}
						/>
						<Route component={NotFound} />
					</Switch>
					<MessengerCustomerChat
						pageId='103014442260353'
						appId='323695346239067'
					/>
				</div>
			</main>
		</>
	)
}

export default Body
