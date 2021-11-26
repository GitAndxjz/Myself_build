import {
    HomeOutlined,
} from '@ant-design/icons';
import { merge } from 'lodash'
import { lazy, LazyExoticComponent } from "react";


interface WokRoute {
    title?: string;
    path: string;
    redirect?: string;
    Component?: LazyExoticComponent<any>;
    breadcrumb?: React.ComponentType | React.ElementType | string | null;
    hideBreadcrumb?: boolean;
    hideMenu?: boolean;
    routes?: Omit<WokRoute, "children">[];
    // todo 待实现
    icon?: React.ReactNode;
    layout?: false | {
        header: boolean;
        sidebar: boolean;
        footer: boolean;
    };
}


export const routeConfig: WokRoute[] = [
    {
        path: '/',
        redirect: '/home',
        hideMenu: true,
    },
    {
        title: "首页",
        path: "/home",
        Component: lazy(() => import("../pages/home/index")),
        breadcrumb: '首页',
        icon: <HomeOutlined />
    }
]




export const getFlatRoutes = (routes: WokRoute[]) => {

    const flatRoute = (routes: WokRoute[], path?: string): any => {
        return routes.reduce((wokRouteMap: any, route) => {
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

    return Object.values(flatRoute(routes)) as WokRoute[]

}
// function merge(wokRouteMap: any, arg1: any) {
//     throw new Error('Function not implemented.');
// }

