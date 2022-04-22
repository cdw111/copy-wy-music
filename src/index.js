import React from 'react';

import { createRoot } from 'react-dom/client';
import App from './App';
import "@/assets/css/reset.css"


//通过在json文件用craco来配置    需要把配置改为craco
//ReactDOM.render(<App />,document.getElementById('root'));
//R18的支持方式
const root = createRoot(document.getElementById('root'))
root.render(<App/>)