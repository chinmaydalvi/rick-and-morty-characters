import React from 'react';
import { Dispatch } from 'redux';
import logo from './logo.svg';
import scss from './App.module.scss';
import {myAction} from "./actions/myActions";
import {connect} from "react-redux";

interface IAppProps {
  myReducer:any,
  myActionReducer: (ready: boolean) => void;
}

class App extends React.Component<IAppProps>{
  public constructor(props: any) {
    super(props);
  }

  public componentDidMount(): void {
    this.props.myActionReducer(true)
  }

  public render():JSX.Element{
    return (
        <div className={scss.App}>
          <header className={scss.AppHeader}>
            <img src={logo} className={scss.AppLogo} alt="logo" />
            <p>Edit <code>src/App.tsx</code> and save to reload. {this.props.myReducer.ready}</p>
            <a className={scss.AppLink}
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

const mapStateToProps = (state: any, props: any) => {
  return {
    ...props,
    myReducer: state.myReducer,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    myActionReducer: (ready: boolean) => dispatch(myAction(ready)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
