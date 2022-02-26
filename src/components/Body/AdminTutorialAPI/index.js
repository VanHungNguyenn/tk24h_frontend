import React from 'react'
import tableAPI from './tableAPI'
import listAPI from './listAPI'
import { useSelector } from 'react-redux'

const AdminTutorialAPI = () => {
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
						aria-label='SecretKey'
						disabled
						defaultValue={key}
					/>
				</div>

				{listAPI.map((item, index) => {
					return (
						<div key={index} className='api__item'>
							<h6 style={{ marginBottom: 10 }}>{item.title}</h6>
							<div className='input-group mb-3'>
								<span className='input-group-text'>
									{item.method}
								</span>
								<input
									type='text'
									className='form-control'
									aria-label={item.title}
									disabled
									defaultValue={item.url}
								/>
							</div>
						</div>
					)
				})}

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
							{tableAPI.map((item, i) => {
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
	)
}

export default AdminTutorialAPI
