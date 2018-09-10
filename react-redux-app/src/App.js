import React, { Component } from 'react';
import { Layout, Breadcrumb, Menu} from 'antd';
import { Link } from 'react-router'
// import SiderCustom from './SiderCustom';
// import HeaderCustom from './HeaderCustom';
const { Content, Footer,Header} = Layout;


class App extends Component {
  state={
    whei:"",
    urlpath: "Recharge",
    siderdatalist: ["Home", "UserManagement", "SubsystemManagement",
        "ChannelManagement", "LogManagement", "GameManagement", "CooperationManagement", "Information"
    ]
  }
  componentWillMount(){
    this.onWindowResize()
      window.addEventListener('resize', this.onWindowResize)
   }
 onWindowResize=()=>{
   this.setState({
     whei:document.body.clientHeight-20
   })
    
 }
  render() {
    return (
      <Layout className="ant-layout">
        {/* <HeaderCustom /> */}
        <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' ,width:"100%"}}
        >
          <Menu.Item key="1"> <Link to="/app/AppleBasket">AppleBasket</Link></Menu.Item>
          <Menu.Item key="2"> <Link to="/Login">推Login</Link></Menu.Item>
          <Menu.Item key="3"> <Link to="/Register">推出0Register0</Link></Menu.Item>
        </Menu>
      </Header>
   
        <Layout>
        {/* <SiderCustom datalist={this.state.siderdatalist} path={this.state.urlpath}/> */}
         
                  <Content className="Content"  style={{
                  margin: '0 16px',
                  overflow: 'initial',
                  width:'100%',
                  height:this.state.whei,
                  boxSizing:'border-box'
              }}>
                  <div className="contendiv" >
             
             {this.props.children}
       
                  </div>
                  </Content>
               
        </Layout>
                <Footer className="Foot" style={{
                  textAlign: 'left'
              }}>
              <span onClick={this.onclick}>disnji</span>
                    GM工具版本号1-2345
                  </Footer>
              </Layout>
    );
  }
}

export default App;
