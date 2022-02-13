const TimeBox = ({ logo, date, content }) => {
    return (
        <div className="timebox-wrapper">
            <img className="timebox-logo" src={logo} />
            <div className="timebox">
                <span className="timebox-date">{date}</span>
                <p className="timebox-content">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default TimeBox;