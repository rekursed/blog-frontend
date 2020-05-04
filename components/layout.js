import styles from './layout.module.scss'
import Navbar from "./navbar";

function Layout({children}) {
    return (<div>
            <Navbar></Navbar>
            <div className={"container "+ styles.content}>{children}</div>
        </div>
    );
}

export default Layout
