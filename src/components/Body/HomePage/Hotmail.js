import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCartOutlined } from '@ant-design/icons'
import formatMoney from '../../utils/formatMoney'
import axios from 'axios'

const Hotmail = () => {
	const [count, setCount] = useState(undefined)

	const name = useSelector((state) => state.user.user.name)

	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setCount({ ...count, [name]: value })
	}

	const isLogin = !!localStorage.getItem('token')

	let info = useSelector((state) => state.product.infoCategory[0])

	const handleBuyHotmail = async (count) => {
		// const res = await axios.get(
		// 	`/product/buy_hotmail?name=${name}&number=${count}`,
		// 	{
		// 		headers: {
		// 			'auth-token': `${localStorage.getItem('token')}`,
		// 		},
		// 	}
		// )
		// const res = { status: 200, message: 'Buy Hotmail success' }
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

							<td>{info === undefined ? '' : info.country}</td>
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
										onClick={() => handleBuyHotmail(count)}
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

export default Hotmail
