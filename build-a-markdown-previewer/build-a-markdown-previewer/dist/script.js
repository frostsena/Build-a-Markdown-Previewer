const projectName = 'markdown-previewer';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized });

  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized });

  }
  render() {
    const classes = this.state.editorMaximized ?
    ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] :
    this.state.previewMaximized ?
    ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress'] :
    ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: classes[0] }, /*#__PURE__*/
      React.createElement(Toolbar, {
        icon: classes[2],
        onClick: this.handleEditorMaximize,
        text: "Editor" }), /*#__PURE__*/

      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "converter" }), /*#__PURE__*/
      React.createElement("div", { className: classes[1] }, /*#__PURE__*/
      React.createElement(Toolbar, {
        icon: classes[2],
        onClick: this.handlePreviewMaximize,
        text: "Previewer" }), /*#__PURE__*/

      React.createElement(Preview, { markdown: this.state.markdown }))));



  }}


const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-free-code-camp", title: "no-stack-dub-sack" }),
    props.text, /*#__PURE__*/
    React.createElement("i", { className: props.icon, onClick: props.onClick })));


};

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", {
      id: "editor",
      onChange: props.onChange,
      type: "text",
      value: props.markdown }));


};

const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: marked(props.markdown, { renderer: renderer }) },

      id: "preview" }));


};

const placeholder = `# My Markdown Previewer!
<img alt="Kirk Clarke Avatar" src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/64332993_109064093703850_5572706481578442752_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFuXOWI2jvTHOba_8U9N6BmfnvFmfyPgpV-e8WZ_I-ClR8lUcG_SKJQDSG9f686mS6iAfU8rI3MQTQ5zH3EFFIy&_nc_ohc=JZUzoLJFy3MAX-UDKbl&tn=pqnguKJiGy6oCz3S&_nc_ht=scontent.fmnl4-6.fna&oh=00_AT8OanMQT7P7dFjgsjUuaxYl7nFTmq4Kw5dJgbBUg003Qw&oe=62B2D3DA" width="150" style="max-width: 150px">

## <p id="name">Jeudiel Sena</p> 

A few things I learned in this project:

#### Javascript/React things
--------------------
dangerouslySetInnerHTML ( [more info](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) )

\`\`\`
// Example of multiline code using backslashes and back ticks (x3)
// Requires an object with __html key
const convertValue = (value) => {
  return {__html: marked(value)};
}
\`\`\`

#### Markdown things
--------------------

**Bold**

_Italic_

***Bold & Italics***

> Blockquote

\`<code>Inline Code</code>\`

**Image Syntax**
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Numbered Lists:**
1. One
1. Two 
1. Three

**Bulleted Lists:**
- First
- Second
- Third
  - Second Level
    - Third Level
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));