import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCartOutlined } from '@ant-design/icons'
import formatMoney from '../../utils/formatMoney'
import axios from 'axios'
import { showErrorMsg, showSuccessMsg } from '../../utils/Notification'
import { getUser } from '../../../redux/actions/userActions'
import { getInfoCategory } from './../../../redux/actions/productActions'

const Outlook = () => {
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

	const handleBuyOutlook = async (count) => {
		try {
			const res = await axios.get(
				`/product/buy_outlook?name=${name}&number=${count['']}`,
				{
					headers: {
						'auth-token': `${localStorage.getItem('token')}`,
					},
				}
			)

			if (res.status === 200) {
				showSuccessMsg(res.data.message)
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
			showErrorMsg(error.response.data.message)
		}
	}

	const isLogin = !!localStorage.getItem('token')

	let info = useSelector((state) => state.product.infoCategory[1])

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
									{info === undefined ? '' : info.id_category}
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
									{info === undefined ? '' : info.name}
								</h4>
							</td>

							<td>
								<span
									className={`flag-icon flag-icon-${
										info === undefined ? '' : info.country
									}`}
								></span>
								{/* {info === undefined ? '' : info.country} */}
							</td>
							<td className='text-danger'>
								{info === undefined ? '' : info.count}
							</td>
							<td style={{ color: 'blue' }}>
								{info === undefined
									? ''
									: formatMoney(info.price)}{' '}
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
										onClick={() => handleBuyOutlook(count)}
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

export default Outlook
