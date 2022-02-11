import Head from 'next/head'
import ArticleTile from '../components/ArticleTile/ArticleTile'
import TimeBox from '../components/TimeBox/TimeBox'
import articleData from '../data/article'
import timelineData from '../data/timeline'

export default function Home() {
    const articles = articleData;

    const articleRows = [[]];

    // Split articles into rows of 3 articles
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];

        // Add new row if last row if full
        if (articleRows[articleRows.length - 1].length === 3) {
            articleRows.push([])
        }

        // Add article to last row
        articleRows[articleRows.length - 1].push(article);
    }

    return (
        <>
            <Head>
                <title>Oliver Helmut Seitz | Software Developer, Azure, Kubernetes</title>
            </Head>
            <div className="wrapper">
                <section id="section-1">
                    <div className="background">
                        <div className="technology-map">
                            <object id="logo-dotnet" className="logo-hexagon hex-size-large" data="logos-tech/logo-dotnet.svg" type="image/svg+xml"></object>
                            <object id="logo-angular" className="logo-hexagon hex-size-medium" data="logos-tech/logo-angular.svg" type="image/svg+xml"></object>
                            <object id="logo-react" className="logo-hexagon hex-size-large" data="logos-tech/logo-react.svg" type="image/svg+xml"></object>
                            <object id="logo-azure" className="logo-hexagon hex-size-small" data="logos-tech/logo-azure.svg" type="image/svg+xml"></object>
                            <object id="logo-golang" className="logo-hexagon hex-size-medium" data="logos-tech/logo-golang.svg" type="image/svg+xml"></object>
                            <object id="logo-cpp" className="logo-hexagon hex-size-medium" data="logos-tech/logo-cpp.svg" type="image/svg+xml"></object>
                            <object id="logo-graphql" className="logo-hexagon hex-size-small" data="logos-tech/logo-graphql.svg" type="image/svg+xml"></object>
                            <object id="logo-terraform" className="logo-hexagon hex-size-small" data="logos-tech/logo-terraform.svg" type="image/svg+xml"></object>
                        </div>
                    </div>
                    <div className="content">
                        <div className="technology-map">
                            <object id="logo-dotnet" className="logo-hexagon hex-size-large" data="logos-tech/logo-dotnet.svg" type="image/svg+xml"></object>
                            <object id="logo-angular" className="logo-hexagon hex-size-medium" data="logos-tech/logo-angular.svg" type="image/svg+xml"></object>
                            <object id="logo-react" className="logo-hexagon hex-size-large" data="logos-tech/logo-react.svg" type="image/svg+xml"></object>
                            <object id="logo-azure" className="logo-hexagon hex-size-small" data="logos-tech/logo-azure.svg" type="image/svg+xml"></object>
                            <object id="logo-golang" className="logo-hexagon hex-size-medium" data="logos-tech/logo-golang.svg" type="image/svg+xml"></object>
                            <object id="logo-cpp" className="logo-hexagon hex-size-medium" data="logos-tech/logo-cpp.svg" type="image/svg+xml"></object>
                            <object id="logo-graphql" className="logo-hexagon hex-size-small" data="logos-tech/logo-graphql.svg" type="image/svg+xml"></object>
                            <object id="logo-terraform" className="logo-hexagon hex-size-small" data="logos-tech/logo-terraform.svg" type="image/svg+xml"></object>
                        </div>
                        <div className="name-box">
                            <h1>Oliver<span className="middle-name"> Helmut</span> Seitz</h1>
                            <h3>Developer | Azure | Kubernetes</h3>
                        </div>
                    </div>
                </section>

                <section id="section-2">
                    <div className="spacer-15"></div>
                    <div id="timeline-wrapper" className="section-wrapper">
                        <h2>Timeline</h2>
                        <div className="timeline-line"></div>
                        {timelineData.map(o => <TimeBox {...o} />)}
                    </div>
                </section>

                <section id="section-3">
                    <div className="spacer-15"></div>
                    <div className="section-wrapper">
                        <h2>Articles</h2>
                        <div className="spacer-5"></div>
                        <div className="hex-tile-wrapper">
                            <div className="background">
                                <div className="hex-tile-rows">
                                    {articleRows.map(row =>
                                        <div className="hex-tile-row">
                                            {row.map(article => <ArticleTile {...article} />)}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="hex-tile-rows">
                                <div className="hex-tile-rows">
                                    {articleRows.map(row =>
                                        <div className="hex-tile-row">
                                            {row.map(article => <ArticleTile {...article} />)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-4">

                </section>
            </div>
        </>
    )
}
