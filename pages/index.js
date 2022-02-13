import Head from 'next/head'
import { useEffect, useState } from 'react'
import ArticleTile from '../components/ArticleTile/ArticleTile'
import TimeBox from '../components/TimeBox/TimeBox'
import articleData from '../data/article'
import timelineData from '../data/timeline'
import { gsap } from "gsap";

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

    useEffect(() => {
        const { ScrollTrigger } = require("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".name-box", {
            scrollTrigger: {
                trigger: ".name-box",
                scrub: true,
                start: "center center",
                end: "bottom top"
            },
            transform: "translateY(40vh)"
        });

        gsap.utils.toArray(".timebox-wrapper").forEach(timebox => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: timebox,
                    start: "top 70%",
                    end: "bottom top",
                    scrub: true
                }
            })
                .fromTo(timebox.querySelectorAll(".timebox-logo"),
                    { transform: 'translate(10%, -80%)' },
                    { transform: 'translate(10%, 40%)' });;

            gsap.timeline({
                scrollTrigger: {
                    trigger: timebox,
                    start: "top 85%",
                    end: "top 75%",
                    scrub: true
                }
            }).fromTo(timebox, { opacity: 0 }, { opacity: 1 });
        });

    }, []);

    return (
        <>
            <Head>
                <title>Oliver Helmut Seitz | Software Developer, Azure, Kubernetes</title>
            </Head>
            <section id="section-1">
                <div className="wrapper">
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
                </div>
            </section>

            <section id="section-2">
                <div className="spacer-15"></div>
                <div className="wrapper wrapper-center">
                    <div id="timeline-wrapper" className="section-wrapper">
                        <div className="timeline-glow"></div>
                        <h2>Timeline</h2>
                        <div className="timeline-line"></div>
                        {timelineData.map(o => <TimeBox {...o} />)}
                    </div>
                </div>
            </section>

            <section id="section-3">
                <div className="spacer-15"></div>
                <div className="wrapper wrapper-center">
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
                                    {articleRows.map((row, i) =>
                                        <div className="hex-tile-row" style={{ zIndex: articleRows.length - i }}>
                                            {row.map(article => <ArticleTile {...article} />)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer-15"></div>
            </section>

            <section id="section-4">
                <div className="wrapper wrapper-center">
                    <div className="footer-wrapper">
                        <div className="footer-grid">
                            <div>
                                <h3>Rechtliche Informationen</h3>
                                <ul className="legal-links">
                                    <li><a href="/impressum">Impressum</a></li>
                                    <li><a href="/privacy">Datenschutz</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3>In Kontakt bleiben</h3>
                                <div className="logo-row">
                                    <a href="https://github.com/whymatter">
                                        <img src="logos-brands/logo-github.webp"></img>
                                    </a>
                                    <a href="https://www.instagram.com/_seitzoliver">
                                        <img src="logos-brands/logo-instagram.webp"></img>
                                    </a>
                                    <a href="https://www.linkedin.com/in/oliver-seitz/">
                                        <img src="logos-brands/logo-linkedin.webp"></img>
                                    </a>
                                    <a href="https://twitter.com/whymatter_">
                                        <img src="logos-brands/logo-twitter.webp"></img>
                                    </a>
                                    <a href="https://medium.com/@why_matter">
                                        <img src="logos-brands/logo-medium.webp"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="copyright">Copyright © 2022 - oliverseitz.dev</p>
                    </div>
                </div>
            </section>
        </>
    )
}
