import { observer } from 'mobx-react';
import React from 'react';

import { TLList } from '../../core/list/TLList';
import { TLPanel } from '../../core/TLPanel';
import { TLDashState } from './TLDashState';

import './tl-dash.scss';
import { TLStats } from './TLStats';

interface DashProps {
  dashState: TLDashState;
}

@observer
export class TLDash extends React.PureComponent<DashProps> {
  public render() {
    const { dashState } = this.props;
    return (
      <>
        <div className={'tl-dashboard'}>
          <TLPanel className={'tracked-items'} title={'TRACKED_ITEMS'}>
            <TLList
              items={dashState.trackedTodos}
              onItemSelect={(id: string) => dashState.selectTrackedTodo(id)}
            />
          </TLPanel>
          <TLPanel className={'stats'} title={'STATS'}>
            <TLStats
              allTodos={dashState.allTodos}
              completedTodos={dashState.completedTodos}
              openTodos={dashState.openTodos}
            />
          </TLPanel>
          <TLPanel className={'recent'} title={'RECENT_ITEMS'}>
            <TLList
              items={dashState.recentTodos}
              onItemSelect={(id: string) => dashState.selectRecentTodo(id)}
            />
          </TLPanel>
        </div>
      </>
    );
  }
}
