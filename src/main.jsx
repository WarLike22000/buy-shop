import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import {theme, cacheRtl} from './Them';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root')).render(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
)
