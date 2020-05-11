import React from "react";

class Filters extends React.Component {
  state = {
    property: "name",
    class: "is-selected",
  };
  selectFilter = (property) => {
    this.setState({ property: property });
    this.props.sort(property);
  };
  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(e) => this.props.search(e.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${
              this.state.property === "name" ? this.state.class : ""
            }`}
            onClick={(e) => this.selectFilter("name")}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.property === "country" ? this.state.class : ""
            }`}
            onClick={(e) => this.selectFilter("country")}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.property === "company" ? this.state.class : ""
            }`}
            onClick={(e) => this.selectFilter("company")}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.property === "department" ? this.state.class : ""
            }`}
            onClick={(e) => this.selectFilter("department")}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.property === "admissionDate" ? this.state.class : ""
            }`}
            onClick={(e) => this.selectFilter("admissionDate")}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
