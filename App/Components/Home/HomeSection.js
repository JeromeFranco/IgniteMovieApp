import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import styles from './Styles/HomeSectionStyle';
import { List, ListItem, Text, Thumbnail, H2, H3 } from 'native-base';

export default class HomeSection extends Component {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    onItemClick: PropTypes.func
  }


  render() {
    const { title, items, onItemClick } = this.props;
    return (
      <List >
        <ListItem itemDivider style={styles.header}>
          <H2 style={styles.headerTitle}>{title}</H2>
        </ListItem>
        {
          items.map(item =>
            <ListItem key={item.id} style={styles.listItem}>
              <TouchableOpacity style={styles.item}>
                <Image source={{uri: item.backdrop_path}} style={styles.itemImage} />
                <H2 style={styles.itemCaption}>{item.title}</H2>
              </TouchableOpacity>
            </ListItem>
          )
        }
      </List>
    );
  }
}
