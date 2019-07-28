import React, { Component } from 'react';
import { Container,Header, Input, Grid,Checkbox, Button } from 'semantic-ui-react';

class Sign extends Component{
    render() {
        return (
            <div className="sign">
                <Container className="container" textAlign='justified'>
                    <Grid className="generalGrid"> 
                        <Grid.Column width={16}>
                            <Header textAlign='center' as='h2' className="headerSign">DUYURU SİSTEMİ</Header>
                        </Grid.Column>
                        <Grid.Column textAlign="center" width={16}>
                                <Grid.Column width={16}>
                                    <Input icon='user' className="w50" iconPosition='left' placeholder='Your ID' type="text"/>
                                </Grid.Column>
                                <Grid.Column width={16} className="mt20">
                                    <Input icon='eye' className="w50" iconPosition='left' placeholder='Your Password' type="password"/>
                                </Grid.Column>
                        </Grid.Column>
                            <Grid.Column floated='right' width={8}>
                                <Checkbox label='Remember Me' />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <a href="#" className="lostPassword">Lost Your Password?</a>
                            </Grid.Column>
                    </Grid>
                    
                    <Grid textAlign="center" className="loginButton">    
                        <Button color='blue'>Log In</Button>
                    </Grid>
                        
                </Container>
            </div>
        )
    }
}

export default Sign;