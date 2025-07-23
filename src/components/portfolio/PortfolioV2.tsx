import React, { useEffect, useState } from "react";
import PortfolioV2Data from "../../../src/assets/jsonData/portfolio/PortfolioV2Data.json";
import SinglePortfolioV2 from "./SinglePortfolioV2";
import { Link } from "react-router-dom";

function groupByCategory(portfolio: any[]): Record<string, any[]> {
    const groups: Record<string, any[]> = {};
    portfolio.forEach((item: any) => {
        const category = item.category || item.tag || 'Other';
        if (!groups[category]) groups[category] = [];
        groups[category].push(item);
    });
    return groups;
}

const PortfolioV2 = () => {
    const [portfolio, setPortfolio] = useState<any[]>(PortfolioV2Data);
    const [activeCategory, setActiveCategory] = useState<string>('All');

    useEffect(() => {
        const stored = localStorage.getItem('portfolioV2');
        if (stored) {
            setPortfolio([...PortfolioV2Data, ...JSON.parse(stored)]);
        }
    }, []);

    const grouped = groupByCategory(portfolio);
    const categories = Array.from(new Set(['All', ...Object.keys(grouped)]));
    const displayedWorks = activeCategory === 'All' ? portfolio : grouped[activeCategory] || [];

    return (
        <div className="portfolio-maxteam bg-dark text-light min-vh-100 d-flex flex-column">
            <div className="container py-5 flex-grow-1">
                <h1 className="display-4 fw-bold text-center mb-5" style={{letterSpacing:2}}>All Projects</h1>
                <div className="d-flex overflow-auto mb-5 pb-2 justify-content-center" style={{ gap: 16 }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`btn px-4 py-2 fw-semibold mx-1 ${activeCategory === cat ? 'bg-warning text-dark shadow' : 'btn-outline-light bg-dark text-light border-secondary'}`}
                            style={{ borderRadius: 32, minWidth: 120, whiteSpace: 'nowrap', fontSize: 18, transition: 'all .2s' }}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="row g-4">
                    {displayedWorks.length === 0 && (
                        <div className="col-12 text-center text-muted py-5">No works in this category.</div>
                    )}
                    {displayedWorks.map((work: any) => (
                        <div className="col-12 col-md-6 col-lg-4" key={work.id}>
                            <div className="portfolio-card position-relative rounded-4 shadow-lg overflow-hidden bg-black h-100" style={{transition:'transform .2s', minHeight:340}}>
                                <div className="overflow-hidden" style={{height:260}}>
                                    <img src={work.image || `/assets/img/portfolio/${work.thumb}`} alt={work.title || work.text} className="w-100 h-100 object-fit-cover" style={{filter:'brightness(0.85)', transition:'filter .2s'}} />
                                </div>
                                <div className="portfolio-overlay position-absolute start-0 end-0 bottom-0 p-4 d-flex flex-column justify-content-end" style={{background:'linear-gradient(0deg, #181b1f 90%, transparent 100%)', minHeight:100, transition:'opacity .2s', opacity:0.97}}>
                                    <h5 className="fw-bold text-white mb-1" style={{fontSize:22}}>{work.title || work.text}</h5>
                                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill" style={{fontSize:15, fontWeight:600}}>{work.category || work.tag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="text-center mt-auto py-4 small text-muted bg-dark border-top border-secondary">
                2024 © ALL RIGHTS RESERVED
            </footer>
        </div>
    );
};

export default PortfolioV2;