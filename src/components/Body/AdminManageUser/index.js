import React, { useCallback, useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, Space, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { adminGetAllUser } from '../../../redux/actions/adminActions'
import formatMoney from '../../utils/formatMoney'
import { showSuccessModal, showErrorModal } from '../../utils/Modal'

const { Column } = Table

const AdminManageUser = () => {
	const [idDelete, setIdDelelte] = useState(null)

	const [isModalBalanceVisible, setIsModalBalanceVisible] = useState(false)
	const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false)
	const [isModalInfoVisible, setIsModalInfoVisible] = useState(false)

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

			console.log(res)

			if (res.data.status === 200) {
				showSuccessModal(res.data.message)
			}

			fetchAllUser()
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleHideModalDeleteUser = () => {
		setIsModalDeleteVisible(false)
	}

	return (
		<>
			<Table dataSource={data}>
				<Column
					title='ID'
					dataIndex='id'
					key='id'
					sorter={(a, b) => a.id - b.id}
				/>
				<Column title='Name' dataIndex='name' key='name' />
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
										<Button type='primary' size='large'>
											<i className='fas fa-coins'></i>
										</Button>
									</Tooltip>
									<Tooltip title='Change password'>
										<Button type='primary ' size='large'>
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
		</>
	)
}

export default AdminManageUser
