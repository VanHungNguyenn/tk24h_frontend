import React from 'react'
import { Table, Button } from 'antd'

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
		render: () => (
			<>
				<Button type='primary'>Xem</Button>
			</>
		),
	},
	{
		title: 'Hành động',
		render: () => (
			<>
				<Button type='primary'>Tải xuống</Button>
			</>
		),
	},
]

const data = [
	{
		id: 1,
		category: 'Facebook ABC',
		number_buy: '100',
		deposit: '100.000 VND',
		date: '17/02/2022',
		data: '',
	},
	{
		id: 2,
		category: 'Facebook ABC',
		number_buy: '120',
		deposit: '120.000 VND',
		date: '10/02/2022',
		data: '',
	},
	{
		id: 3,
		category: 'Facebook ABC',
		number_buy: '130',
		deposit: '130.000 VND',
		date: '18/02/2022',
		data: '',
	},
]

const HistoryBuy = () => {
	return <Table columns={columns} dataSource={data} bordered={true} />
}

export default HistoryBuy
