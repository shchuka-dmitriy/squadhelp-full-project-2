import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Article from "../../components/Article/Article";
import articles from "../../assets/articlesList";

const RegistrationPage = (props) => {
    props.clearError();

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to={'/'}>
                        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    </Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <div className={styles.headerFormContainer}>
                    <h2 className={styles.formHeader}>
                        CREATE AN ACCOUNT
                    </h2>
                    <h4 className={styles.formUnderheader}>
                        We always keep your name and email address private.
                    </h4>
                </div>
                <RegistrationForm/>
            </div>
            <div className={styles.footer}>
                <div className={styles.articlesMainContainer}>
                    <div className={styles.ColumnContainer}>
                        <Article articleHeader={articles.firstArticle.articleHeader}
                                 articleContent={articles.firstArticle.articleContent}
                                 className={styles}/>
                        <Article articleHeader={articles.secondArticle.articleHeader}
                                 articleContent={articles.secondArticle.articleContent}
                                 className={styles}/>
                    </div>
                     <div className={styles.ColumnContainer}>
                        <Article articleHeader={articles.thirdArticle.articleHeader}
                                 articleContent={articles.thirdArticle.articleContent}
                                 className={styles}/>
                        <Article articleHeader={articles.fourthArticle.articleHeader}
                                 articleContent={articles.fourthArticle.articleContent}
                                 className={styles}/>
                        <Article articleHeader={articles.fifthArticle.articleHeader}
                                 articleContent={articles.fifthArticle.articleContent}
                                 className={styles}/>
                        <Article articleHeader={articles.sixthArticle.articleHeader}
                                 articleContent={articles.sixthArticle.articleContent}
                                 className={styles}/>
                        <Article articleHeader={articles.seventhArticle.articleHeader}
                                 articleContent={articles.seventhArticle.articleContent}
                                 className={styles}/>
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);