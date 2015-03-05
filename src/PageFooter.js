'use strict';

var React = require('react');
var packageJSON = require('../package.json');

var PageHeader = React.createClass({
  render: function () {
    return (
        <footer className="bs-docs-footer" role="contentinfo">
          <div className="container">
            <div className="bs-docs-social">
              
            <p>Code licensed under <a href="https://github.com/react-utils/react-utils-helper/blob/master/LICENSE" target="_blank">Apache License</a>.</p>
            <ul className="bs-docs-footer-links muted">
              <li>Currently v{packageJSON.version}</li>
            </ul>
          </div>
          </div>
        </footer>
      );
  }
});

module.exports = PageHeader;