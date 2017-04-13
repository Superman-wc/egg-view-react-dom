'use strict';

const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom/server');

let babelRegister;

class View {

    constructor(ctx) {
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.app.config.view;

        if(!babelRegister){
            babelRegister = require('babel-register');
            babelRegister({
                "presets": ["react", "es2015", "stage-0"],

                "plugins": [
                    "transform-runtime",
                    "add-module-exports",
                    "transform-decorators-legacy",
                    "transform-react-display-name"
                ],


            })
        }
    }

    render(reactFile, locals) {
        return new Promise((resolve, reject) => {
            let html = '<!DOCTYPE html>';
            try {
                const reactComponent = require(reactFile);
                html += ReactDOM.renderToStaticMarkup(React.createElement(reactComponent.default || reactComponent, locals || {}));
            } catch (error) {
                reject(error);
            }

            resolve(html);
        });
    }

    renderString() {
        return Promise.reject('not implemented yet!');
    }

}

module.exports = View;
