import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from './components/utils/Loading'
import NotFound from './components/utils/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

import './vendor/fontawesome-free/css/all.min.css'
import './css/fonts-googleapis.css'

// Lazy load - Code splitting
const Body = React.lazy(() => import('./components/Body'))

function App() {
	return (
		<div className='app__main'>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<div
						id='page-container'
						className='page-header-dark main-content-boxed side-trans-enabled'
						style={{ position: 'relative' }}
					>
						<Header />
						<Switch>
							<Route exact path='' component={Body} />
							<Route component={NotFound} />
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</Suspense>
		</div>
	)
}

export default App
