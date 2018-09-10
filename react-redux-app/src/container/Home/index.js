import React from 'react'
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions/homeAction';
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
    HomeRoot: state.HomeRoot,//获取首页的数据
    appleBasket: state.appleBasket,//获取其他页面的数据
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);