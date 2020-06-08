import './../styles/global.scss'
import "../styles/prism.css";

import React from "react";


import {wrapper} from '../store'


const WrappedApp = ({Component, pageProps}) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
