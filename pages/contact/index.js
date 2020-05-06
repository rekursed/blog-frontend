import React from "react";
import {connect} from "react-redux";
import Layout from "../../components/layout";

const Page = props => (
    <Layout>
        <div>
            <div>Prop from Redux {props.posts.title}</div>
            <div>Prop from getInitialProps {props.custom}</div>
        </div>p
    </Layout>
);

Page.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'TITLE', payload: 'This is a title'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Page);
