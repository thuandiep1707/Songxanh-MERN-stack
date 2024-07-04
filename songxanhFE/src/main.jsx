import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import { routerList } from './routes/router'


import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header />
        <main className='flex flex-col items-center w-[100%]'>
            <Routes>
                {
                    routerList?.map((item, key) => <Route path={item.path} element={item.element} key={key}/>)
                }
            </Routes>
        </main>
    </BrowserRouter>
)
