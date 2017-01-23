import React, { PropTypes } from 'react';
import { Nav, NavItem, FormGroup, FormControl, Radio, Form, Grid, Row, Col, Button } from 'react-bootstrap';
import Postings from './postings';

class TermItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostings: false
    }

    this.handlePostingsClick = this.handlePostingsClick.bind(this);
  }

  handlePostingsClick() {
    var display = !this.state.displayPostings;
    this.setState({ displayPostings: display });
  }

  render() {
    const s = this.state;
    const p = this.props;

    return <Row>
      <Col md={2}><a href="#" onClick={e => { e.preventDefault(); this.handlePostingsClick() }}>{p.term}</a></Col>
      <Col md={8}><Postings segment={p.segment} field={p.field} term={p.term} displayPostings={s.displayPostings} /></Col>
      </Row>;
  }
}

TermItem.propTypes = {
  segment: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  field: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired
}

export default TermItem;
