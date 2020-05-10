import React, { Component } from 'react';
import axios from 'axios';
import { MarkdownPreview } from 'react-marked-markdown';
import LoaderElement from '../layout/LoaderElement';

export class About extends Component {
  state = {
    post: 'Loading...',
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://alexandru.tenie.ro/api/loader.php?name=whoami.md&folder=special`
    );
    this.setState({ post: res.data, loading: false });
  }

  render() {
    if (this.state.post === 'Loading...') {
      return <LoaderElement></LoaderElement>;
    } else {
      return <MarkdownPreview value={this.state.post} />;
    }
  }
}

export default About;
