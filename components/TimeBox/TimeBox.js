const TimeBox = ({ logo, date, content }) => {
    return (
        <div className="timebox">
            <div className="timebox-background">
                <img src={logo} />
            </div>
            <span className="timebox-date">{date}</span>
            <p className="timebox-content">
                {content}
            </p>
        </div>
    );
}

export default TimeBox;