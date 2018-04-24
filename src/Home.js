import React, { Component, Fragment } from "react";
import { getPublicationKind } from "./utils/api";
import { Grid } from "./styling";
import ArticleGrid from "./components/ArticleGrid/ArticleGrid";
import Headline from "./components/Headline/Headline";
import Article from "./components/Article/Article";
import Loading from "./components/Loading/Loading";

class Home extends Component {
  state = {
    data: [],
  };

  // fetch version
  async componentDidMount() {
    const response = await fetch(getPublicationKind());
    const data = await response.json();

    this.setState({
      data: data.documents,
    });
  }

  // seed version
  // async componentDidMount() {
  //   const SEED = await import("./utils/seed");
  //   this.setState({
  //     data: SEED.default.documents,
  //   });
  // }

  render() {
    const { data } = this.state;
    // Headline isn't necessarily special, just using it for a purpose
    const [headline, ...articles] = data;

    // I imagine a Higher Order component would be better here
    if (data.length === 0) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Headline
          id={headline.id}
          heading={headline.heading}
          image={headline.mainImage.reference}
          topic={headline.topics.primary}
          headKicker={headline.headKicker}
          href={`/article/${headline.id}`}
        />
        <h2 className={Grid.GridContainer}>In other news&hellip;</h2>
        <ArticleGrid>
          {articles.map(doc => <Article key={doc.id} content={doc} />)}
        </ArticleGrid>
      </Fragment>
    );
  }
}

export default Home;
