import React from "react";
import {Words} from "../sidorina-constants";

export const CurrentLessonCard = (repeatingLesson) => {
    return (
        <div className={"lesson-" + repeatingLesson.repeatingLesson}>
            <h1>{`Ders ${repeatingLesson.repeatingLesson}`}</h1>
            <ul>
                {Words[repeatingLesson.repeatingLesson].map(word => (
                    <li key={Math.floor(Math.random() * 100000)}>
                        {word}
                    </li>
                ))}
            </ul>
        </div>
    )
}