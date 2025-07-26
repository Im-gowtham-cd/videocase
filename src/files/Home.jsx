import i1 from '../video/1.png'
import i2 from '../video/2.png'
import i3 from '../video/3.png'


export default function Home() {
    return (
        <>
            <div className="videobox">
                <center className='videohead'>Video</center>
                <div className="video">
                    <img src={i1} alt="" srcset="" />
                    <span className="video-number">1</span>
                    <div className="video-detail">
                        <span className="video-title">I Miss You So</span>
                        <span className="video-size">
                            <p>1080p</p>
                            <p>Capcut</p>
                            <p>53MB</p>
                        </span>
                        <a href="https://www.playbook.com/s/im-gowtham-cd/bC1VhkxQGzsKES1QbcsX3Feg?assetToken=HJBC65dKvi9xmdwVUDAbnGiF" className="video-download">Download</a>
                    </div>
                </div>

                <div className="video">
                    <img src={i2} alt="" srcset="" />
                    <span className="video-number">2</span>
                    <div className="video-detail">
                        <span className="video-title">IV</span>
                        <span className="video-size">
                            <p>1080p</p>
                            <p>Capcut</p>
                            <p>13.9MB</p>
                        </span>
                        <a href="https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM" className="video-download">Download</a>
                    </div>
                </div>

                <div className="video">
                    <img src={i3} alt="" srcset="" />
                    <span className="video-number">3</span>
                    <div className="video-detail">
                        <span className="video-title">New West Lyric</span>
                        <span className="video-size">
                            <p>1080p</p>
                            <p>Capcut</p>
                            <p>59.1MB</p>
                        </span>
                        <a href="https://www.playbook.com/s/im-gowtham-cd/Fmc1VAHKxU5qZt4eNB5oXtGm?assetToken=LdsDr89bzwBurvHQ15EY1ZTD" className="video-download">Download</a>
                    </div>
                </div>

            </div>
        </>
    );
}
