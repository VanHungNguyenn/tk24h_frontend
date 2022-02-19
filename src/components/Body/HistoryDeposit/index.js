import React, { useEffect, useCallback } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { getHistoryRechargeUser } from '../../../redux/actions/historyActions'
import formatMoney from '../../utils/formatMoney'

const columns = [
	{
		title: 'STT',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Nội dung',
		dataIndex: 'content',
		key: 'content',
	},
	{
		title: 'Tiền nạp',
		dataIndex: 'amount',
		key: 'amount',
	},
	{
		title: 'Ngày nạp',
		dataIndex: 'date',
		key: 'date',
	},
]

const HistoryDeposit = () => {
	const dispatch = useDispatch()

	const historyRechargesUser = useSelector(
		(state) => state.history.historyRechargeUser
	)

	const fetchHistoryRechareUser = useCallback(async () => {
		try {
			const res = await axios.get('/history/get_recharge_user', {
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			})

			dispatch(getHistoryRechargeUser(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchHistoryRechareUser()
	}, [fetchHistoryRechareUser])

	const data = historyRechargesUser.map((item, index) => {
		return {
			id: index + 1,
			content: item.content,
			amount: formatMoney(item.amount) + ' VND',
			date: item.date,
		}
	})

	return <Table columns={columns} dataSource={data} bordered={true} />
}

export default HistoryDeposit
