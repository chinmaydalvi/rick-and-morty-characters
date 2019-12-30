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
        <section className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              filters
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <div className={scss.App}>
                <CharList />
              </div>
            </div>
          </div>
        </section>
    );
  }
}

