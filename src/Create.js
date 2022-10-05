import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [bg, setBg] = useState("");
    const [type, setType] = useState("anime");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = { title, type, img, bg}

        setIsPending(true);

        fetch('http://localhost:8001/entries', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entry)
        }).then(() => {
            setIsPending(false);
            navigate("/");
        })
    }

    return (
        <div className="create">
            <h2>Add a New Entry</h2>
            <form onSubmit={handleSubmit}>
                    <div className="section">
                        <label>Title:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="section">
                        <label>Type:</label>
                        <select
                            value={type}
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
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </div>
                    <div className="section">
                        <label>Banner URL:</label>
                        <input
                            type="text"
                            required
                            value={bg}
                            onChange={(e) => setBg(e.target.value)}
                        />
                    </div>
                    <div className="section">
                        {!isPending && <button>Add Entry</button>}
                        {isPending && <button disabled>Adding...</button>}
                    </div>
                </form>
        </div>
    );
}

export default Create;