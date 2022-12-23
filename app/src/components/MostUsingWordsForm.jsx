import React from "react";

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