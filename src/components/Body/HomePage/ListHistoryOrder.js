import React from 'react'

const ListHistoryOrder = () => {
	return (
		<>
			<div className='table-responsive'>
				<table className='table table-striped table-bordered table-hover table-sm'>
					<thead className='thead-dark'>
						<tr>
							<th scope='col' style={{ width: 160 }}>
								Người mua
							</th>

							<th scope='col'>Logs</th>
							<th scope='col' style={{ width: 120 }}>
								Giá
							</th>
							<th scope='col' style={{ width: 120 }}>
								Thời gian
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th
								scope='row'
								style={{
									textAlign: 'center',
									verticalAlign: 'middle',
								}}
							>
								nguyenvan****
							</th>

							<td
								style={{
									textAlign: 'left',
									paddingLeft: 20,
								}}
							>
								Mua 20 Facebook ABC
							</td>
							<td>200.000 VNĐ</td>
							<td>18/02/2021</td>
						</tr>
						<tr>
							<th
								scope='row'
								style={{
									textAlign: 'center',
									verticalAlign: 'middle',
								}}
							>
								luongduct****
							</th>

							<td
								style={{
									textAlign: 'left',
									paddingLeft: 20,
								}}
							>
								Mua 20 Facebook ABC
							</td>
							<td>200.000 VNĐ</td>
							<td>18/02/2021</td>
						</tr>
						<tr>
							<th
								scope='row'
								style={{
									textAlign: 'center',
									verticalAlign: 'middle',
								}}
							>
								lebach****
							</th>

							<td
								style={{
									textAlign: 'left',
									paddingLeft: 20,
								}}
							>
								Mua 20 Facebook ABC
							</td>
							<td>200.000 VNĐ</td>
							<td>18/02/2021</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListHistoryOrder
