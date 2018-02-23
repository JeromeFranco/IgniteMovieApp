import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Text
} from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Icon name="search" color="white" style={styles.fontIcon} />
          </Right>
        </Header>
        <Content padder>
          <Button>
            <Text> Click Me! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
