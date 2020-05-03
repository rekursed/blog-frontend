import Link from 'next/link'
import Layout from "../../components/layout";
//
// export default function First() {
//     return (
//         <Layout>
//             <h1 className="title">First Post</h1>
//             <h2>
//                 <Link href="/">
//                     <a>Back to home</a>
//                 </Link>
//             </h2>
//         </Layout>
//     )
// }


import React from "react";
import {connect} from "react-redux";

const Page = props => (
    <div>
        <div>Prop from Redux {props.foo}</div>
        <div>Prop from getInitialProps {props.custom}</div>
    </div>
);

Page.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'foo'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Page);
