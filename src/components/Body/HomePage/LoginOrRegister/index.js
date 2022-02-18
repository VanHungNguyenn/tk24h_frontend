import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const LoginOrRegister = () => {
	const [isLogin, setIsLogin] = useState(true)

	const changeFormLogin = () => {
		setIsLogin(!isLogin)
	}

	return (
		<>
			{/* Title homepage */}
			<h1
				style={{
					fontSize: '30px',
					textAlign: 'center',
					margin: '2rem 0',
				}}
			>
				HỆ THỐNG TK24H.COM MUA BÁN TÀI KHOẢN QUẢNG CÁO (VIA, CLONE, BM,
				HOTMAIL, GMAIL...) FACEBOOK GIÁ RẺ, UY TÍN NHẤT VIỆT NAM
			</h1>

			{isLogin ? (
				<Login changeFormLogin={changeFormLogin} />
			) : (
				<Register changeFormLogin={changeFormLogin} />
			)}
		</>
	)
}

export default LoginOrRegister
