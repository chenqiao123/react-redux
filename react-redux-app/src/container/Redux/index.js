import React from 'react'; // React和ProTypes
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // connect方法用于创建控制器组件，即数据和行为交由redux管理

/* 需要挂载到redux上的参数 */
const mapStoreStateToProps = (state) => ({
  dispatch: state.dispatch,
});

/* 创建组件 */
class RootContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("props======",props)
  }

  render() {
    // 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
    return (
      <div className="boss">
        {this.props.children}
      </div>
    );
  }
}

/* 代码类型检查 */
RootContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default connect(mapStoreStateToProps)(RootContainer);