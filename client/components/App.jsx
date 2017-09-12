import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Grid, Row, Col,
  Button,
} from 'react-bootstrap';

import NavBar from './NavBar';

import { incrementCounter } from '../store/modules/counter';

export const App = ({ count, buttonCallback }) => (
  <div>
    <NavBar />
    <Grid>
      <Row>
        <Col md={1} mdOffset={5}>
          <Button onClick={buttonCallback}>Click Me</Button>
        </Col>
        <Col md={1}>
          Count: {count}
        </Col>
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  count: PropTypes.number.isRequired,
  buttonCallback: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  buttonCallback: incrementCounter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
