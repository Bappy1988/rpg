import React from 'react';
import {connect} from 'react-redux';
import {Layout, Panel, AppBar, Navigation} from 'react-toolbox'
import {tryAdminLogin} from 'actions/home.actions';
import { Tabs, Tab } from 'react-toolbox';
import AdminViewscreen from './components/admin/viewscreen';
import Characters from './components/admin/characters';

class AdminHome extends React.Component {
    constructor(){
        super();
        this.state = {
            index: 0
        }
    }

    setIndex(i) {
        this.setState({index: i});
    }

    render () {
        return <Layout>
        <Panel style={{display:'flex', flexDirection:'column', height:'100vh'}}>
            <AppBar title="Game Master">
                <Navigation type='horizontal' actions={[{label: "Log off", icon: "person", onClick: ()=>this.props.logout()}]} />
            </AppBar>
            <div style={{flex:1, overflowY:'auto', padding:'1.8rem'}}>
                <Tabs fixed index={this.state.index} onChange={(i)=>this.setIndex(i)}>
                    <Tab label="Play">
                        <div></div>
                    </Tab>
                    <Tab label="Characters">
                        <Characters/>
                    </Tab>
                    <Tab label="Viewscreen">
                        <AdminViewscreen/>
                    </Tab>
                </Tabs>
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