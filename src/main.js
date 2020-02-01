'use strict'

/**
 *  We're going to start off with a vanilla savor install
 *  that we will extend to work with React apps
 **/
var savor = require("savor");

/**
 *  For full DOM testing
 **/
var jsdom = require('jsdom');

/**
 *  We're using Chai.JS as our BDD assertion library, and specifically,
 *  we want to write our specs using the expect assert style.
 **/
var chai = require('chai');

/**
 *  Use helpers for testing React
 **/
var enzyme = require('enzyme');
var chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme())

var Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });


/**
 *   Extend the root context to include enzyme tools
 **/
savor.context = Object.assign(savor.context, {
  mount: enzyme.mount,
  render: enzyme.render,
  shallow: enzyme.shallow,
  dom: jsdom
});

module.exports = savor;
