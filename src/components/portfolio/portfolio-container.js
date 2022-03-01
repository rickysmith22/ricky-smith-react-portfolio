import React, {Component} from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
      super();

      this.state = {
          pageTitle: "Welcome to Ricky's Portfolio",
          isLoading: false,
          data: [
              {title: "McDonalds", catagory: "ff"},
              {title: "Team", catagory: "delivery"},
              {title: "USMC", catagory: "military"},
              {title: "Nike", catagory: "retail"},
              {title: "Polaris", catagory: "delivery"}
            ]
      };

      this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.catagory === filter;
            })
        });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }



    render() {
      if (this.state.isLoading) {
          return <div>Loading...</div>
      }

      return(
          <div>
              <h2>{this.state.pageTitle}</h2>

              <button onClick={() => this.handleFilter('ff')}>
                  Fast Food
              </button>
              <button onClick={() => this.handleFilter('delivery')}>
                  Delivery
              </button>
              <button onClick={() => this.handleFilter('military')}>
                  Military
              </button>
              <button onClick={() => this.handleFilter('retail')}>
                  Retail
              </button>

             {this.portfolioItems()}

          </div>
      )
    }
}