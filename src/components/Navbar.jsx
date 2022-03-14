import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import IMG from '../assets/logo.png';
import { logout } from '../redux/apiCalls';
import { logoutSuccess } from '../redux/userRedux';

const Container = styled.div`
  height: 60px;
  background-color: #f1f1f1;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 6px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '0px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  ${mobile({ fontSize: '14px', marginLeft: '10px' })}
`;

const Navbar = () => {
  let quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.clear()
  };


  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer> */}
          <Logo>
            <img style={{ width: '45px' }} src={IMG} alt="" />
          </Logo>
        </Left>
        <Center>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <Logo> AmineTech</Logo>
          </Link>
        </Center>
        <Right>
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/products/men'}
          >
            <MenuItem>Shop</MenuItem>
          </Link>
          {user ? (
            <MenuItem onClick={handleClick}>Logout</MenuItem>
          ) : (
            <div style={{ display: 'flex' }}>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={'/register'}
              >
                <MenuItem>Register</MenuItem>
              </Link>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={'/login'}
              >
                <MenuItem>Login</MenuItem>
              </Link>
            </div>
          )}
          <Link to="/cart">
            <MenuItem>
            {user ? (
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            ) : (
              <ShoppingCartOutlined />
            )}
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
