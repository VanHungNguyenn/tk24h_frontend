import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import NotFound from '../utils/NotFound'
import HomePage from './HomePage'
import ReCharge from './ReCharge'
import Tutorial from './Tutorial'
import HistoryBuy from './HistoryBuy'
import HistoryDeposit from './HistoryDeposit'
import Contact from './Contact'

const tabUser = (
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
		<li className='nav-item'>
			<NavLink to='/recharge' className='nav-link text-body-color py-4'>
				<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
				<span className='d-none d-md-inline ml-1'>Nạp tiền</span>
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
				<span className='d-none d-md-inline ml-1'>Lịch sử mua</span>
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
		<li className='nav-item'>
			<NavLink to='/contact' className='nav-link text-body-color py-4'>
				<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
				<span className='d-none d-md-inline ml-1'>Liên hệ</span>
			</NavLink>
		</li>

		<li className='nav-item'>
			<div className='nav-link text-body-color py-4'>
				<i className='nav-main-link-icon si si-wallet text-gray pr-1'></i>
				<span className='d-none d-md-inline ml-1'>
					Số dư: 1.200.000 VNĐ
				</span>
			</div>
		</li>
	</>
)

const Body = (props) => {
	return (
		<>
			<main id='main-container'>
				<div className='bg-white border-bottom'>
					<div className='content py-0'>
						<ul className='nav nav-tabs nav-tabs-alt border-bottom-0 justify-content-center justify-content-md-start'>
							{tabUser}
						</ul>
					</div>
				</div>
				<div className='content'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/recharge' component={ReCharge} />
						<Route path='/tutorial' component={Tutorial} />
						<Route path='/historybuy' component={HistoryBuy} />
						<Route
							path='/historydeposit'
							component={HistoryDeposit}
						/>
						<Route path='/contact' component={Contact} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</main>
		</>
	)
}

export default Body
