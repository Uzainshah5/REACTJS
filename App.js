const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", null, "Hello World"),
    React.createElement("p", null, "This is a paragraph inside child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", null, "Welcome to React"),
    React.createElement("p", null, "This is a paragraph inside child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
