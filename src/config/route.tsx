import {
    HomeOutlined,
} from '@ant-design/icons';
// import { merge } from 'lodash'
import { lazy } from "react";

export const routeConfig = [
    {
        path: '/',
        redirect: '/home',
        hideMenu: true
    },
    {
        title: "首页",
        path: "/home",
        Component: lazy(() => import("../pages/home/index")),
        breadcrumb: '首页',
        icon: <HomeOutlined />
    }
]


export const getFlatRoutes = (routes: any) => {

    const flatRoute = (routes: any, path?: string): any => {
        return routes.reduce((wokRouteMap: any, route: any) => {
            const { routes, ...newRoute } = route

            if (path) {
                newRoute.path = `${path}${newRoute.path}`
            }

            if (!wokRouteMap[newRoute.path]) {
                wokRouteMap[newRoute.path] = newRoute
            }

            if (Array.isArray(routes)) {
                merge(wokRouteMap, flatRoute(routes, newRoute.path))
                // wokRoutes.push(...flatRoute(routes, newRoute.path))
            }
            return wokRouteMap
        }, {})
    }

    return Object.values(flatRoute(routes)) as any

}
function merge(wokRouteMap: any, arg1: any) {
    throw new Error('Function not implemented.');
}

