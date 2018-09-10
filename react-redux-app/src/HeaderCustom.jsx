/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Menu,Layout} from 'antd';
const { Header } = Layout;
class HeaderCustom extends Component {

    state = {
        user: '',
       data:'',
    };
   
    render() {
      console.log("this.props.path",this.props.pathname)
        return (
            <Header  >
                {/* <Menu mode="horizontal" style={{ lineHeight: '80px'}}>
                 <Menu.Item key="last"  style={{  float: 'left'}}>你当前的位置:{zidianfangyi(this.props.pathname).name}</Menu.Item>
                 
                  <Menu.Item key="quit" style={{  float: 'right',right:'.2%'}}>
                  <Link  className="quit" onClick={this.onClick} >退出登录</Link>
              
                  </Menu.Item>

                </Menu> */}
                 <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                        color: #555;
                        background: #f7f7f7;
                        position:'relative';
                        z-index:999
                    }
                     .ant-menu{
                  color: #fff;
                  background: #4D4D4D;}
                `}</style>
            </Header>
        )
    }
}

export default HeaderCustom;