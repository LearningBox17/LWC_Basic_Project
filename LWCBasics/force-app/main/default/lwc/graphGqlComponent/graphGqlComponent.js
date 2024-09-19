// simpleAccounts.js
import { LightningElement, wire } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";

export default class GraphGqlComponent extends LightningElement {
  results;
  errors;

  @wire(graphql, {
    query: gql`
      query BigOpportunities {
        uiapi {
          query {
            Opportunity(where: { Amount: { gte: 5000 } }) {
              edges {
                node {
                  Id
                  Name {
                    value
                  }
                    Type {
                    value
                  }
                    Amount {
                    value
                  }
                    CloseDate {
                    value
                  }
                    StageName {
                    value
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
  wiredQLResult({ data, errors }) {
    if (data) {
      this.results = data.uiapi.query.Opportunity.edges.map((edge) => edge.node);
    }
    this.errors = errors;
  }
}