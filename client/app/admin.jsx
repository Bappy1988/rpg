import React from 'react';
import {connect} from 'react-redux';
import {Layout, Panel, AppBar, Navigation} from 'react-toolbox'
import {tryAdminLogin} from 'actions/home.actions';

class AdminHome extends React.Component {

    render () {
        return <Layout>
        <Panel style={{display:'flex', flexDirection:'column', height:'100vh'}}>
            <AppBar title="Game Master">
                <Navigation type='horizontal' actions={[{label: "Log off", icon: "person", onClick: ()=>this.props.logout()}]} />
            </AppBar>
            <div style={{flex:1, overflowY:'auto', padding:'1.8rem'}}>
            </div>
        </Panel>
    </Layout>
    }
}

export default connect(()=>{return {}},dispatch=>{
    return {
        logout: () => {
            dispatch(tryAdminLogin(""));
        }
    }
})(AdminHome);