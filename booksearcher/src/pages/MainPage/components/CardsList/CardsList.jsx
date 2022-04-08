import React, { Fragment, useState } from "react";
import Card from "../../../../components/Card/Card";
import CardBig from "../../../InfoPage/components/Card/CardBig";
import './CardsList.css';

const CardsList = ({ books }) => {
    const [infoPage, setinfoPage] = useState(false);

    const onClickHandler = () => {
        setinfoPage(true);
    };

    if (infoPage == true) {
        return (
            <Fragment>
                <CardBig />
            </Fragment>
        )
    }
    else {
        return (
            <Fragment>
                <div className="wrapper__cards-list">
                    {books.map(book =>
                        <Card book={book} id={book.id} onClick={onClickHandler}>
                            {book.volumeInfo.description}
                        </Card>
                    )}
                </div>
            </Fragment>
        )
    }
}

export default React.memo(CardsList);