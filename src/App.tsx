import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./components/Counter";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import './index.scss'

export const App = () => {
    return (
        <div className="app">
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    )
}