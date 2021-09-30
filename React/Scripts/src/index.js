import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './app/dashboard/index.jsx';
//import History from './app/dashboard/history.jsx';

const App = () => <Dashboard name="sunil" />

ReactDOM.render(<App />, document.getElementById("root"));

//const HistoryDirective = () => <History name="manish" />

//ReactDOM.render(<HistoryDirective />, document.getElementById("history"));