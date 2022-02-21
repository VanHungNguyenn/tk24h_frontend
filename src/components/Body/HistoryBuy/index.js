import React, { useEffect, useCallback } from 'react'
import { Table, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getHistoryOrderUser } from '../../../redux/actions/historyActions'
import formatMoney from '../../utils/formatMoney'
import { showSuccessModal } from '../../utils/Modal'
import download from '../../utils/downloadData'

const columns = [
	{
		title: 'STT',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Loại sản phẩm',
		dataIndex: 'category',
		key: 'category',
	},
	{
		title: 'Số lượng',
		dataIndex: 'number_buy',
		key: 'number_buy',
	},
	{
		title: 'Số tiền',
		dataIndex: 'deposit',
		key: 'deposit',
	},
	{
		title: 'Ngày mua',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Xem chi tiết',
		dataIndex: 'data',
		key: 'data',
		render: (data) => {
			var content = ''

			data.forEach((item, i) => {
				content += item + '\n'
			})

			return (
				<>
					<Button
						type='primary'
						onClick={() =>
							showSuccessModal(content, 'Xem chi tiết')
						}
					>
						Xem
					</Button>
				</>
			)
		},
	},
	{
		title: 'Hành động',
		dataIndex: 'data',
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

const HistoryBuy = () => {
	const dispatch = useDispatch()

	const historyOrderUser = useSelector(
		(state) => state.history.historyOrderUser
	)

	const fetchHistoryOrderUser = useCallback(async () => {
		try {
			const res = await axios.get('/history/get_sale_user', {
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			})

			dispatch(getHistoryOrderUser(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchHistoryOrderUser()
	}, [fetchHistoryOrderUser])

	const data = historyOrderUser.map((item, i) => {
		return {
			id: i + 1,
			category: item.name_category,
			number_buy: item.number_buy,
			deposit: formatMoney(item.price * item.number_buy) + ' VND',
			date: item.date,
			data: item.data,
		}
	})

	return <Table columns={columns} dataSource={data} bordered={true} />
}

export default HistoryBuy
