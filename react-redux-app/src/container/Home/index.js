import React from 'react'
import { Link } from 'react-router'
import AppleBasket from '../../component/Home/Apple/AppleBasket';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions/HomeAction';
class Home extends React.Component {
    render() {
        const props = this.props;
    const { store } = this.context;
    console.log("store",store,props)
        return <h2>
           <Link to="/Register">推出0Register0</Link><br/>
            {/*  <Link to="/">推出/</Link><br/>
            <Link to="/Login">推出Login</Link><br/> */}
            首页
            
            {/* <AppleBasket/> */}
        </h2>
    }
}
const mapStateToProps = state => ({
    Home: state.HomeRootReducer
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

