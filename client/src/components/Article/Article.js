import React from 'react';

const Article = (props) => {
    return (
        <div className={props.className.articleContainer}>
            <article>
                <h2 className={props.className.articleHeader}>{props.articleHeader}</h2>
                <p className={props.className.articleContent}>{props.articleContent}</p>
            </article>
        </div>

    );
};

export default Article;