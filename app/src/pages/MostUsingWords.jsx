import React, {useState} from "react";
import {MostUsingWordsData} from "../most-using-words-constants";

export const MostUsingWordsForm = ({prevPage, nextPage, currentPage}) => {
    return (
        <>
            <form>
                <button onClick={(e) => prevPage(e)}>Previous Page</button>
                <span>Current Page: <b>{currentPage}</b></span>
                <button onClick={(e) => nextPage(e)}>Next Page</button>
            </form>
        </>
    )
}


const first50Words = [
    'insanlar - люди',
    'adam - мужчина',
    'kadın - женщина',
    'çocuk - ребенок',
    'oğlan - мальчик',
    'kız - девочка; дочь',
    'arkadaş - друг',
    'konuk - гость',
    'alıcı - покупатель',
    'aile - семья',
    'ebeveyn - родители',
    'baba  - отец',
    'anne - мать',
    'kocam - муж',
    'karısı - жена',
    'oğul - сын',
    'dede - дед',
    'nine - бабушка',
    'kayınpeder - тесть / свекор',
    'kayınvalide - теща / свекровь',
    'amca - дядя',
    'teyze - тетя',
    'kardeş - брат; сестра',
    'kuzen - двоюродный брат, двоюродная сестра',
    'iş - работа',
    'öğretmen - учитель',
    'sürücü - водитель',
    'işçi - рабочий',
    'mühendis - инженер',
    'doktor - врач',
    'hemşire - медсестра',
    'tezgâhtar - продавец',
    'muhasebeci - бухгалтер',
    'sanatçı - художник',
    'öğrenci - студент, школьник',
    'ülke - страна',
    'Rusya - Россия',
    'Türkiye - Турция',
    'hayvan - животное',
    'kedi - кошка',
    'köpek - собака',
    'kuş - птица',
    'şehir - город',
    'okul - школа',
    'üniversite - университет',
    'tiyatro - театр',
    'sokak - улица',
    'meydan - площадь',
    'ev - дом',
    'kilise - церковь',
    'cami - мечеть',
]

function MostUsingWords() {
    const [currentShowing50words, setCurrentShowing50words] = useState(first50Words)
    const [currentPage, setCurrentPage] = useState(1)

    const cuttingData = () => {
        let startingWord = currentPage === 1 ? 1 : currentPage * 50;
        let finishingWord = currentPage === 1 ? currentPage * 50 : (currentPage + 1) * 50;
        let currentArrOfWords = []

        for (let i = startingWord; i < finishingWord; i++){
            currentArrOfWords.push(MostUsingWordsData[i])
        }

        setCurrentShowing50words(currentArrOfWords);
    }

    const nextPage = (e) => {
        e.preventDefault();
        let numOfPage = currentPage < 11 ? currentPage + 1 : currentPage;
        setCurrentPage(numOfPage)
        cuttingData()
    }

    const prevPage = (e) => {
        e.preventDefault();
        let numOfPage = currentPage > 1 ? currentPage - 1 : currentPage;
        setCurrentPage(numOfPage)
        cuttingData()
    }

    return (
        <>
            <div className="most-using-words">
                <div className="inner">
                    <h3>The most popular 500 words</h3>
                    <MostUsingWordsForm
                        nextPage={nextPage}
                        prevPage={prevPage}
                        currentPage={currentPage}
                    />
                    <ul>
                        {currentShowing50words.map(word => (
                            <li>
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
