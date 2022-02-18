import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Tiktok = () => {
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
								style={{ width: 100 }}
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<span>3</span>
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
									Tiktok - Lorem ipsum dolor sit amet.
								</h4>
							</td>

							<td>Flag</td>
							<td className='text-danger'>2000</td>
							<td style={{ color: 'blue' }}>25.000 VND</td>
							<td>
								<input
									type='number'
									className='form-control'
									// name={}
									// value={}
									// onChange={}
								/>
							</td>
							<td>
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
								{/* <span className='text-danger font-bold'>
									Đăng nhập để mua
								</span> */}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Tiktok
