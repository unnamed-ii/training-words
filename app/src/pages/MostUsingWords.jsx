import React, {useState} from "react";
import {MostUsingWordsData} from "../most-using-words-constants";

export const MostUsingWordsForm = ({prevPage, nextPage, repeatingPage}) => {
    return (
        <>
            <form>
                <button onClick={(e) => prevPage(e)}>Previous Page</button>
                <span>Current Page: <b>{repeatingPage}</b></span>
                <button onClick={(e) => nextPage(e)}>Next Page</button>
            </form>
        </>
    )
}

function MostUsingWords() {
    const [repeatingPage, setRepeatingPage] = useState('1')

    const nextPage = (e) => {
        e.preventDefault();
        let pageNumber = repeatingPage < 10 ? String(+repeatingPage + 1) : '1'
        setRepeatingPage(pageNumber)
    }

    const prevPage = (e) => {
        e.preventDefault();
        let pageNumber = repeatingPage > 1 ? String(+repeatingPage - 1) : '10'
        setRepeatingPage(pageNumber)
    }

    return (
        <>
            <div className="most-using-words">
                <div className="inner">
                    <h3>The most popular 500 words</h3>
                    <MostUsingWordsForm
                        nextPage={nextPage}
                        prevPage={prevPage}
                        repeatingPage={repeatingPage}
                    />
                    <ul>
                        {MostUsingWordsData[repeatingPage].map(word => (
                            <li key={Math.floor(Math.random() * 1000000)}>
                                {word}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MostUsingWords;
