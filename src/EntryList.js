import { Link } from "react-router-dom";

const EntryList = ({ entries, title, type }) => {
    if (type != "all")
        entries = entries.filter((element) => element.type == type)

    return (
        <div className="entry-list">
            <h1>{title}</h1>
            {
                entries.map((entry) => (
                    <div key={entry.id}>
                        <Link to={`/entries/${entry.id}`}><div className="entry-preview" style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${entry.bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                            <div className="info">
                                <h2>{entry.title}</h2>
                                {entry.type == "manga" ? <p>Chapter {entry.chapter}</p> : <p>Episode {entry.episode}</p>}
                                <p>{new Date(entry.date).toDateString()}</p>
                            </div>
                            <img src={entry.img}></img>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div >
    );
}

export default EntryList;