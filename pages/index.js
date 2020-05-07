import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout";
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
                                <div className="column is-8">
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
                                                    {JSON.stringify(this.props.bio, null, 2) }
                                                </code>
                                            </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="hero">
                                        <div className="hero-body">
                                            <div className="container">
                                                <h1 className="title">
                                                    I am available for a new role
                                                </h1>
                                                <h2 className="subtitle">
                                                    contact me through linked in
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<p className="description">*/}
                        {/*    <Link href='/posts/first'><a>To first</a></Link>*/}
                        {/*</p>*/}

                        {/*<div className="grid">*/}
                        {/*    <a href="https://nextjs.org/docs" className="card">*/}
                        {/*        <h3>Documentation &rarr;</h3>*/}
                        {/*        <p>Find in-depth information about Next.js features and API.</p>*/}
                        {/*    </a>*/}

                        {/*    <a href="https://nextjs.org/learn" className="card">*/}
                        {/*        <h3>Learn &rarr;</h3>*/}
                        {/*        <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
                        {/*    </a>*/}

                        {/*    <a*/}
                        {/*        href="https://github.com/zeit/next.js/tree/master/examples"*/}
                        {/*        className="card"*/}
                        {/*    >*/}
                        {/*        <h3>Examples &rarr;</h3>*/}
                        {/*        <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
                        {/*    </a>*/}

                        {/*    <a*/}
                        {/*        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
                        {/*        className="card"*/}
                        {/*    >*/}
                        {/*        <h3>Deploy &rarr;</h3>*/}
                        {/*        <p>*/}
                        {/*            Instantly deploy your Next.js site to a public URL with Vercel.*/}
                        {/*        </p>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </main>

                    <footer>

                    </footer>


                    {/*          <style jsx>{`*/}
                    {/*  .container {*/}
                    {/*    min-height: 100vh;*/}
                    {/*    padding: 0 0.5rem;*/}
                    {/*    display: flex;*/}
                    {/*    flex-direction: column;*/}
                    {/*    justify-content: center;*/}
                    {/*    align-items: center;*/}
                    {/*  }*/}

                    {/*  main {*/}
                    {/*    padding: 5rem 0;*/}
                    {/*    flex: 1;*/}
                    {/*    display: flex;*/}
                    {/*    flex-direction: column;*/}
                    {/*    justify-content: center;*/}
                    {/*    align-items: center;*/}
                    {/*  }*/}

                    {/*  footer {*/}
                    {/*    width: 100%;*/}
                    {/*    height: 100px;*/}
                    {/*    border-top: 1px solid #eaeaea;*/}
                    {/*    display: flex;*/}
                    {/*    justify-content: center;*/}
                    {/*    align-items: center;*/}
                    {/*  }*/}

                    {/*  footer img {*/}
                    {/*    margin-left: 0.5rem;*/}
                    {/*  }*/}

                    {/*  footer a {*/}
                    {/*    display: flex;*/}
                    {/*    justify-content: center;*/}
                    {/*    align-items: center;*/}
                    {/*  }*/}

                    {/*  a {*/}
                    {/*    color: inherit;*/}
                    {/*    text-decoration: none;*/}
                    {/*  }*/}

                    {/*  .title a {*/}
                    {/*    color: #0070f3;*/}
                    {/*    text-decoration: none;*/}
                    {/*  }*/}

                    {/*  .title a:hover,*/}
                    {/*  .title a:focus,*/}
                    {/*  .title a:active {*/}
                    {/*    text-decoration: underline;*/}
                    {/*  }*/}

                    {/*  .title {*/}
                    {/*    margin: 0;*/}
                    {/*    line-height: 1.15;*/}
                    {/*    font-size: 4rem;*/}
                    {/*  }*/}

                    {/*  .title,*/}
                    {/*  .description {*/}
                    {/*    text-align: center;*/}
                    {/*  }*/}

                    {/*  .description {*/}
                    {/*    line-height: 1.5;*/}
                    {/*    font-size: 1.5rem;*/}
                    {/*  }*/}

                    {/*  code {*/}
                    {/*    background: #fafafa;*/}
                    {/*    border-radius: 5px;*/}
                    {/*    padding: 0.75rem;*/}
                    {/*    font-size: 1.1rem;*/}
                    {/*    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,*/}
                    {/*      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;*/}
                    {/*  }*/}

                    {/*  .grid {*/}
                    {/*    display: flex;*/}
                    {/*    align-items: center;*/}
                    {/*    justify-content: center;*/}
                    {/*    flex-wrap: wrap;*/}

                    {/*    max-width: 800px;*/}
                    {/*    margin-top: 3rem;*/}
                    {/*  }*/}

                    {/*  .card {*/}
                    {/*    margin: 1rem;*/}
                    {/*    flex-basis: 45%;*/}
                    {/*    padding: 1.5rem;*/}
                    {/*    text-align: left;*/}
                    {/*    color: inherit;*/}
                    {/*    text-decoration: none;*/}
                    {/*    border: 1px solid #eaeaea;*/}
                    {/*    border-radius: 10px;*/}
                    {/*    transition: color 0.15s ease, border-color 0.15s ease;*/}
                    {/*  }*/}

                    {/*  .card:hover,*/}
                    {/*  .card:focus,*/}
                    {/*  .card:active {*/}
                    {/*    color: #0070f3;*/}
                    {/*    border-color: #0070f3;*/}
                    {/*  }*/}

                    {/*  .card h3 {*/}
                    {/*    margin: 0 0 1rem 0;*/}
                    {/*    font-size: 1.5rem;*/}
                    {/*  }*/}

                    {/*  .card p {*/}
                    {/*    margin: 0;*/}
                    {/*    font-size: 1.25rem;*/}
                    {/*    line-height: 1.5;*/}
                    {/*  }*/}

                    {/*  .logo {*/}
                    {/*    height: 1em;*/}
                    {/*  }*/}

                    {/*  @media (max-width: 600px) {*/}
                    {/*    .grid {*/}
                    {/*      width: 100%;*/}
                    {/*      flex-direction: column;*/}
                    {/*    }*/}
                    {/*  }*/}
                    {/*`}</style>*/}

                    {/*          <style jsx global>{`*/}
                    {/*  html,*/}
                    {/*  body {*/}
                    {/*    padding: 0;*/}
                    {/*    margin: 0;*/}
                    {/*    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,*/}
                    {/*      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,*/}
                    {/*      sans-serif;*/}
                    {/*  }*/}

                    {/*  * {*/}
                    {/*    box-sizing: border-box;*/}
                    {/*  }*/}
                    {/*`}</style>*/}
                </div>
            </Layout>
        )
    }

}

export default Home;
