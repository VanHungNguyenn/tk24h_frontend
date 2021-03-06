import React, { useEffect, useCallback, useState } from 'react'
import { Table, Statistic, Card, Input, Tabs, Space, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import {
	adminGetAllHistoryRecharge,
	adminGetAllHistoryMomo,
	adminGetAllHistoryBank,
} from '../../../redux/actions/adminActions'
import formatMoney from '../../utils/formatMoney'

const { RangePicker } = DatePicker
const { TabPane } = Tabs

const changeDate = (date) => {
	const dateArr = date.split('T')
	const dateArr2 = dateArr[0].split('-')
	const dateArr3 = dateArr2[2] + '/' + dateArr2[1] + '/' + dateArr2[0]
	return dateArr3
}

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
		render: (date) => changeDate(date),
	},
]

const columnsMomoandBank = [
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
		title: 'Comment',
		dataIndex: 'comment',
		key: 'comment',
		sorter: (a, b) => a.comment.localeCompare(b.comment),
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		sorter: (a, b) => a.status.localeCompare(b.status),
	},
	{
		title: 'Deposit Money',
		dataIndex: 'depositMoney',
		key: 'depositMoney',
		sorter: (a, b) => a.depositMoney - b.depositMoney,
		render: (depositMoney) => formatMoney(depositMoney) + ' VND',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
		render: (date) => changeDate(date),
	},
]

const AdminHistoryDeposit = () => {
	const dispatch = useDispatch()
	const [q, setQ] = useState('')
	const [qMomo, setQMomo] = useState('')
	const [qBank, setQBank] = useState('')
	const [dateRecharge, setDateRecharge] = useState([])
	const [total, setTotal] = useState(0)
	const [data, setData] = useState([])

	const allHistoryRecharge = useSelector(
		(state) => state.admin.allHistoryRecharge
	)

	const allHistoryMomo = useSelector((state) => state.admin.allHistoryMomo)

	const allHistoryBank = useSelector((state) => state.admin.allHistoryBank)

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

			setData(
				res.data.result.map((item, index) => {
					return {
						id: index + 1,
						name: item.name_user,
						content: item.content,
						amount: item.amount,
						date: item.date,
					}
				})
			)
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	const fetchAllHistoryMomo = useCallback(async () => {
		try {
			const res = await axios.get('/history/admin_get_all_momo', {
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			})

			dispatch(adminGetAllHistoryMomo(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	const fetchAllHistoryBank = useCallback(async () => {
		try {
			const res = await axios.get('/history/admin_get_all_bank', {
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			})

			dispatch(adminGetAllHistoryBank(res.data.result))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchAllHistoryRecharge()
		fetchAllHistoryMomo()
		fetchAllHistoryBank()
	}, [fetchAllHistoryRecharge, fetchAllHistoryMomo, fetchAllHistoryBank])

	const dataMomo = allHistoryMomo.map((item, index) => {
		return {
			id: index + 1,
			name: item.name_user ? item.name_user : 'null',
			comment: item.comment,
			depositMoney: item.depositMoney,
			date: item.date_time,
			status: item.status,
		}
	})

	const dataBank = allHistoryBank.map((item, index) => {
		return {
			id: index + 1,
			name: item.name_user ? item.name_user : 'null',
			comment: item.comment,
			depositMoney: item.depositMoney,
			date: item.date_time,
			status: item.status,
		}
	})

	useEffect(() => {
		let filterData = []

		if (dateRecharge.length > 0) {
			filterData = allHistoryRecharge.filter((item) => {
				return (
					item.name_user.toLowerCase().includes(q.toLowerCase()) &&
					new Date(item.date) >= new Date(dateRecharge[0]) &&
					new Date(item.date) <= new Date(dateRecharge[1])
				)
			})
		} else {
			filterData = allHistoryRecharge.filter((item) => {
				return item.name_user.toLowerCase().includes(q.toLowerCase())
			})
		}

		setData(
			filterData.map((item, index) => {
				return {
					id: index + 1,
					name: item.name_user,
					content: item.content,
					amount: item.amount,
					date: item.date,
				}
			})
		)

		setTotal(
			filterData.reduce((total, item) => {
				return total + item.amount
			}, 0)
		)
	}, [q, allHistoryRecharge, dateRecharge])

	function searchQMomo(rows) {
		return rows.filter(
			(row) =>
				row.name.toLowerCase().indexOf(qMomo) > -1 ||
				row.comment.toLowerCase().indexOf(qMomo) > -1
		)
	}

	function searchQBank(rows) {
		return rows.filter(
			(row) =>
				row.name.toLowerCase().indexOf(qBank) > -1 ||
				row.comment.toLowerCase().indexOf(qBank) > -1
		)
	}

	function onChangeRecharge(value, dateString) {
		if (dateString[0] === '') {
			setDateRecharge([])
		} else {
			setDateRecharge(dateString)
		}
	}

	return (
		<>
			<Tabs defaultActiveKey='1'>
				<TabPane tab='History recharge' key='1'>
					<Card style={{ width: 300, marginBottom: 20 }}>
						<Statistic
							title='Total Recharge'
							value={formatMoney(total) + ' VND'}
						/>
					</Card>
					{/* Search */}
					<div style={{ marginBottom: '30px' }}>
						<Space direction='horizontal'>
							<Input
								placeholder='Search'
								value={q}
								onChange={(e) => setQ(e.target.value)}
							/>
							<RangePicker onChange={onChangeRecharge} />
						</Space>
					</div>

					<Table
						columns={columns}
						dataSource={data}
						bordered={true}
						loading={allHistoryRecharge.length === 0}
					/>
				</TabPane>
				<TabPane tab='History Momo' key='2'>
					{/* Search */}
					<div style={{ marginBottom: '30px' }}>
						<Space direction='horizontal'>
							<Input
								placeholder='Search'
								value={qMomo}
								onChange={(e) => setQMomo(e.target.value)}
							/>
						</Space>
					</div>
					<Table
						columns={columnsMomoandBank}
						dataSource={searchQMomo(dataMomo)}
						bordered={true}
						loading={allHistoryMomo.length === 0}
					/>
				</TabPane>
				<TabPane tab='History Bank' key='3'>
					{/* Search */}
					<div style={{ marginBottom: '30px' }}>
						<Space direction='horizontal'>
							<Input
								placeholder='Search'
								value={qBank}
								onChange={(e) => setQBank(e.target.value)}
							/>
						</Space>
					</div>
					<Table
						columns={columnsMomoandBank}
						dataSource={searchQBank(dataBank)}
						bordered={true}
						loading={allHistoryBank.length === 0}
					/>
				</TabPane>
			</Tabs>
		</>
	)
}

export default AdminHistoryDeposit
