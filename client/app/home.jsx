import React from 'react';
import {connect} from 'react-redux';
import {Layout, Panel, AppBar, } from 'react-toolbox'
import {Row, Col} from 'components/common/grid';
import {Card, CardMedia, CardTitle, List, ListItem, Input, IconButton } from 'react-toolbox';
import uuid from 'uuid';
import {tryAdminLogin} from 'actions/home.actions';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            showPasswordBox: false,
            password: ""
        }
    }

    togglePasswordBox() {
        if (this.state.showPasswordBox){
            this.setState({password: ""});
        }
        this.setState({showPasswordBox: !this.state.showPasswordBox});
    }

    login() {
        let password = this.state.password
        this.setState({password: ""});
        this.props.login(password);
    }

    componentDidUpdate() {
        if(this.props.loggedIn) {
            this.props.history.push('/admin');
        }
    }

    render () {
        return <Layout>
        <Panel style={{display:'flex', flexDirection:'column', height:'100vh'}}>
            <AppBar title="Gaming Session" />
            <div style={{flex:1, overflowY:'auto', padding:'1.8rem'}}>
                <Row>
                    <Col md={6} mdOffset={3}>
                        <Card
                            raised
                            >
                            <CardMedia 
                                aspectRatio="wide"
                                image="/cover.jpg"
                            />
                            <CardTitle
                                title="Welcome to your RPG Session"
                                subtitle="Select your role"
                            />
                            <List selectable ripple>
                                <ListItem caption="Games Master" leftIcon="gavel" onClick={()=>{this.togglePasswordBox()}}/>
                                {this.state.showPasswordBox && <ListItem selectable={false} ripple={false} itemContent={<Input value={this.state.password} onChange={v=>this.setState({password: v})} type="password" label="Password" name="password"/>} rightActions={[<IconButton key={uuid()} icon="send" onClick={()=>this.login()}/>]} />}
                                <ListItem caption="Player" leftIcon="face" onClick={()=>this.props.history.push('/player')}/>
                                <ListItem caption="Viewscreen" leftIcon="tv" onClick={()=>this.props.history.push('/viewer')}/>
                            </List>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Panel>
    </Layout>
    }
}

export default connect(
    state => {
		return {
			loggedIn: state.auth.loggedIn
		}
	},
    dispatch => {
        return {
            login: (password) => dispatch(tryAdminLogin(password))
        }
    }
)(Home);