const React = require('react');

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script src="node_modules/vanta/vendor/three.r95.min.js" />,
    <script src="node_modules/vanta/dist/vanta.clouds.min.js" />,
    <noscript key="noscript">
      Your browser does not support JavaScript!
    </noscript>,
  ]);
};
