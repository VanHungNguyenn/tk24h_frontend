import React, { useCallback, useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, Space, Tooltip, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { adminGetAllUser } from '../../../redux/actions/adminActions'
import formatMoney from '../../utils/formatMoney'
import { showSuccessModal, showErrorModal } from '../../utils/Modal'
import './AdminManageUser.css'

const { Column } = Table
const { Option } = Select

const AdminManageUser = () => {
	const [idDelete, setIdDelelte] = useState(null)
	const [arrayPassword, setArrayPassword] = useState({
		id: '',
		password: '',
		repeatPassword: '',
	})

	const [arrayBalance, setArrayBalance] = useState({
		id: null,
		name: '',
		balance: null,
		addOrSubtract: '+',
		value: 0,
	})

	const [q, setQ] = useState('')

	const [isModalBalanceVisible, setIsModalBalanceVisible] = useState(false)
	const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false)
	const [isModalPasswordVisible, setIsModalPasswordVisible] = useState(false)

	const dispatch = useDispatch()

	const allUser = useSelector((state) => state.admin.allUser)

	const fetchAllUser = useCallback(async () => {
		try {
			const res = await axios.get('/user/get_user', {
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			})

			dispatch(adminGetAllUser(res.data.data))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchAllUser()
	}, [fetchAllUser])

	const data = allUser.map((item, i) => {
		return {
			key: i,
			id: item.id_user,
			name: item.name,
			phone: item.phone,
			balance: item.balance,
			deposit: item.totalDeposit,
		}
	})

	const openModalDeleteUser = (record) => {
		const id = record.id

		setIdDelelte(id)
		setIsModalDeleteVisible(true)
	}

	const openModalChangeBalance = (record) => {
		const { id, name, balance } = record

		setArrayBalance({ ...arrayBalance, id, name, balance })
		setIsModalBalanceVisible(true)
	}

	const openModalChangePassword = (record) => {
		const id = record.id

		setArrayPassword({ ...arrayPassword, id })
		setIsModalPasswordVisible(true)
	}

	const handleDeleleUser = async () => {
		try {
			setIsModalDeleteVisible(false)

			const res = await axios.delete(
				`/user/delete/${idDelete}`,

				{
					headers: {
						'Content-Type': 'application/json',
						'auth-token': localStorage.getItem('token'),
					},
				}
			)

			if (res.data.status === 200) {
				showSuccessModal(res.data.message)
			}

			fetchAllUser()
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleChangeBalance = async () => {
		try {
			setIsModalBalanceVisible(false)

			const res = await axios.post(
				'/user/change_balance_user',
				{
					id_user: arrayBalance.id,
					addOrSubtract: arrayBalance.addOrSubtract,
					value: arrayBalance.value,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'auth-token': localStorage.getItem('token'),
					},
				}
			)

			if (res.data.status === 200) {
				showSuccessModal(res.data.message)
			}

			fetchAllUser()

			setArrayBalance({
				id: null,
				name: '',
				balance: null,
				addOrSubtract: '+',
				value: 0,
			})
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleChangePassword = async () => {
		try {
			setIsModalPasswordVisible(false)

			const res = await axios.post(
				'/user/update_password_user',
				{
					id: arrayPassword.id,
					password: arrayPassword.password,
					repeatPassword: arrayPassword.repeatPassword,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'auth-token': localStorage.getItem('token'),
					},
				}
			)

			if (res.data.status === 200) {
				showSuccessModal(res.data.message)
			}

			fetchAllUser()

			setArrayPassword({
				id: '',
				password: '',
				repeatPassword: '',
			})
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleHideModalDeleteUser = () => {
		setIsModalDeleteVisible(false)
	}

	const handleHideModalChangeBalance = () => {
		setIsModalBalanceVisible(false)
		setArrayBalance({
			id: null,
			name: '',
			balance: null,
			addOrSubtract: '+',
			value: 0,
		})
	}

	const handleHideModalChangePassword = () => {
		setIsModalPasswordVisible(false)
		setArrayPassword({
			id: '',
			password: '',
			repeatPassword: '',
		})
	}

	const handleChange = (addOrSubtract) => {
		setArrayBalance({ ...arrayBalance, addOrSubtract })
	}

	const handleChangeInputBalance = (e) => {
		const { name, value } = e.target
		setArrayBalance({ ...arrayBalance, [name]: value })
	}

	const handleChangeInputPasswordForm = (e) => {
		const { name, value } = e.target
		setArrayPassword({ ...arrayPassword, [name]: value })
	}

	function search(rows) {
		return rows.filter((row) => row.name.toLowerCase().indexOf(q) > -1)
	}

	return (
		<>
			{/* Search */}
			<div style={{ marginBottom: '20px', width: '30%' }}>
				<Input
					placeholder='Search'
					value={q}
					onChange={(e) => setQ(e.target.value)}
				/>
			</div>
			<Table dataSource={search(data)}>
				<Column
					title='ID'
					dataIndex='id'
					key='id'
					sorter={(a, b) => a.id - b.id}
				/>
				<Column
					title='Name'
					dataIndex='name'
					key='name'
					sorter={(a, b) => a.name.localeCompare(b.name)}
				/>
				<Column title='Number phone' dataIndex='phone' key='phone' />
				<Column
					title='Total Deposit'
					dataIndex='deposit'
					key='deposit'
					sorter={(a, b) => a.deposit - b.deposit}
					render={(deposit) => formatMoney(deposit) + ' VND'}
				/>
				<Column
					title='Total Balance'
					dataIndex='balance'
					key='balance'
					sorter={(a, b) => a.balance - b.balance}
					render={(balance) => formatMoney(balance) + ' VND'}
				/>
				<Column
					title='Action'
					dataIndex='data'
					key='data'
					render={(data, record) => {
						return (
							<>
								<Space>
									<Tooltip title='Change balance'>
										<Button
											type='primary'
											size='large'
											onClick={() =>
												openModalChangeBalance(record)
											}
										>
											<i className='fas fa-coins'></i>
										</Button>
									</Tooltip>
									<Tooltip title='Change password'>
										<Button
											type='primary '
											size='large'
											onClick={() =>
												openModalChangePassword(record)
											}
										>
											<i className='fas fa-edit'></i>
										</Button>
									</Tooltip>
									<Tooltip title='Delete user'>
										<Button
											type='primary'
											size='large'
											danger
											onClick={() =>
												openModalDeleteUser(record)
											}
										>
											<i className='fas fa-trash-alt'></i>
										</Button>
									</Tooltip>
								</Space>
							</>
						)
					}}
				/>
			</Table>
			{/* Modal delete user */}
			<Modal
				title='Delete user'
				visible={isModalDeleteVisible}
				onOk={handleDeleleUser}
				onCancel={handleHideModalDeleteUser}
				okText='Delete'
			>
				<p>Are you sure delete this user?</p>
			</Modal>
			{/* Modal change balance */}
			<Modal
				title='Change balance'
				visible={isModalBalanceVisible}
				onOk={handleChangeBalance}
				onCancel={handleHideModalChangeBalance}
				okText='Change'
				className='modal-change-balance'
			>
				<div className='modal-change_title'>
					<span>Username: </span>
					{arrayBalance.name}
				</div>
				<div className='modal-change_title'>
					<span>Balance: </span>
					{formatMoney(arrayBalance.balance)} VND
				</div>
				<div className='modal-change_form'>
					<Select
						defaultValue='+'
						style={{ width: 60 }}
						onChange={handleChange}
						value={arrayBalance.addOrSubtract}
					>
						<Option value='+'>+</Option>
						<Option value='-'>-</Option>
					</Select>
					<Input
						placeholder='Money...'
						type='text'
						onChange={handleChangeInputBalance}
						value={arrayBalance.value}
						name='value'
					/>
				</div>
			</Modal>
			{/* Modal change info user */}
			<Modal
				title='Change password user'
				visible={isModalPasswordVisible}
				onOk={handleChangePassword}
				onCancel={handleHideModalChangePassword}
				okText='Change'
			>
				<Form name='basic' layout='vertical'>
					<Form.Item label='Password'>
						<Input
							type='text'
							onChange={handleChangeInputPasswordForm}
							value={arrayPassword.password}
							name='password'
						/>
					</Form.Item>
					<Form.Item label='Repeat Password'>
						<Input
							type='text'
							onChange={handleChangeInputPasswordForm}
							value={arrayPassword.repeatPassword}
							name='repeatPassword'
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default AdminManageUser
