import React from 'react'
import columnAPI from './columnAPI'
import { useSelector } from 'react-redux'

function GetAPI(props) {
	const key = useSelector((state) => state.user.user.key)

	return (
		<div className='block block-rounded block-bordered'>
			<div className='block-header block-header-default border-bottom'>
				<h3 className='block-title'>API</h3>
			</div>
			<div className='block-content'>
				<div className='input-group mb-3'>
					<span className='input-group-text'>KEY: </span>
					<input
						type='text'
						className='form-control'
						placeholder='Secret key'
						aria-label='SecretKey'
						disabled
						defaultValue={key}
					/>
				</div>
				<div className='api_tutorial'>
					<h5>Hướng dẫn sử dụng: </h5>
					<h6 style={{ marginBottom: 10 }}>Mua Hotmail: </h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Secret key'
							aria-label='SecretKey'
							disabled
							defaultValue='http://tk24h.com/api/auto/buy_hotmail?key=<KEY>&number=<NUMBER>'
						/>
					</div>
					<h6 style={{ marginBottom: 10 }}>Mua Gmail: </h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Secret key'
							aria-label='SecretKey'
							disabled
							defaultValue='http://tk24h.com/api/auto/buy_gmail?key=<KEY>&number=<NUMBER>'
						/>
					</div>
					<h6 style={{ marginBottom: 10 }}>Mua Facebook: </h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Secret key'
							aria-label='SecretKey'
							disabled
							defaultValue='http://tk24h.com/api/auto/buy_facebook?key=<KEY>&number=<NUMBER>'
						/>
					</div>
					<h6 style={{ marginBottom: 10 }}>Mua Tiktok: </h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Secret key'
							aria-label='SecretKey'
							disabled
							defaultValue='http://tk24h.com/api/auto/buy_tiktok?key=<KEY>&number=<NUMBER>'
						/>
					</div>
					<h6 style={{ marginBottom: 10 }}>Mua Outlook: </h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Secret key'
							aria-label='SecretKey'
							disabled
							defaultValue='http://tk24h.com/api/auto/buy_outlook?key=<KEY>&number=<NUMBER>'
						/>
					</div>
					<h6 style={{ marginBottom: 10 }}>
						Kiểm tra tài khoản account:{' '}
					</h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Check account'
							aria-label='CheckAccount'
							disabled
							defaultValue='http://tk24h.com/api/auto/check_balance?key=<KEY>'
						/>
					</div>
					<h6
						style={{
							marginBottom: 10,
						}}
					>
						Kiểm tra số lượng sản phẩm có thể mua:{' '}
					</h6>
					<div className='input-group mb-3'>
						<span className='input-group-text'>GET: </span>
						<input
							type='text'
							className='form-control'
							placeholder='Check amount'
							aria-label='CheckAmount'
							disabled
							defaultValue='http://tk24h.com/api/auto/check_amount?id=<ID>'
						/>
					</div>
					<div className='table-responsive' style={{ marginTop: 20 }}>
						<table className='table table-striped table-bordered table-hover table-sm'>
							<thead className='thead-dark'>
								<tr>
									<th scope='col' style={{ width: 110 }}>
										Tham số
									</th>

									<th scope='col' style={{ width: 100 }}>
										Dữ liệu
									</th>
									<th scope='col'>Ví dụ</th>
									<th scope='col'>Chú thích</th>
								</tr>
							</thead>
							<tbody>
								{columnAPI.map((item, i) => {
									return (
										<tr key={i}>
											<th
												scope='row'
												style={{
													textAlign: 'center',
													verticalAlign: 'middle',
												}}
											>
												{item.variable}
											</th>

											<td>{item.type}</td>

											<td>{item.example}</td>

											<td>{item.note}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GetAPI
