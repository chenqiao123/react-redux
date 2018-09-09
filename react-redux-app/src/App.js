import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content, Footer} = Layout;

class App extends Component {
  state={
    whei:""
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
      <Layout className="ant-layout-has-sider">
    
                <Layout>
                 
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
                  <Footer className="Foot" style={{
                  textAlign: 'left'
              }}>
              <span onClick={this.onclick}>disnji</span>
                    GM工具版本号1-2345
                  </Footer>
                </Layout>
              </Layout>
    );
  }
}

export default App;
