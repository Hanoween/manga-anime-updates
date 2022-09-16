import EntryList from "./EntryList";
import useFetch from "./useFetch";

const Home = () => {
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
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <div>{<EntryList entries={entries} title="Latest Updates" />}</div>}
        </div>
    );
}

export default Home;