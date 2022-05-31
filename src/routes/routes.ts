import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-layload/pages";


type JSXComponent = () => JSX.Element


interface Route {
    name: string,
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    // Component: FC
}
const Lazy1 = lazy(() => import(/*webpackChunkName:"LazyPage1"*/'../01-layload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/*webpackChunkName:"LazyPage2"*/'../01-layload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/*webpackChunkName:"LazyPage3"*/'../01-layload/pages/LazyPage3'))


export const routes: Route[] = [
    { name: 'Lazy-1', to: '/lazy1', path: 'lazy1', Component: Lazy1 },
    { name: 'Lazy-2', to: '/lazy2', path: 'lazy2', Component: Lazy2 },
    { name: 'Lazy-3', to: '/lazy3', path: 'lazy3', Component: Lazy3 },
]