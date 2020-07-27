import React, { Component } from 'react';
import styles from './ModeratorDashboard.module.sass'
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import {
    getAllOffersAction,
    moderatorConfirmOfferRequest,
    moderatorRejectOfferRequest,
    clearOffersList,
} from '../../actions/actionCreator';
import OfferBox from '../OfferBox/OfferBox';
import ContestsContainer from "../ContestsContainer/ContestsContainer";
import OffersRenderOptions from "../OffersRenderOptions/OffersRenderOptions";
import PaginationNav from "../PaginationNav/PaginationNav";

class ModeratorDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 8,
            offset: 0,
            offerStatus: CONSTANTS.OFFER_STATUS_PENDING,
            isChanged: false
        }
    }

    componentDidMount() {
        this.props.getAllOffers(this.state);
    }

    renderOffers = () => (
        [...this.props.offers.values()].map((offer) =>
            <OfferBox key={offer.id} data={offer} moderatorChangeOffer={this.moderatorChangeOffer}
        />)
    );

    loadMore = (offset) => {
        const newOffset = this.state.offset + offset;
        this.setState({offset: newOffset});
        this.props.getAllOffers({
            limit: this.state.limit,
            offset: newOffset,
            offerStatus: this.state.offerStatus
        });
    };

    setRenderOptions = (newOptions) => {
        this.setState(newOptions);
    };

    moderatorChangeOffer = (creatorId, offerId, command) => {
        const obj = { creatorId, offerId, command };
        command === "confirm_by_moderator"
            ? this.props.moderatorConfirmOffer(obj)
            : this.props.moderatorRejectOffer(obj);
        this.setIsChanged(true);
    };

    setIsChanged = (value) => {
        this.setState({isChanged: value});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( this.props.isChangeOfferStatus || this.state.isChanged) {
            this.loadMore(0);
            this.setIsChanged(false);
        }
    }

    render() {
        const {totalHave} = this.props;
        return (
            <>
                <div className={styles.dashboardContainer}>
                    <OffersRenderOptions renderOptions={this.state} setRenderOptions={this.setRenderOptions}/>
                    <div className={styles.offersContainer}>
                        <ContestsContainer loadMore={this.loadMore}>
                            {this.renderOffers()}
                        </ContestsContainer>
                    </div>
                    <PaginationNav loadMore={this.loadMore} totalHave={totalHave} offersLength={this.props.offers.length}
                                   offset={this.state.offset}
                    />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => state.getOffersReducer;

const mapDispatchToProps = (dispatch) => {
    return {
        getAllOffers: (data) => dispatch(getAllOffersAction(data)),
        clearOffersList: () => dispatch(clearOffersList()),
        moderatorConfirmOffer: (data) => dispatch(moderatorConfirmOfferRequest(data)),
        moderatorRejectOffer: (data) => dispatch(moderatorRejectOfferRequest(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeratorDashboard);