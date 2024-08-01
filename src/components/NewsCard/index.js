import './index.css'

const NewsCard = ({story}) => {
    const {hline, intro, context} = story
    return(
        <div class="news-card">
            <h2 class="news-card-title">{hline}</h2>
            <p class="news-card-info">{intro}</p>
            <button class="like-button">{context}</button>
        </div>
    )
}

export default NewsCard