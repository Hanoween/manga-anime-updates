import { Link } from 'react-router-dom'

const EntryList = ({ entries, title }) => {
    return (
        <div className="entry-list">
            <h1>{title}</h1>
            {entries.map((entry) => (
                <div className="entry-preview" key={entry.id}>
                    <div className="info">
                        <h2>{entry.title}</h2>
                        {entry.type == "manga" ? <p>chapter {entry.chapter}</p> : <p>episode {entry.episode}</p>}
                        <p>last updated: {entry.date}</p>
                    </div>
                    <img src={entry.img}></img>
                </div>
            ))}
        </div>
    );
}

export default EntryList;