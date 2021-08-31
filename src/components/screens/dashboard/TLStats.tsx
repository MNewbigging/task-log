import { observer } from 'mobx-react';
import React from 'react';

import './tl-stats.scss';

interface Props {
  allTodos: number;
  completedTodos: number;
  openTodos: number;
}

@observer
export class TLStats extends React.Component<Props> {
  public render() {
    const { allTodos, completedTodos, openTodos } = this.props;

    return (
      <div className={'tl-stats'}>
        <div className={'stat-item'}>Created: {allTodos}</div>
        <div className={'stat-item'}>Completed: {completedTodos} </div>
        <div className={'stat-item'}>Open: {openTodos} </div>
      </div>
    );
  }
}
