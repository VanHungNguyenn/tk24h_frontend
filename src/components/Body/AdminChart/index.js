import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { adminGetAllHistoryRecharge } from '../../../redux/actions/adminActions'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Recharge tracking board',
		},
	},
}

const AdminChart = () => {
	const [dataRow, setDataRow] = useState([])

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

	const newData = allHistoryRecharge.reduce((acc, cur) => {
		const date = new Date(cur.date)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()
		const key = `${day}/${month}/${year}`
		if (!acc[key]) {
			acc[key] = {
				date: key,
				total: 0,
			}
		}
		acc[key].total += cur.amount
		return acc
	}, {})

	const labels = Object.keys(newData).reverse()

	const data = {
		labels,
		datasets: [
			{
				label: 'VND',
				data: Object.keys(newData).map((key) => newData[key].total),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	}

	return <Bar options={options} data={data} />
}

export default AdminChart
