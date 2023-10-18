import { Route, Navigate } from 'react-router-dom'
export const ProtectedRoute: React.FC<{ path: string, element: React.ReactNode, isLoggedIn: boolean }> = ({ path, element, isLoggedIn }) => {
    // const navigate = useNavigate()
    if (isLoggedIn) {
        return <Route path={path} element={element} />
    } else {
        return <Navigate to="/sign-up" replace />
    }
}