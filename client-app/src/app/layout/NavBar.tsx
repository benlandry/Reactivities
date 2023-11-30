import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (

        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/ATTMTlogo.png" style={{ marginRight: 10 }} />
                </Menu.Item>
                <Menu.Item name='Tournament' />
                <Menu.Item name='Giving' />
                <Menu.Item name='About Us' />
            
            </Container>
        </Menu>
    )
}