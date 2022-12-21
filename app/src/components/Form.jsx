import React from 'react';

export const Form = ({repeatingLesson, setRepeatingLesson}) => {
    const handleNextLesson = (e) => {
        e.preventDefault()
        let updatedNumberOfLesson = String(+repeatingLesson + 1);
        setRepeatingLesson(updatedNumberOfLesson);
    }
    const handlePreviousLesson = (e) => {
        e.preventDefault()
        let updatedNumberOfLesson = String(+repeatingLesson - 1);
        setRepeatingLesson(updatedNumberOfLesson);
    }

    return (
        <form>
            <button onClick={(e) => handlePreviousLesson(e)}>Previous Lesson</button>
            <input
                type="number"
                placeholder="Enter number of lesson"
                onChange={(e) => setRepeatingLesson(e.target.value)}
                value={repeatingLesson}
            />
            <button onClick={(e) => handleNextLesson(e)}>Next Lesson</button>
            <button>Shuffle</button>
        </form>
    );
};