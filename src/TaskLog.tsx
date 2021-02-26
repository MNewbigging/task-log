import { observer } from 'mobx-react';
import React from 'react';

import { TLButton, TLButtonIntent } from './components/core/TLButton';
import { TLAllDialogs } from './components/dialogs/TLAllDialogs';
import { TLDash } from './components/screens/dashboard/TLDash';
import { TLSettings } from './components/screens/settings/TLSettings';
import { TLTodo } from './components/screens/todo/TLTodo';
import { TLHeader } from './components/TLHeader';
import { TLNavbar } from './components/TLNavbar';
import { TaskLogState, TLScreen } from './TaskLogState';

import './task-log.scss';

@observer
export class TaskLog extends React.Component {
  private readonly tlState = new TaskLogState();
  public render() {
    return (
      <div className={'tl-background ' + this.tlState.tlOverlayTod}>
        <div className={'app-container'}>
          <TLAllDialogs />
          <TLHeader time={this.tlState.timeStr} date={this.tlState.dateStr} />
          <TLNavbar tlState={this.tlState} />
          <div className={'tl-content'}>{this.renderContentPanel()}</div>
        </div>
      </div>
    );
  }

  private renderContentPanel() {
    switch (this.tlState.tlScreen) {
      case TLScreen.DASH:
        return <TLDash dashState={this.tlState.dashState} />;
      case TLScreen.TODO:
        return <TLTodo todoState={this.tlState.todoState} />;
      case TLScreen.SETTINGS:
        return <TLSettings />;
    }
  }
}
