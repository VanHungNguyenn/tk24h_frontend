import React, { useEffect, useCallback } from 'react'
import { Table, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { adminGetAllHistoryOrder } from '../../../redux/actions/adminActions'
import formatMoney from '../../utils/formatMoney'
import download from '../../utils/downloadData'

const columns = [
	{
		title: 'STT',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Category',
		dataIndex: 'category',
		key: 'category',
		sorter: (a, b) => a.category.localeCompare(b.category),
	},
	{
		title: 'Number',
		dataIndex: 'number',
		key: 'number',
		sorter: (a, b) => a.number - b.number,
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Action',
		dataIndex: 'data',
		key: 'data',
		render: (data) => {
			var content = ''

			data.forEach((item, i) => {
				content += item + '\n'
			})

			var file = String(Date.now()) + '.txt'

			return (
				<>
					<Button
						type='primary'
						onClick={() => download(content, file, 'text/plain')}
					>
						Tải xuống
					</Button>
				</>
			)
		},
	},
]

const AdminHistoryBuy = () => {
	const dispatch = useDispatch()

	const allHistoryOrder = useSelector((state) => state.admin.allHistoryOrder)

	const fetchAllHistoryOrder = useCallback(async () => {
		try {
			const res = await axios.get('/history/admin_get_all_sale_user', {
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			})

			dispatch(adminGetAllHistoryOrder(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchAllHistoryOrder()
	}, [fetchAllHistoryOrder])

	const data = allHistoryOrder.map((item, i) => {
		return {
			id: i + 1,
			name: item.name_user,
			category: item.name_category,
			number: item.number_buy,
			price: formatMoney(item.price * item.number_buy) + ' VND',
			date: item.date,
			data: item.data,
		}
	})

	return (
		<>
			<Table
				columns={columns}
				dataSource={data}
				bordered={true}
				loading={allHistoryOrder.length === 0}
			/>
		</>
	)
}

export default AdminHistoryBuy
