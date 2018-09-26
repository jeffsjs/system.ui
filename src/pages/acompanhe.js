import React, { Component, Fragment } from "react";
import Header from "../components/header";
import _ from "lodash";
import { getSummary } from "../api";
import { Summary } from "../components/summary";
import {
  WidgetProperties,
  WidgetUsers,
  WidgetEnterprises,
  WidgetCustomers
} from "../components/widgets";
import { AppContext } from "../context";
import { Status } from "../components/status";
import ReactTooltip from "react-tooltip";
import { SUMMARY } from "../utils";

import { MOCK, MOCK_TOTAL } from '../mocks'

class Acompanhe extends Component {
  state = {
    summaryItens: {
      brokers: {
        total: 0
      },
      customers: {
        total: 0
      },
      enterprises: {
        total: 0,
      },
      properties: {
        total: 0,
      },
    },
    hasError: false
  };

  componentDidMount() {
    if (MOCK)
     return this.setState({ summaryItens: _.merge(SUMMARY.ITENS, MOCK_TOTAL) })

    getSummary()
      .then(({ data }) => {
        this.setState({ summaryItens: _.merge(SUMMARY.ITENS, data) });
      })
      .catch(error => {
        this.setState({ hasError: true });
        console.error(error);
      });
  }

  renderWidget = (widget, summaryWidget, classColumn = 'col-md-4') => {
    return !!summaryWidget.total && <div className={classColumn}>
      {widget}
    </div>
  }

  renderContent = context => {
    const info = { ...context.state.agencyInformations };
    const { summaryItens } = this.state;
    const { properties, customers, enterprises, brokers  } = summaryItens;
    return (
      <div className="home">
        <Header title={info.name} />

        <Summary summaryItens={summaryItens} />

        {summaryItens.propertiesArchives &&
          <Fragment>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className="text-center mb-3 mt-3">Detalhes</h4>
                </div>
                { this.renderWidget(<WidgetProperties />, properties, 'col-md-12') }
                { this.renderWidget(<WidgetCustomers />, customers) }
                { this.renderWidget(<WidgetEnterprises />, enterprises) }
                { this.renderWidget(<WidgetUsers />, brokers) }
              </div>
            </div>
            <Status info={info} />
          </Fragment>
        }
        <ReactTooltip place="bottom" type="dark" effect="solid" />
      </div>
    );
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => this.renderContent(context)}
      </AppContext.Consumer>
    );
  }
}

export default Acompanhe;
