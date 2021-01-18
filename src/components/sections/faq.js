import React, { Component } from "react";
import { FaqList, FaqItem } from "../FaqComponent";

// faq data
import FaqData from "../../data/FaqData";

class faq extends Component {
  render() {
    return (
      <section id="faq" className="full-width main-grid">
        <h2 className="main-grid__shifted-col">Frequently Asked Question</h2>
        <div className="main-grid__shifted-col">
          {FaqData.map(({ catagory, content }) => {
            return (
              <FaqList catagoryName={catagory}>
                {content.map(({ question, answer }) => {
                  return <FaqItem question={question} answer={answer} />;
                })}
              </FaqList>
            );
          })}
        </div>
      </section>
    );
  }
}

export default faq;
