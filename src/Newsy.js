import "glamor/reset";
import React, { Component } from "react";
import { css } from "glamor";
import { getPublicationKind } from "./utils/api";
import { StyledNewsy, StyledTitle } from "./Newsy.glamorous";
import ArticleGrid from "./components/ArticleGrid/ArticleGrid";
import Headline from "./components/Headline/Headline";
import Article from "./components/Article/Article";
import Loading from "./components/Loading/Loading";

class Newsy extends Component {
  state = {
    loading: true,
    data: [],
  };

  //   fetch version
  //   async componentDidMount() {
  //     const response = await fetch(getPublicationKind());
  //     const data = await response.json();

  //     this.setState({
  //       loading: false,
  //       data: data.documents
  //     });
  //   }

  // seed version
  async componentDidMount() {
    const SEED = await import("./utils/seed");
    this.setState({
      loading: false,
      data: SEED.default.documents,
    });
  }

  render() {
    // These articles aren't necessarily special, just using them for a purpose
    const { loading, data } = this.state;
    const [headline, ...articles] = data;

    // I imagine a Higher Order component would be better here
    if (loading) {
      return <Loading className={css({ gridColumn: "1 / -1" })} />;
    }

    return (
      <StyledNewsy>
        <StyledTitle>Newsy</StyledTitle>
        <Headline content={headline} />
        <ArticleGrid>
          {articles.map(doc => <Article key={doc.id} content={doc} />)}
        </ArticleGrid>
      </StyledNewsy>
    );
  }
}

export default Newsy;
