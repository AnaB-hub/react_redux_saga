import React, { Component } from "react";

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

interface State {
  newRepository?: string;
}

export default class RepositoryList extends Component<Props, State> {
  state = {
    newRepository: "",
  };

  ComponentDidMount() {}

  render() {
    const { repositories } = this.props;
    const { newRepository } = this.state;

    // newRepository.toLowerCase();

    return (
      <ul>
        {repositories.map((repository) => (
          <li>{repository.id}</li>
        ))}
      </ul>
    );
  }
}
