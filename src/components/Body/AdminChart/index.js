import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
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
		scales: {
			x: {
				type: 'time',
				time: {
					unit: 'day',
				},
			},
			y: {
				beginAtZero: true,
			},
		},
	},
}

const AdminChart = () => {
	const [dataRow, setDataRow] = useState([])
	// const [dateRecharge, setDateRecharge] = useState([])
	const [labels, setLabels] = useState(
		[...new Array(30).keys()]
			.map((item) => {
				const date = new Date()
				date.setDate(date.getDate() - item)
				return date.toLocaleDateString()
			})
			.reverse()
	)
	const dispatch = useDispatch()

	// const allHistoryRecharge = useSelector(
	// 	(state) => state.admin.allHistoryRecharge
	// )

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

			const newData = res.data.result.reduce((acc, cur) => {
				const date = new Date(cur.date)
				const day = date.getDate()
				const month = date.getMonth() + 1
				const year = date.getFullYear()
				const key = `${day}/${month}/${year}`
				if (!acc[key]) {
					acc[key] = {
						x: key,
						y: 0,
					}
				}
				acc[key].y += cur.amount
				return acc
			}, {})

			const dataRecent30day = Object.values(newData).slice(0, 30)

			setDataRow(dataRecent30day)
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

	useEffect(() => {
		fetchAllHistoryRecharge()
	}, [fetchAllHistoryRecharge])

	const data = {
		// labels,
		datasets: [
			{
				label: 'VND',
				data: Object.values(dataRow),
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 206, 86, 0.5)',
					'rgba(75, 192, 192, 0.5)',
					'rgba(153, 102, 255, 0.5)',
					'rgba(255, 159, 64, 0.5)',
				],
			},
		],
	}

	return (
		<>
			<Bar options={options} data={data} />
		</>
	)
}

export default AdminChart
