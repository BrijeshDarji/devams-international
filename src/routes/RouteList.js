/**
 *  @description This file contains system's route list. 
 */

import { lazy } from "react";

import {
    URL_PRODUCT_LIST,
} from "../assets/constants/SitePath";

const ProductList = lazy(() => import("../components/pages/products/ProductList.jsx" /* webpackChunkName: 'ProductList'*/))

export const RouteList = [
    {
        path: URL_PRODUCT_LIST,
        exact: true,
        component: ProductList,
    },
]
