import i1 from '../video/1.png'
import i2 from '../video/2.png'
import i3 from '../video/3.png'
import { Card } from '../files/Card'
export default function Home() {
    const cards = [
        {
            key: 0,
            year: 'April 2025',
            image: i3,
            title: 'New West Lyric',
            resolution: '1080p',
            type: 'Capcut',
            size: '59.1MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/Fmc1VAHKxU5qZt4eNB5oXtGm?assetToken=LdsDr89bzwBurvHQ15EY1ZTD',
        },
        {
            key: 1,
            year: 'May 2025',
            image: i1,
            title: 'I Miss You So',
            resolution: '1080p',
            type: 'Capcut',
            size: '53MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/bC1VhkxQGzsKES1QbcsX3Feg?assetToken=HJBC65dKvi9xmdwVUDAbnGiF',
        },
        {
            key: 2,
            year: 'May 2025',
            image: i2,
            title: 'IV',
            resolution: '1080p',
            type: 'Capcut',
            size: '13.9MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM',
        },
        {
            key: 3,
            year: 'May 2025',
            image: i2,
            title: 'IV',
            resolution: '1080p',
            type: 'Capcut',
            size: '13.9MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM',
        },
        {
            key: 4,
            year: 'May 2025',
            image: i2,
            title: 'IV',
            resolution: '1080p',
            type: 'Capcut',
            size: '13.9MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM',
        },
        {
            key: 5,
            year: 'June 2025',
            image: i2,
            title: 'IV',
            resolution: '1080p',
            type: 'Capcut',
            size: '13.9MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM',
        },
        {
            key: 6,
            year: 'June 2025',
            image: i2,
            title: 'IV',
            resolution: '1080p',
            type: 'Capcut',
            size: '13.9MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM',
        },
        {
            key: 7,
            year: 'July 2025',
            image: i2,
            title: 'IV',
            resolution: '1080p',
            type: 'Capcut',
            size: '13.9MB',
            link: 'https://www.playbook.com/s/im-gowtham-cd/ZdDZzUoFzL4BMZT5YJDiivgG?assetToken=ZX6MFeqYc2HT1AXj3rGKX5AM',
        }

    ]

    var temp = 1;
    var temp1 = cards[0].year;
    const cardcontainer = cards.map((c, i) => {
        if (c.year !== temp1) {
            temp = 1;
            // return <Card temp={temp} year={c.year} key={i} image={c.image} title={c.title} resolution={c.resolution} type={c.type} size={c.size} link={c.link} />
        }
        else {
            temp = 0;
        }
        temp1 = c.year;
        return <Card temp={temp} year={c.year} ky={c.key} key={i} image={c.image} title={c.title} resolution={c.resolution} type={c.type} size={c.size} link={c.link} />
    })
    return (
        <>
            <div className="videobox">
                {/* <center className='videohead'>May 2025</center> */}
                {cardcontainer}
            </div>
            <footer className='footer'>
                <p>© 2025 Gotamu.exe</p>
            </footer>
        </>
    );
}
