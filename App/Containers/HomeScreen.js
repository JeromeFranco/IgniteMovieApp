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
import OnTheAirCreators, { OnTheAirSelectors } from '../Redux/OnTheAirRedux';
import InTheatresCreators, { InTheatresSelectors } from '../Redux/InTheatresRedux';

// Styles
import styles from './Styles/HomeScreenStyle';

import HomeSection from '../Components/Home/HomeSection';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.getOnTheAir();
    this.props.getInTheatres();
  }

  handleItemClick = (item) => {
    this.props.navigation.navigate('DetailScreen', item);
  }

  render() {
    const { onTheAir, inTheatres } = this.props;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content>
          <HomeSection title="On TV" items={onTheAir.data || []} onItemClick={this.handleItemClick} />
          <HomeSection title="In Theatres" items={inTheatres.data || []} onItemClick={this.handleItemClick} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    onTheAir: OnTheAirSelectors.getData(state),
    inTheatres: InTheatresSelectors.getData(state)
  };
};

const mapDispatchToProps = {
  getOnTheAir: OnTheAirCreators.onTheAirRequest,
  getInTheatres: InTheatresCreators.inTheatresRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
