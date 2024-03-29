import { Navigate } from "react-router-dom"

import { URL_LOGIN } from "../assets/constants/SitePath"

function PrivateRoute({ Component }) {
    const isLoggedIn = localStorage.getItem('token')

    return (
        <div>
            {
                !isLoggedIn
                    ? <Navigate to={URL_LOGIN} />
                    : <Component />
            }
        </div>
    )
}

export default PrivateRoute