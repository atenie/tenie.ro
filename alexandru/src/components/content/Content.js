import React, { Component } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';

import LoaderElement from '../layout/LoaderElement';

export class Content extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.item);
  }
  render() {
    const { post, loading } = this.props;
    if (loading) {
      return <LoaderElement></LoaderElement>;
    } else {
      return <MarkdownPreview value={post} />;
    }
  }
}

export default Content;
