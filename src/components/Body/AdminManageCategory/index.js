import React, { useCallback, useEffect, useState } from 'react'
import { Table, Button, Modal, Form, Input, Space, Tooltip } from 'antd'
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
	const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false)
	const [isModalAddVisible, setIsModalAddVisible] = useState(false)
	const [infoForm, setInfoForm] = useState(initialState)
	const [addProductForm, setAddProductForm] = useState({
		type: '',
		data: '',
		name: '',
	})

	console.log(addProductForm)

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

	const openModalUpdate = (record) => {
		setInfoForm({
			name_category: record.name,
			price: record.price,
			id_category: record.id,
		})

		setIsModalUpdateVisible(true)
	}

	const openModalAddProduct = (record) => {
		setAddProductForm({
			...addProductForm,
			type: record.type,
			name: record.name,
		})

		setIsModalAddVisible(true)
	}

	const handleOk = async () => {
		try {
			setIsModalUpdateVisible(false)

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

	const handleAddProduct = async () => {
		try {
			setIsModalAddVisible(false)

			const res = await axios.post(
				'/category/add_product',
				{
					type: addProductForm.type,
					data: addProductForm.data,
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

			setAddProductForm({
				type: '',
				data: '',
				name: '',
			})
		} catch (error) {
			showErrorModal(error.response.data.message)
		}
	}
	const handleCancel = () => {
		setIsModalUpdateVisible(false)
	}

	const handleHideModalAdd = () => {
		setIsModalAddVisible(false)

		setAddProductForm({
			type: '',
			data: '',
			name: '',
		})
	}

	const handleChangeAddProduct = (e) => {
		const { name, value } = e.target
		setAddProductForm({ ...addProductForm, [name]: value })
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
								<Space>
									<Tooltip title='Update name and price'>
										<Button
											type='primary'
											onClick={() =>
												openModalUpdate(record)
											}
										>
											<i className='fas fa-edit'></i>
										</Button>
									</Tooltip>
									<Tooltip title='Add product'>
										<Button
											type='primary'
											onClick={() =>
												openModalAddProduct(record)
											}
										>
											<i className='fas fa-folder-plus'></i>
										</Button>
									</Tooltip>
								</Space>
							</>
						)
					}}
				/>
			</Table>
			<Modal
				title='Update category information'
				visible={isModalUpdateVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				width={600}
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
			<Modal
				title='Add product'
				visible={isModalAddVisible}
				onOk={handleAddProduct}
				onCancel={handleHideModalAdd}
				width={600}
				okText='Add'
			>
				<div className='modal-change_title'>
					<span>Category: </span>
					{addProductForm.name}
				</div>
				<div className='modal-change_title'>
					<span>Type: </span>
					{addProductForm.type}
				</div>
				<Form name='basic' layout='vertical'>
					<Form.Item label='Data:'>
						<Input.TextArea
							type='text'
							onChange={handleChangeAddProduct}
							value={addProductForm.data}
							name='data'
							rows={8}
						/>
					</Form.Item>
				</Form>
			</Modal>
		</>
	)
}

export default AdminManageCategory
