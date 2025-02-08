{
    /* <div id="parent">
         <div id="child">
            <h1></h1>
         </div>
          <div id="child">
            <h1></h1>
            <h2></h2>
         </div>
         <div id="child">
            <h1></h1>
            <h2></h2>
            <h3></h3>
         </div>
    </div>
     */
}

const parent = React.createElement("div", {
        id: "parent"
    },
    [React.createElement("div", {
            id: "child1"
        }, React.createElement("h1", {}, "h1")),
        React.createElement("div", {
            id: "child2"
        }, React.createElement("h1", {}, "h1"), React.createElement("h2", {}, "h2")),
        React.createElement("div", {
            id: "child"
        }, React.createElement("h1", {}, "h1"), React.createElement("h2", {}, "h2"), React.createElement("h3", {}, "h3"))
    ]






)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent)
// const heading = React.createElement("li", {
//     id: "ABC"
// }, "Third Attempt")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)