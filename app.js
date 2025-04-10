
/**
 * 
 *  Creating a Nested elements
 *  <div id='parent'>
 *      <div id="child">
 *          <h1>I am here and I a H1 tag</h1>
 *      </div>
 *  </div>
 * 
 * Creating a Complex Nested elements
 *  <div id='parent'>
 *      <div id="child1">
 *          <h1>I am here and I a H1 tag</h1>
 *          <h2>I am here and I a H2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am here and I a H1 tag</h1>
 *          <h2>I am here and I a H2 tag</h2>
 *      </div>
 *  </div> 
 * 
 */

//Create the element
// const heading = React.createElement(
//     "h1", 
//     {
//         "id" : "heading"
//     }, 
//     "Hello World Heading from React"
// );

// const nestedElem = React.createElement(
//     "div",
//     { "id": "parent"},
//     React.createElement(
//         "div",
//         { "id" : "child" },
//         React.createElement(
//             "h1",
//             {},
//             "I am here and I am a H1 tag"
//         )
//     )
// );

const nestedElemComplx = React.createElement(
    "div",
    { "id" : "parent"},
    [
        React.createElement(
            "div",
            { "id" : "child1"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am a H1 Tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I am a H2 Tag"
                )
            ]
        ),
        React.createElement(
            "div",
            { "id" : "child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "I am a H1 Tag"
                ),
                React.createElement(
                    "h2",
                    {},
                    "I am a H2 Tag"
                )
            ]
        ),
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElemComplx);