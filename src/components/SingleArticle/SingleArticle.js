import React, { Component } from "react";
import { getPublicationById, asyncFetch } from "../../utils/api";
import { GridContainer } from "../../styling/grid";
import Loading from "../Loading/Loading";
import Headline from "../Headline/Headline";
import { StyledSingleArticle } from "./SingleArticle.glamorous";

class SingleArticle extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const articleId = this.props.match.params.id;
    const data = await asyncFetch(getPublicationById(articleId));
    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    if (data.length === 0) {
      return <Loading />;
    }

    const { items } = data;
    const itemFromKeys = {};
    const keys = ["content", "heading", "head-kicker"];

    items.forEach(item => {
      if (keys.includes(item.kind)) {
        itemFromKeys[item.kind] = item;
      }
    });

    return (
      <StyledSingleArticle>
        <Headline
          id={this.props.match.params.id}
          heading={itemFromKeys.heading.text}
          image={data.assets[0].original.reference}
          topic={data.topics.primary}
          headKicker={itemFromKeys["head-kicker"].text}
        />
        <div className={GridContainer}>
          {itemFromKeys.content.blocks.map((block, n) => (
            <p key={n}>{block.text}</p>
          ))}
        </div>
      </StyledSingleArticle>
    );
  }
}

export default SingleArticle;
