'use strict';

const REACT = Symbol('app#react');
const engine = require('react-dom/server');

module.exports = {


  /**
   * react viewEngine
   * @member {Object} Application#viewEngine
   */
  get react() {
    if (!this[REACT]) {
      this[REACT] = engine;
    }
    return this[REACT];
  },
};
