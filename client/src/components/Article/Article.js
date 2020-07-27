import React from 'react';

const Article = ({className, articleHeader, articleContent}) => {
    return (
        <div className={className.articleContainer}>
            <article>
                <h2 className={className.articleHeader}>{articleHeader}</h2>
                <p className={className.articleContent}>{articleContent}</p>
            </article>
        </div>

    );
};

export default Article;