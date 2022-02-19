import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getHistoryOrder } from '../../../redux/actions/historyActions'
import hideName from '../../utils/hideName'
import formatMoney from '../../utils/formatMoney'
import { timeAgo } from '../../utils/timeAgo'

const ListHistoryOrder = () => {
	const dispatch = useDispatch()

	const historyOrders = useSelector((state) => state.history.historyOrder)

	const fetchHistoryOrder = useCallback(async () => {
		try {
			const res = await axios.get('/history/get_history_order', {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			dispatch(getHistoryOrder(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchHistoryOrder()
	}, [fetchHistoryOrder])

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
						{historyOrders.map((historyOrder, i) => (
							<tr key={i}>
								<th
									scope='row'
									style={{
										textAlign: 'center',
										verticalAlign: 'middle',
									}}
								>
									{hideName(historyOrder.name_user)}
								</th>

								<td
									style={{
										textAlign: 'left',
										paddingLeft: 20,
									}}
								>
									Mua {historyOrder.number_buy}{' '}
									{historyOrder.name_category}
								</td>
								<td>
									{formatMoney(
										historyOrder.number_buy *
											historyOrder.price
									)}{' '}
									VND
								</td>
								<td>
									{timeAgo.format(
										Date.parse(historyOrder.date)
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ListHistoryOrder
