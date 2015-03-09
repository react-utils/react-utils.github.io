'use strict';

var React = require('react');

var NavMain = require('./NavMain');
var PageHeader = require('./PageHeader');
var PageFooter = require('./PageFooter');

var HomePage = React.createClass({
  render: function () {
    return (
        <div>
          <NavMain activePage="home" />

          <main className="bs-docs-masthead" id="content" role="main">
            <div className="container">
              <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"></span>
              <p className="lead">React Utils, the missing piece of React</p>
              <p><a href="http://reactjs.org">React</a> is just the View but an actual project needs just more than View. React Utils complements everything else. With inspiration from <a href="http://angular-ui.github.io/">Angular-UI</a>, React-Utils has following sub projects.</p>
            </div>
          </main>

          <div className="bs-docs-section">
            <div className="container">
                  <div className="bs-callout bs-callout-warning">
                          <h4>Here is the List of sub projects</h4>
                          <div className="clearfix">
                            <div className="col-md-4">
                              <ul className="nav nav-stacked span4">
                                <li><a href="/react-utils-helper">React Component Helper</a></li>
                                <li><a className="text-muted" href="javascript:;">React Charting (Coming Soon)</a></li>
                                <li><a className="text-muted" href="javascript:;">React jQuery-ui (Coming Soon)</a></li>
                                
                              </ul>
                            </div>

                             <div className="col-md-4">
                              <ul className="nav nav-stacked span4">
                                <li><a className="text-muted" href="javascript:;">React Bootstrap Components (Coming Soon)</a></li>
                                <li><a className="text-muted" href="javascript:;">React Services (Coming Soon)</a></li>
                                <li><a className="text-muted" href="javascript:;">React Massive Components (Coming Soon)</a></li>
                                
                              </ul>
                            </div>

                            <div className="col-md-4">
                              <ul className="nav nav-stacked span4">
                                <li><a className="text-muted" href="javascript:;">React Form Components (Coming Soon)</a></li>
                                
                              </ul>
                            </div>

                          </div>
                  </div>
            </div>
          </div>
                 

          <PageFooter />
        </div>
      );
  }
});

module.exports = HomePage;