import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

export class CurrencyDate extends Component {
    render() {
        return (
            <Text>
                {moment(this.date).format('D MMMM, YYYY')}
            </Text>
        )
    }
}

CurrencyDate.propTypes = {
    date: PropTypes.object
}
  