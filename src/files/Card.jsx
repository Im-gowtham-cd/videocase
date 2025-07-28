export function Card(props) {
    if ((props.temp === 0 && props.ky === 0 )|| (props.temp === 1)) {
        return (
            <>
                <center className='videohead'>{props.year}</center>
                <div className="video">
                    <img src={props.image} alt="" srcset="" />
                    <div className="video-detail">
                        <span className="video-title">{props.title}</span>
                        <span className="video-size">
                            <p>{props.resolution}</p>
                            <p>{props.type}</p>
                            <p>{props.size}</p>
                        </span>
                        <a href={props.link} className="video-download">Download</a>
                    </div>
                </div>
            </>
        );
    }
    else if (props.temp === 0) {
        return (
            <>
                {/* <center className='videohead'>{props.year}</center> */}
                <div className="video">
                    <img src={props.image} alt="" srcset="" />
                    <div className="video-detail">
                        <span className="video-title">{props.title}</span>
                        <span className="video-size">
                            <p>{props.resolution}</p>
                            <p>{props.type}</p>
                            <p>{props.size}</p>
                        </span>
                        <a href={props.link} className="video-download">Download</a>
                    </div>
                </div>
            </>
        );
    }
}