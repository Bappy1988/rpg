import React from 'react';
import {Layout, Panel, AppBar, } from 'react-toolbox'


class PlayerHome extends React.Component {

    render () {
        return <Layout>
        <Panel style={{display:'flex', flexDirection:'column', height:'100vh'}}>
            <AppBar title="Player" />
            <div style={{flex:1, overflowY:'auto', padding:'1.8rem'}}>
            </div>
        </Panel>
    </Layout>
    }
}

export default PlayerHome;