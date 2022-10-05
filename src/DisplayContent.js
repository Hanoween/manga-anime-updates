import EntryList from "./EntryList";
import useFetch from "./useFetch";
import image from './sad.jpg';

const DisplayContent = ({type, name, title}) => {
    const { data, isPending, error } = useFetch('http://localhost:8001/entries');
    var entries = [];

    if (data) {
        data.forEach(entry => {
            entries.push(entry);
        });
        entries.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }

    return (
        <div className={name}>
            {error && <div className="error"><p style={{color: "black"}}>{error}</p><img src={image} /></div>}
            {isPending && <div className="loading">Loading...</div>}
            {data && <div>{<EntryList entries={entries} title={title} type={type} />}</div>}
        </div>
    );
}
 
export default DisplayContent;