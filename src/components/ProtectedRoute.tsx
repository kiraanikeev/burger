import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FC, ReactElement } from 'react';

type ProtectedRouteElementProps = {
    element: ReactElement, 
    isAuth: boolean, 
    routeWithAuthrized: boolean, 
    replaceRoute: string
}

export const ProtectedRouteElement:FC<ProtectedRouteElementProps> = ({ element, isAuth, routeWithAuthrized, replaceRoute }) => {
    if (isAuth && routeWithAuthrized || !isAuth && !routeWithAuthrized) {
        return element;
    } else {
        return <Navigate to={replaceRoute} replace />
    }
} 

// ProtectedRouteElement.propTypes = {
//     element: PropTypes.object.isRequired, 
//     isAuth: PropTypes.bool.isRequired, 
//     routeWithAuthrized: PropTypes.bool.isRequired, 
//     replaceRoute: PropTypes.string.isRequired
// }