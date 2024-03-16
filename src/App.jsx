import ErrorBoundary from "@/src/components/pages/ErrorBoundary.jsx"
import Routing from "./routes/Routing"

import './App.css'

function App() {
	return (
		<ErrorBoundary>
			<Routing />
		</ErrorBoundary>
	)
}

export default App
