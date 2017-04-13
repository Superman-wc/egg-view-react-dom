# egg-view-react

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-react-dom
[download-image]: https://img.shields.io/npm/dm/egg-view-react-dom.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-react-dom

egg view plugin for [react].

## Install

```bash
$ npm i egg-view-react-dom --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.view = {
  enable: true,
  package: 'egg-view-react-dom',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.view = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/Superman-wc/egg-view-react-dom/issues).

## License

[MIT](LICENSE)

[react]: https://facebook.github.io/react/