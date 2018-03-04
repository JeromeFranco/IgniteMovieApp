import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailCreators, { DetailSelectors } from '../Redux/DetailRedux';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  View,
  InteractionManager
 } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Button,
  Icon,
  Right,
  H1,
  H2,
  Thumbnail,
  Text,
  Spinner
} from 'native-base';
import theme from '../Themes/variables/commonColor';

import styles from './Styles/DetailScreenStyle';

const window = Dimensions.get('window');

const PARALLAX_HEADER_HEIGHT = 202;
const STICKY_HEADER_HEIGHT = theme.toolbarHeight + 2;
const POSTER_HEIGHT = 141;


class DetailScreen extends Component {
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const { type, id } = this.props.navigation.state.params;
      this.props.getDetail({type, id});
    });
  }

  renderStickyHeader = () => {
    const { navigation, detail } = this.props;

    return (
      <Header style={styles.stickyHeader}>
        <Body>
          <Title style={styles.stickyHeaderTitle}>{navigation.state.params.title}</Title>
        </Body>
      </Header>
    );
  }
  render() {
    const { navigation, detail: { data, fetching } } = this.props;
    const isFetchingDetail = fetching === null || fetching;
    return (
      <Container>
        {isFetchingDetail ? <Spinner /> :
        <ParallaxScrollView
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
          backgroundSpeed={10}
          backgroundColor={theme.toolbarDefaultBg}
          renderBackground={() => (
            <View>
              <Image source={{uri: data.backdrop_path,
                              width: window.width,
                              height: PARALLAX_HEADER_HEIGHT}}/>
              <View style={{position: 'absolute',
                            top: 0,
                            width: window.width,
                            backgroundColor: 'rgba(0,0,0,.4)',
                            height: PARALLAX_HEADER_HEIGHT}}/>
            </View>
          )}
          renderForeground={() => (
            <View style={ styles.parallaxHeader }>
                <Thumbnail large style={ styles.avatar } source={{
                  uri: data.poster_path
                }}/>
                <H2 style={styles.parallaxTitle}>{data.title}</H2>
              </View>
          )}
          renderFixedHeader={() => (
            <View style={styles.fixedSection}>
              <Header style={styles.fixedSectionHeader}>
                <Left>
                  <Button transparent>
                    <Icon name="md-arrow-back" />
                  </Button>
                </Left>
                <Right>
                  <Button transparent>
                    <Icon name="md-more" />
                  </Button>
                </Right>
              </Header>
            </View>
          )}
          renderStickyHeader={this.renderStickyHeader}
        >
          <View style={styles.overview}>
            <H2 style={styles.overviewHeader}>Overview</H2>
            <Text style={styles.overviewContent}>{data.overview}</Text>
            <H2 style={styles.featuredCrewHeader}>Featured Crew</H2>
            {}
          </View>
        </ParallaxScrollView>}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: DetailSelectors.getData(state)
  };
};

const mapDispatchToProps = {
  getDetail: DetailCreators.detailRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
