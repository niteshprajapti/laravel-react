import './bootstrap';
import '../css/app.css';

import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Page2 from './Pages/Page2';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <App {...props} />} />
                    <Route exact path='/page2' element={  <Page2 />}/>

                </Routes>
            </BrowserRouter>, el

        );
    },
});

InertiaProgress.init({ color: '#4B5563' });
