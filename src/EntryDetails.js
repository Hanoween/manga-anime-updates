import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import image from './sad.jpg';
import useFetch from "./useFetch";

const EntryDetails = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [bg, setBg] = useState("");
    const [type, setType] = useState("");
    const [isP, setIsP] = useState(false);
    var {data, isPending, error } = useFetch('http://localhost:8001/entries/' + id);
    const navigate = useNavigate();

    const handleSave = (e) => {
        e.preventDefault();
        setIsP(true);

        fetch("http://localhost:8001/entries/" + id, {
            method: "GET",
            headers: { 'Accept': 'application/json' }
        }).then(res => res.json())
            .then(entry => {
                setIsP(false);
                console.log("it works");
                //use node.js
            })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        console.log("deleting");
        fetch("http://localhost:8001/entries/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="entry-details">
            {isP && <div>Loading...</div>}
            {error && <div className="error"><p style={{ color: "black" }}>{error}</p><img src={image} /></div>}
            {data && (
                <div className="create">
                    <h2>Edit Entry</h2>
                    <form>
                        <div className="section">
                            <label>Title:</label>
                            <input
                                type="text"
                                required
                                defaultValue={data.title}
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                            />
                        </div>
                        <div className="section">
                            <label>Type:</label>
                            <select
                                defaultValue={data.type}
                                onChange={e => setType(e.target.value)}
                            >
                                <option value="anime">anime</option>
                                <option value="manga">manga</option>
                            </select>
                        </div>
                        <div className="section">
                            <label>Cover Image URL:</label>
                            <input
                                type="text"
                                required
                                defaultValue={data.img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>
                        <div className="section">
                            <label>Banner URL:</label>
                            <input
                                type="text"
                                required
                                defaultValue={data.bg}
                                onChange={(e) => setBg(e.target.value)}
                            />
                        </div>
                        <div className="section" id="buttons">
                            {!isPending && <button onClick={handleSave}>Save</button>}
                            {isPending && <button disabled>Saving...</button>}
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default EntryDetails;