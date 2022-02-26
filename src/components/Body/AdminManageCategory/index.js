import React, { useCallback, useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { adminGetAllCategory } from '../../../redux/actions/adminActions'
import formatMoney from '../../utils/formatMoney'
import { showSuccessModal, showErrorModal } from '../../utils/Modal'

const { Column } = Table

const initialState = {
	name_category: '',
	price: 0,
	id_category: '',
}

const AdminManageCategory = () => {
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [infoForm, setInfoForm] = useState(initialState)

	console.log(infoForm)

	const handleChangeInput = (e) => {
		const { name, value } = e.target
		setInfoForm({ ...infoForm, [name]: value })
	}

	const dispatch = useDispatch()

	const allCategory = useSelector((state) => state.admin.allCategory)

	const fetchAllCategory = useCallback(async () => {
		try {
			const res = await axios.get('/category/get_info', {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			dispatch(adminGetAllCategory(res.data.data))
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchAllCategory()
	}, [fetchAllCategory])

	const handleUpdateCategory = (record) => {
		setInfoForm({
			name_category: record.name,
			price: record.price,
			id_category: record.id,
		})

		setIsModalVisible(true)
	}

	const handleOk = async () => {
		try {
			setIsModalVisible(false)

			const res = await axios.post(
				'/category/update',
				{
					name: infoForm.name_category,
					price: infoForm.price,
					id_category: infoForm.id_category,
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
				fetchAllCategory()
			}
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	const data = allCategory.map((item, i) => {
		return {
			key: i,
			id: item.id_category,
			name: item.name,
			type: item.type,
			amount: item.count,
			price: item.price,
			country: item.country,
		}
	})

	return (
		<>
			<Table dataSource={data}>
				<Column title='ID' dataIndex='id' key='id' />
				<Column title='Category' dataIndex='name' key='name' />
				<Column title='Type' dataIndex='type' key='type' />
				<Column title='Amount' dataIndex='amount' key='amount' />
				<Column
					title='Country'
					dataIndex='country'
					key='country'
					render={(country) => {
						return (
							<>
								<span
									className={`flag-icon flag-icon-${country}`}
								></span>
							</>
						)
					}}
				/>
				<Column
					title='Price'
					dataIndex='price'
					key='price'
					render={(price) => formatMoney(price) + ' VND'}
				/>

				<Column
					title='Action'
					dataIndex='data'
					key='data'
					render={(data, record) => {
						return (
							<>
								<Button
									type='primary'
									onClick={() => handleUpdateCategory(record)}
								>
									Update
								</Button>
							</>
						)
					}}
				/>
			</Table>
			<Modal
				title='Update category information'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={1000}
				okText='Update'
			>
				<Form name='basic' layout='vertical' onFinish={handleOk}>
					<Form.Item label='Category name'>
						<Input
							type='text'
							onChange={handleChangeInput}
							value={infoForm.name_category}
							name='name_category'
						/>
					</Form.Item>
					<Form.Item label='Price'>
						<Input
							type='number'
							onChange={handleChangeInput}
							value={infoForm.price}
							name='price'
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default AdminManageCategory
