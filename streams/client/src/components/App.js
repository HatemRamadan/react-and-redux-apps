import React from "react";
import { Router, Route, Switch} from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "../Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header></Header>
        <div>
          <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route path="/streams/delete" exact component={StreamDelete}></Route>
          <Route path="/streams/:id" exact component={StreamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
