import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "./../../store/index";
import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";
import RepositoryItem from "./../RepositoryItem/index";

/**
 *  Mapea os tipos das informações que vem através do mapStateToProps
 */
interface StateProps {
  repositories: Repository[];
}

/**
 * Mapea as funções que vem do mapDispatchToProps
 */
interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

// Com desestruturação
// const mapStateToProps = ({ repositories }: ApplicationState) => ({
//   repositories,
// });

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
