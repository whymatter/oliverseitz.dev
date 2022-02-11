const ArticleTile = ({ color, headline, abstract }) => {
    return (
        <div className="hex-tile" style={{ color: color }}>
            <div className="hex-tile-background">
                <svg width="65.113mm" height="75.186mm" version="1.1" viewBox="0 0 65.113 75.186" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-67.124 -16.84)">
                        <path transform="scale(.26458)" d="m499.79 276.77-123.05 71.041-123.05-71.041v-142.08l123.05-71.041 123.05 71.041z" strokeWidth="0" />
                    </g>
                </svg>
            </div>
            <div className="hex-tile-content">
                <h3>{headline}</h3>
                <div className="hex-tile-abstract">
                    {abstract}
                </div>
                <a className="hex-tile-action" href="#">Artikel lesen</a>
            </div>
        </div>
    );
};

export default ArticleTile;