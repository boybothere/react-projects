import React, { useState } from "react";

export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"

    })

    function handleChange(event){
        const {name, value} = event.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name] : value
        }))
    }
    const [fetchedMemes, setFetchedMemes] = React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setFetchedMemes(data.data.meme))
    },[fetchedMemes])
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top font-mono">{meme.topText}</span>
                <span className="bottom font-mono">{meme.bottomText}</span>
            </div>
        </main>
    )
}