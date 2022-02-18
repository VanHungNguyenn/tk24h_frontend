import React from 'react'
import { Table } from 'antd'

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

const data = [
	{
		id: 1,
		content: 'Nạp tiền vào tài khoản',
		amount: '100.000 VND',
		date: '17/02/2022',
	},
	{
		id: 2,
		content: 'Nạp tiền vào tài khoản',
		amount: '120.000 VND',
		date: '10/02/2022',
	},
	{
		id: 3,
		content: 'Nạp tiền vào tài khoản',
		amount: '130.000 VND',
		date: '18/02/2022',
	},
]

const HistoryDeposit = () => {
	return <Table columns={columns} dataSource={data} bordered={true} />
}

export default HistoryDeposit
