import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout";
import ProfileBadge from "../components/home/profile-badge";
import Prism from "prismjs";


class Home extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    static async getInitialProps({Component, ctx}) {
        let bio = {
            name: "Mohammad Rakibul Hassan",
        }

        return {bio};
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <Head>
                        <title>Rekursive Adventure</title>
                        <link rel="icon" href="/favicon.ico"/>
                        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                        <link rel="manifest" href="/site.webmanifest"/>
                        <meta name="msapplication-TileColor" content="#da532c"/>
                        <meta name="theme-color" content="#ffffff"/>
                    </Head>

                    <main>
                        <div className='container'>
                            <div className="columns is-desktop">
                                <div className="column is-7">
                                    <div className="hero lead">
                                        <div className="hero-body">
                                            <div className="container">
                                                <h1 className="title">
                                                    Hey, I'm Mohammad 👋
                                                </h1>
                                                <h2 className="subtitle">
                                                    I am a full stack software engineer with experiance in Python,
                                                    Javascript and PHP.
                                                </h2>
                                                <pre className="language-json">
                                                <code className="language-json">
                                                    {JSON.stringify(this.props.bio, null, 2)}
                                                </code>
                                            </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-5">
                                    <div className="hero">
                                        <div className="hero-body">
                                            <div className="container">
                                                <ProfileBadge></ProfileBadge>
                                                <div className="github-widget" data-username="rekursed"></div>
                                                <script src="https://unpkg.com/github-card@1.2.1/dist/widget.js"></script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer>
                    </footer>
                </div>
            </Layout>
        )
    }

}

export default Home;
