import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCartOutlined } from '@ant-design/icons'
import formatMoney from '../../utils/formatMoney'

const Hotmail = () => {
	const isLogin = !!localStorage.getItem('token')

	let info = useSelector((state) => state.product.infoCategory[0])
	console.log(info)

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
									// name={}
									// value={}
									// onChange={}
								/>
							</td>
							<td>
								{isLogin ? (
									<button
										className='btn btn-primary btn-nw'
										onClick={() => {}}
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
