import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCartOutlined } from '@ant-design/icons'
import formatMoney from '../../utils/formatMoney'
import axios from 'axios'
import { showSuccessModal, showErrorModal } from '../../utils/Modal'

import { getUser } from '../../../redux/actions/userActions'
import { getInfoCategory } from './../../../redux/actions/productActions'

const Facebook = () => {
	const [count, setCount] = useState(0)
	const dispatch = useDispatch()
	const name = useSelector((state) => state.user.user.name)

	const handleChangeInput = (e) => {
		const value = e.target.value
		setCount({
			...count,
			[e.target.name]: value,
		})
	}

	const isLogin = !!localStorage.getItem('token')

	let facebook = useSelector((state) => state.product.infoCategory[3])
	let facebookClone = useSelector((state) => state.product.infoCategory[5])
	let facebookClone2 = useSelector((state) => state.product.infoCategory[7])

	const handleBuyFacebook = async (count) => {
		try {
			const res = await axios.get(
				`/product/buy_facebook?name=${name}&number=${count['']}`,
				{
					headers: {
						'auth-token': `${localStorage.getItem('token')}`,
					},
				}
			)

			if (res.status === 200) {
				if (res.data.data.length > 50) {
					showSuccessModal(
						'Bạn đã mua thành công, vui lòng vào phần "Lịch sử mua" để xem chi tiết',
						'Mua thành công'
					)
				} else {
					showSuccessModal(
						res.data.data.map((item, i) => {
							return (
								<p key={i} style={{ margin: '0' }}>
									{item}
								</p>
							)
						}),
						'Mua thành công'
					)
				}
			}

			const ress = await axios.get('/user/info', {
				headers: {
					'auth-token': `${localStorage.getItem('token')}`,
				},
			})

			dispatch(getUser(ress.data))

			const resss = await axios.get('/category/get_info', {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			dispatch(getInfoCategory(resss.data.data))
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleBuyFacebookClone = async (count) => {
		try {
			const res = await axios.get(
				`/product/buy_facebook_clone?name=${name}&number=${count['']}`,
				{
					headers: {
						'auth-token': `${localStorage.getItem('token')}`,
					},
				}
			)

			if (res.status === 200) {
				if (res.data.data.length > 50) {
					showSuccessModal(
						'Bạn đã mua thành công, vui lòng vào phần "Lịch sử mua" để xem chi tiết',
						'Mua thành công'
					)
				} else {
					showSuccessModal(
						res.data.data.map((item, i) => {
							return (
								<p key={i} style={{ margin: '0' }}>
									{item}
								</p>
							)
						}),
						'Mua thành công'
					)
				}
			}

			const ress = await axios.get('/user/info', {
				headers: {
					'auth-token': `${localStorage.getItem('token')}`,
				},
			})

			dispatch(getUser(ress.data))

			const resss = await axios.get('/category/get_info', {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			dispatch(getInfoCategory(resss.data.data))
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleBuyFacebookClone2 = async (count) => {
		try {
			const res = await axios.get(
				`/product/buy_facebook_clone2?name=${name}&number=${count['']}`,
				{
					headers: {
						'auth-token': `${localStorage.getItem('token')}`,
					},
				}
			)

			if (res.status === 200) {
				if (res.data.data.length > 50) {
					showSuccessModal(
						'Bạn đã mua thành công, vui lòng vào phần "Lịch sử mua" để xem chi tiết',
						'Mua thành công'
					)
				} else {
					showSuccessModal(
						res.data.data.map((item, i) => {
							return (
								<p key={i} style={{ margin: '0' }}>
									{item}
								</p>
							)
						}),
						'Mua thành công'
					)
				}
			}

			const ress = await axios.get('/user/info', {
				headers: {
					'auth-token': `${localStorage.getItem('token')}`,
				},
			})

			dispatch(getUser(ress.data))

			const resss = await axios.get('/category/get_info', {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			dispatch(getInfoCategory(resss.data.data))
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	return (
		<>
			<div className='table-responsive'>
				<table className='table table-striped table-bordered table-hover table-sm'>
					<thead className='thead-dark'>
						<tr>
							<th scope='col' style={{ width: 50 }}>
								Id
							</th>
							<th scope='col'>Tên sản phẩm</th>

							<th scope='col' style={{ width: 80 }}>
								Quốc gia
							</th>
							<th scope='col' style={{ width: 80 }}>
								Hiện có
							</th>
							<th scope='col' style={{ width: 110 }}>
								Đơn giá
							</th>
							<th scope='col' style={{ width: 100 }}>
								Số lượng
							</th>
							<th
								scope='col'
								className='align-middle'
								style={{ width: 130 }}
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>
									{facebook === undefined
										? ''
										: facebook.id_category}
								</span>
							</td>

							<td>
								<h4
									style={{
										fontSize: '16px',
										display: 'flex',
										alignItems: 'center',
										marginBottom: 0,
										fontWeight: 400,
									}}
								>
									{facebook === undefined
										? ''
										: facebook.name}
								</h4>
							</td>

							<td>
								<span
									className={`flag-icon flag-icon-${
										facebook === undefined
											? ''
											: facebook.country
									}`}
								></span>
							</td>
							<td className='text-danger'>
								{facebook === undefined ? '' : facebook.count}
							</td>
							<td style={{ color: 'blue' }}>
								{facebook === undefined
									? ''
									: formatMoney(facebook.price)}{' '}
								VND
							</td>
							<td>
								<input
									type='number'
									className='form-control'
									disabled={!isLogin}
									onChange={handleChangeInput}
								/>
							</td>
							<td>
								{isLogin ? (
									<button
										className='btn btn-primary btn-nw'
										onClick={() => handleBuyFacebook(count)}
									>
										<ShoppingCartOutlined
											style={{
												fontSize: '16px',
												verticalAlign: '0.125em',
											}}
										/>{' '}
										Mua
									</button>
								) : (
									<span className='text-danger font-bold'>
										Đăng nhập để mua
									</span>
								)}
							</td>
						</tr>
						<tr>
							<td>
								<span>
									{facebookClone === undefined
										? ''
										: facebookClone.id_category}
								</span>
							</td>

							<td>
								<h4
									style={{
										fontSize: '16px',
										display: 'flex',
										alignItems: 'center',
										marginBottom: 0,
										fontWeight: 400,
									}}
								>
									{facebookClone === undefined
										? ''
										: facebookClone.name}
								</h4>
							</td>

							<td>
								<span
									className={`flag-icon flag-icon-${
										facebookClone === undefined
											? ''
											: facebookClone.country
									}`}
								></span>
							</td>
							<td className='text-danger'>
								{facebookClone === undefined
									? ''
									: facebookClone.count}
							</td>
							<td style={{ color: 'blue' }}>
								{facebookClone === undefined
									? ''
									: formatMoney(facebookClone.price)}{' '}
								VND
							</td>
							<td>
								<input
									type='number'
									className='form-control'
									disabled={!isLogin}
									onChange={handleChangeInput}
								/>
							</td>
							<td>
								{isLogin ? (
									<button
										className='btn btn-primary btn-nw'
										onClick={() =>
											handleBuyFacebookClone(count)
										}
										disabled
									>
										<ShoppingCartOutlined
											style={{
												fontSize: '16px',
												verticalAlign: '0.125em',
											}}
										/>{' '}
										Mua
									</button>
								) : (
									<span className='text-danger font-bold'>
										Đăng nhập để mua
									</span>
								)}
							</td>
						</tr>
						<tr>
							<td>
								<span>
									{facebookClone2 === undefined
										? ''
										: facebookClone2.id_category}
								</span>
							</td>

							<td>
								<h4
									style={{
										fontSize: '16px',
										display: 'flex',
										alignItems: 'center',
										marginBottom: 0,
										fontWeight: 400,
									}}
								>
									{facebookClone2 === undefined
										? ''
										: facebookClone2.name}
								</h4>
							</td>

							<td>
								<span
									className={`flag-icon flag-icon-${
										facebookClone2 === undefined
											? ''
											: facebookClone2.country
									}`}
								></span>
							</td>
							<td className='text-danger'>
								{facebookClone2 === undefined
									? ''
									: facebookClone2.count}
							</td>
							<td style={{ color: 'blue' }}>
								{facebookClone2 === undefined
									? ''
									: formatMoney(facebookClone2.price)}{' '}
								VND
							</td>
							<td>
								<input
									type='number'
									className='form-control'
									disabled={!isLogin}
									onChange={handleChangeInput}
								/>
							</td>
							<td>
								{isLogin ? (
									<button
										className='btn btn-primary btn-nw'
										onClick={() =>
											handleBuyFacebookClone2(count)
										}
									>
										<ShoppingCartOutlined
											style={{
												fontSize: '16px',
												verticalAlign: '0.125em',
											}}
										/>{' '}
										Mua
									</button>
								) : (
									<span className='text-danger font-bold'>
										Đăng nhập để mua
									</span>
								)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Facebook
