import Head from 'next/head'
import ArticleTile from '../components/ArticleTile/ArticleTile'
import TimeBox from '../components/TimeBox/TimeBox'

export default function Home() {
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
                        <TimeBox
                            logo="logos-company/logo-digatus.png"
                            date="jetzt"
                            content="Lorem ipsum dolor sit amet"
                        />
                        <TimeBox
                            logo="logos-company/logo-bmw.png"
                            date="12-2018"
                            content="Lorem ipsum dolor sit amet"
                        />
                        <TimeBox
                            logo="logos-company/logo-xitaso.png"
                            date="03-2018"
                            content="Lorem ipsum dolor sit amet"
                        />
                        <TimeBox
                            logo="logos-company/logo-4sellers.png"
                            date="01-2015"
                            content="Lorem ipsum dolor sit amet"
                        />
                        <TimeBox
                            logo="logos-company/logo-4sellers.png"
                            date="08-2015"
                            content="Lorem ipsum dolor sit amet"
                        />
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
                                    <div className="hex-tile-row">
                                        <ArticleTile
                                            color="hsl(195deg 93% 48%)"
                                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                            abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                        />
                                        <ArticleTile
                                            color="hsl(94deg 93% 38%)"
                                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                            abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                        />
                                        <ArticleTile
                                            color="hsl(272deg 93% 48%)"
                                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                            abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                        />
                                    </div>
                                    <div className="hex-tile-row">
                                        <ArticleTile
                                            color="hsl(36deg 93% 48%)"
                                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                            abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                        />
                                        <ArticleTile
                                            color="hsl(328deg 93% 48%)"
                                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                            abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                        />
                                        <ArticleTile
                                            color="hsl(195deg 93% 48%)"
                                            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                            abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hex-tile-rows">
                                <div className="hex-tile-row">
                                    <ArticleTile
                                        color="hsl(195deg 93% 48%)"
                                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                    />
                                    <ArticleTile
                                        color="hsl(94deg 93% 38%)"
                                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                    />
                                    <ArticleTile
                                        color="hsl(272deg 93% 48%)"
                                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                    />
                                </div>
                                <div className="hex-tile-row">
                                    <ArticleTile
                                        color="hsl(36deg 93% 48%)"
                                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                    />
                                    <ArticleTile
                                        color="hsl(328deg 93% 48%)"
                                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                    />
                                    <ArticleTile
                                        color="hsl(195deg 93% 48%)"
                                        headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
                                        abstract="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mollis magna sed consectetur. Integer leo lorem, maximus ut ante tincidunt, luctus feugiat urna. Orci varius natoque."
                                    />
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
