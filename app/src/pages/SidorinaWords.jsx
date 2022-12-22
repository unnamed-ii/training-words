import React, {useState} from "react";
import {Words} from "../sidorina-constants";
import {Form} from "../components/Form";
import {CurrentLessonCard} from "../components/CurrenLessonCard";

function SidorinaWords() {
    const [repeatingLesson, setRepeatingLesson] = useState('1')

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    shuffle(Words[repeatingLesson]);

    return (
        <div className="sidorina">
            <div className="sidorina__inner">
                <Form
                    repeatingLesson={repeatingLesson}
                    setRepeatingLesson={setRepeatingLesson}
                />
                <CurrentLessonCard
                    repeatingLesson={repeatingLesson}
                />
            </div>
        </div>
    );
}

export default SidorinaWords;
