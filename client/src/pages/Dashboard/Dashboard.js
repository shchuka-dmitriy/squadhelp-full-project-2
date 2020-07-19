import React from 'react';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import ModeratorDashboard from '../../components/ModeratorDashboard/ModeratorDashboard';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';

const Dashboard = (props) => {
    const {role, history} = props;

    const renderDashboardAccordingRole = () => {
        switch (role) {
            case CONSTANTS.CUSTOMER: {
                return <CustomerDashboard history={history} match={props.match}/>
            }
            case CONSTANTS.CREATOR: {
                return <CreatorDashboard history={history} match={props.match}/>
            }
            case CONSTANTS.MODERATOR: {
                return <ModeratorDashboard/>;
            }
            default: {
                return null;
            }
        }
    };

    return (
        <div>
            <Header/>
            {renderDashboardAccordingRole()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.userStore.data
};

export default connect(mapStateToProps)(Dashboard);
