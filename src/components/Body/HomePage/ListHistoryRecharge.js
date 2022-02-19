import React, { useEffect, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import hideName from '../../utils/hideName'
import { timeAgo } from '../../utils/timeAgo'
import formatMoney from '../../utils/formatMoney'
import { getHistoryRecharge } from '../../../redux/actions/historyActions'

const ListHistoryRecharge = () => {
	const dispatch = useDispatch()

	const historyRecharges = useSelector(
		(state) => state.history.historyRecharge
	)

	const fetchHistoryRecharge = useCallback(async () => {
		try {
			const res = await axios.get('/history/get_history_recharge', {
				headers: {
					'Content-Type': 'application/json',
				},
			})

			dispatch(getHistoryRecharge(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchHistoryRecharge()
	}, [fetchHistoryRecharge])

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
								Thời gian
							</th>
						</tr>
					</thead>
					<tbody>
						{historyRecharges.map((historyRecharge, i) => (
							<tr key={i}>
								<th
									scope='row'
									style={{
										textAlign: 'center',
										verticalAlign: 'middle',
									}}
								>
									{hideName(historyRecharge.name_user)}
								</th>

								<td
									style={{
										textAlign: 'left',
										paddingLeft: 20,
									}}
								>
									Nạp {formatMoney(historyRecharge.amount)}{' '}
									VND vào tài khoản
								</td>

								<td>
									{timeAgo.format(
										Date.parse(historyRecharge.date)
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

export default ListHistoryRecharge
