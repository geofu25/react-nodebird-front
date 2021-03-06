import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd'
import UserProfile from './UserProfile.js';
import LoginForm from './LoginForm.js';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
  vertical-align: 'middle';
`;

const AppLayout = ({ children }) => {
 
 const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    
 return (
    <div>
        <Menu mode="horizontal">
            <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item>
                <SearchInput enterButton />
            </Menu.Item>
            <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>
                {isLoggedIn ? <UserProfile /> : <LoginForm/> }
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
               <a href="https://github.com/geofu25/react-nodebird-front" target="_balck" rel="noreferrer noopener">React-nodebird-front Git</a>
            </Col>
        </Row>
        
    </div>
 );
};

AppLayout.propTypes = {
 children: PropTypes.node.isRequired,
};

export default AppLayout;