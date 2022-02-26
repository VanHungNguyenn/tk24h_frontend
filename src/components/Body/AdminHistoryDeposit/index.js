import React, { useEffect, useCallback } from 'react'
import { Table, Statistic, Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { adminGetAllHistoryRecharge } from '../../../redux/actions/adminActions'
import formatMoney from '../../utils/formatMoney'

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'User',
		dataIndex: 'name',
		key: 'name',
		sorter: (a, b) => a.name.localeCompare(b.name),
	},
	{
		title: 'Content',
		dataIndex: 'content',
		key: 'content',
		sorter: (a, b) => a.content.localeCompare(b.content),
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		key: 'amount',
		sorter: (a, b) => a.amount - b.amount,
		render: (amount) => formatMoney(amount) + ' VND',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
	},
]

const AdminHistoryDeposit = () => {
	const dispatch = useDispatch()

	const allHistoryRecharge = useSelector(
		(state) => state.admin.allHistoryRecharge
	)

	const fetchAllHistoryRecharge = useCallback(async () => {
		try {
			const res = await axios.get(
				'/history/admin_get_all_recharge_user',
				{
					headers: {
						'Content-Type': 'application/json',
						'auth-token': localStorage.getItem('token'),
					},
				}
			)

			dispatch(adminGetAllHistoryRecharge(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchAllHistoryRecharge()
	}, [fetchAllHistoryRecharge])

	let totalAmount = 0

	const data = allHistoryRecharge.map((item, index) => {
		totalAmount += item.amount

		return {
			id: index + 1,
			name: item.name_user,
			content: item.content,
			amount: item.amount,
			date: item.date,
		}
	})

	return (
		<>
			<Card style={{ width: 300, marginBottom: 20 }}>
				<Statistic
					title='Total'
					value={formatMoney(totalAmount) + ' VND'}
				/>
			</Card>
			<Table
				columns={columns}
				dataSource={data}
				bordered={true}
				loading={allHistoryRecharge.length === 0}
			/>
		</>
	)
}

export default AdminHistoryDeposit
