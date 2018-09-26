import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

class Login extends Component {
  inPage = page => (this.props.match.url === page ? "active" : "");

  render() {
    const { title, history } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <div className="navbar d-flex justify-content-between bd-highlight">
            <span className="navbar-brand order-0">
              Migração <span className="separate ml-3 pl-3">{title}</span>
            </span>
            <ul className="nav align-self-end order-sm-1 order-2">
              <li className="nav-item">
                <Link
                  className={`nav-link ${this.inPage("/acompanhe")}`}
                  to="/acompanhe"
                >
                  Acompanhe{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${this.inPage("/duvidas")}`}
                  to="/duvidas"
                >
                  Duvidas?
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-sair px-3 order-sm-2 order-1"
              to="/login"
              onClick={() => context.state.logout(history)}
            >
              Sair <i className="ing ing-logout ml-2" />
            </button>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(Login);
