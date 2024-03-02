import ErrorBoundary from "./components/ErrorBoundary.jsx"
import Routing from "./routes/Routing.jsx"

import './App.css'

function App() {
	return (
		<ErrorBoundary>
			<Routing />
		</ErrorBoundary>
	)
}

export default App
