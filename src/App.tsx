import React from 'react';
import scss from './App.module.scss';
import CharList from "./components/CharList/CharList";
import {Header} from "./components/Header/Header";

export class App extends React.Component{
  public constructor(props: any) {
    super(props);
  }

  public render():JSX.Element{
    return (
        <div className={scss.App}>
          <Header/>
          <CharList />
        </div>
    );
  }
}

