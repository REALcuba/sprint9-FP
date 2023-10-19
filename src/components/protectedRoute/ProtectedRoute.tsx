
import { Navigate } from 'react-router-dom'

export const ProtectedRoute: React.FC<{ children: React.ReactNode, isLoggedIn: boolean, redirectTo?: string }> = ({ children, isLoggedIn, redirectTo = '/' }) => {
    
    if (!isLoggedIn) {
        return <Navigate to={redirectTo} replace />
    }

    return children
}