import Head from 'next/head'
import Link from 'next/link'
import Layout from "../../components/layout";
import Prism from "prismjs";


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jsonView: true};

        // This binding is necessary to make `this` work in the callback
        this.setJsonView = this.setJsonView.bind(this);
        this.setDocView = this.setDocView.bind(this);
    }

    setJsonView() {
        this.setState(state => ({
            jsonView: true
        }))
    }

    setDocView() {
        this.setState(state => ({
            jsonView: false
        }))
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    static async getInitialProps({Component, ctx}) {
        let bio = {
            name: "Mohammad Rakibul Hassan",
            github: "https://github.com/rekursed",
            linkedIn: "https://www.linkedin.com/in/mr-hassan/",
            stackoverflow: "https://stackoverflow.com/users/1363249/mrhassan",
            summary: "A hands-on language agnostic Full Stack Software Engineer with a degree in Computer Engineering and years of experience in developing e-commerce and web applications in the information technology and services industry. Skilled in Python, Nodejs, PHP, Javascript, C++, AWS, and Bash.",
            skills: [
                {
                    backend: [
                        "Python",
                        "Node Js",
                        "Python",
                    ],
                    frontend: [
                        "vue.js",
                        "vuex",
                        "react.js",
                        "next.js"
                    ],
                    devops: [
                        "git",
                        "CircleCi",
                        "serverless",
                        "AWS",
                        "TDD",
                        "Terraform",
                    ]
                }

            ],
            experiance: [
                {
                    title: "Full Stack Software Engineer",
                    company: "HEXR",
                    company_url: "www.hexr.com",
                    location: "Primrose Hill, London",
                    start: "August 2019",
                    end: "",
                    techs: ["nodejs", "python", "vuejs", "vuex", "AWS", "CD/CI", "serverless", "opencv", "Shopify"],
                    description: "HEXR produces personalised custom-fit 3d printed cycling helmets that are safer than regular helmets.",
                    highlight: [
                        "Proposed and implemented remodelling all of the data and database entity relationships (Postgres)",
                        "Implemented CD/CI for multiple (both traditional and serverless) parts of the backend on the cloud",
                        "Contributed to the implementation of scalable infrastructure to run GPU servers in a serverless manner",
                        "API integrations with multiple 3rd party services (Shopify, Slack)",
                        "Cloud devops, database migration",
                        "Worked both on-site and remotely in agile environment with weekly scrum sprints",
                    ]
                },
                {
                    title: "Full Stack Software Engineer",
                    company: "Callaly",
                    company_url: "www.calla.ly",
                    location: "West Hampstead, London",
                    start: "May 2018",
                    end: "July 2019",
                    techs: ["python", "django", "AWS", "CD/CI", "serverless", "Ecommerce", "payment integration", "Shopify"],
                    description: `At Callaly, I kicked off with R&D to find a solution for their unique subscription business model for their award-winning innovative product as well as for regular products and developed an app that integrates with different Service APIs.`,
                    highlight: [
                        `Proposed and implemented the tech stack foundation for a scalable custom made Ecommerce project`,
                        `Development of the App using Python Django, HTML5 & Javascript`,
                        `API integration with different service Apps(Intercom, Zendesk, Chargebee, Stripe, Braintree etc.)`,
                        `AWS lamda Serverless deployment`,
                        `Deployment and management of AWS services`,
                        `Scrum Sprint Planning`,
                    ]
                },
                {
                    title: "Ecommerce Developer",
                    company: "Maz Accessories",
                    company_url: "www.mazaccessories.com",
                    location: "Aldgate, London",
                    start: "September 2014",
                    end: "May 2018",
                    techs: ["PHP", "Magento", "AWS", "Odoo", "Jquery", "Email Marketing", "Ecommerce"],
                    description: `Maz Accessories is a small business, supplier of Headwear to High street businesses, building brand around british headwears`,
                    highlight: [
                        `Development and migration of E-commerce website in Magento using PHP, Javascript, jQuery, HTML5.`,
                        `Advised and Implemented multi brand Web app with central control`,
                        `Troubleshooting Magento Plugin and Dependencies`,
                        `Implemented Inventory Management to forecast sales and supply-chain.`,
                        `coordinated team of web developers and designers to drive the reach of the business through SEO and Email Marketing`,

                    ]
                },
                {
                    title: "Ecommerce Developer",
                    company: "Maz Accessories",
                    company_url: "www.mazaccessories.com",
                    location: "Aldgate, London",
                    start: "September 2014",
                    end: "May 2018",
                    techs: ["PHP", "Magento", "AWS", "Odoo", "Jquery", "Email Marketing", "Ecommerce"],
                    description: `Maz Accessories is a small business, supplier of Headwear to High street businesses, building brand around british headwears`,
                    highlight: [
                        `Development and migration of E-commerce website in Magento using PHP, Javascript, jQuery, HTML5.`,
                        `Advised and Implemented multi brand Web app with central control`,
                        `Troubleshooting Magento Plugin and Dependencies`,
                        `Implemented Inventory Management to forecast sales and supply-chain.`,
                        `coordinated team of web developers and designers to drive the reach of the business through SEO and Email Marketing`,

                    ]
                },
                {
                    title: "Software Engineer",
                    company: "Zeteq Systems",
                    company_url: "https://zeteq.com/",
                    location: "Dhaka, Bangladesh",
                    start: "December 2013",
                    end: "June 2014",
                    techs: ["PHP", "Symfony", "Laravel", "MySQL", "Jquery", "Ecommerce"],
                    description: `Zeteq is a small agency building ecommerce projects for independent traders`,
                    highlight: [
                        `PHP Ecommerce development with api Integration`,
                        `Developed with Symfony and Laravel framework with angular, HTML, CSS in the frontend.`,
                        `Worked in an agile scrum environment.`,
                    ]
                }

            ],
            education:[{
                institute: "International Islamic University Chittagong"
            }]
        }

        return {bio};
    }

    render() {
        return (
            <Layout>
                <div>
                    <div className="tabs is-left is-boxed">
                        <ul>
                            <li className={this.state.jsonView ? "is-active" : ""}>
                                <a onClick={this.setJsonView}>
                                    <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                                    <span>JSON</span>
                                </a>
                            </li>
                            <li className={!this.state.jsonView ? "is-active" : ""}>
                                <a onClick={this.setDocView}>
                                    <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                                    <span>Document</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <pre className="language-json">
                            <code className="language-json">
                                {JSON.stringify(this.props.bio, null, 2)}
                            </code>
                        </pre>

                    </div>
                </div>

            </Layout>
        );
    }
}

export default About
