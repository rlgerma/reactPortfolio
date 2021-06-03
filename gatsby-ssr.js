const React = require("react");

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <script
      src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
      type='text/javascript'
    />,
  ]),
    setPreBodyComponents([
      <noscript key='noscript'>
        Your browser does not support JavaScript!
      </noscript>,
    ]);
};
