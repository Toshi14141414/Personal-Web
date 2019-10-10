import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "JavaScript",
          description: `<a href="https://www.javascript.com/" target="_blank">JS</a> is a high-level, dynamic, weakly typed,
            prototype-based, multi-paradigm, and interpreted programming language. That's the language I use on daily basis most often. 
            <b>And I love it!</b>.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 31,
          label: "TypeScript",
          description: `<a href="https://www.typescriptlang.org/index.html" target="_blank">TS</a> is a strict syntactical superset of JavaScript,
          and add optional static typing. Recently I think TS is better in backend development.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 2,
          label: "React",
          description: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
          React makes it painless to create interactive UIs. Build encapsulated components that manage their own state and then compose them to make complex UIs. <b>React is the best</b>.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 3,
          label: "Node",
          description: `<a href="https://nodejs.org/" target="_blank">Node</a> is a JS runtime build on Chrome's V8 engine. It never needs to worry about whether a request 
          makes to another piece of code might cause the loop to block up. And TS made node perfect.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 4,
          label: "Redux",
          description: `A <a href="https://redux.js.org/" target="_blank">JS library</a> most commonly used with React. If data is a package, redux is Fedex that delivers packages to React.
          Redux makes data organized.`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 5,
          label: "HTML5",
          description: `It's a basic skill for web developer and I'm familiar with most of the tags, which gives me a great help when writing <a href="https://reactjs.org/docs/glossary.html#jsx" target="_blank">jsx</a> in React.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 6,
          label: "CSS",
          description: `<a href="https://css-tricks.com/" target="_blank">Cascading Style Sheets</a> - a style sheet 
          used for describing the presentation of a document written in HTML. CSS makes the web beautiful.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 36,
          label: "SCSS / SASS",
          description: `<a href="https://sass-lang.com/" target="_blank">SCSS</a> is a preprocessor scripting language that is interpreted or compiled into CSS, 
          which makes writing CSS faster and easier`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 7,
          label: "Babel",
          description: `A <a href="https://babeljs.io/" target="_blank">transpiler</a> for JavaScript 
          best known for its ability to turn ES6 into code that runs in browsers which does not support it directly. It lets us use next generation JavaScript, today.`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 8,
          label: "Gatsby",
          description: `A static PWA (Progressive Web App) <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
          you build blazing-fast sites with your data, whatever the source. The website you are looking at now is built with Gatsby.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 9,
          label: "GraphQL",
          description: `It's a query language for APIs. <a href="http://graphql.org/" target="_blank">GraphQL</a> 
          gives clients the power to ask for exactly what they need and nothing more. The <a href="https://www.graph.cool/" target="_blank">Graphcool</a> framework and its
          <b>Cloud</b> service manages the GraphQL backend for my app.`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 10,
          label: "WebPack",
          description: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
          Webpack takes modules with dependencies and generates static assets representing those modules.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 11,
          label: "jQuery",
          description: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
          the client-side scripting of HTML.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 12,
          label: "Java",
          description: `<a href="https://www.java.com/en/" target="_blank">Java</a> is the most suitable language for large concurrency programs. I always use Java to solve 
          leetcode algorithm problems, haha.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 13,
          label: "Python",
          description: `<a href="https://www.python.org/" target="_blank">Python</a> is an interpreted, high-level, general-purpose programming language and it becomes more 
          and more popular recent years.`,
          comment: `Proficiency: ★★★☆☆`
        },
        {
          id: 14,
          label: "Vue",
          description: `<a href="https://vuejs.org/index.html" target="_blank">Vue</a> is a great JavaScript framework for building user interfaces and single-page applications.`,
          comment: `Proficiency: ★★★☆☆`
        },
        {
          id: 15,
          label: "Django",
          description: `<a href="https://www.djangoproject.com/" target="_blank">Django</a> makes everything easier to build a web apps with less code. I've been studying this, hope 
          can give me a better web development experience.`,
          comment: `Proficiency: ★★★☆☆`
        },
        {
          id: 16,
          label: "PHP",
          description: `Not good at <a href="https://php.net/" target="_blank">PHP</a>, always use node instead.`,
          comment: `Proficiency: ★★☆☆☆`
        },
        {
          id: 17,
          label: "SQL",
          description: `It's the easiest language I've ever learned. I think <a href="https://www.mysql.com/" target="_blank">SQL</a> is the essential skills for each programmer.`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 18,
          label: "C++",
          description: `The first program language I learned. But after I learned Java, I never used C++.`,
          comment: `Proficiency: ★★☆☆☆`
        },
        {
          id: 19,
          label: "GCP",
          description: `<a href="https://cloud.google.com/" target="_blank">Google Cloud Platform</a> is a suite of cloud computing services. This website is hosting on GCP because GCP is cheaper.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 49,
          label: "AWS",
          description: `A cloud computing services provided by Amazon. I think <a href="https://aws.amazon.com/" target="_blank">Amazon Web Service</a>is better in the speed of engines, user frinedly, 
          and the documentation. But for personal website is a little expensive.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 20,
          label: "Git",
          description: `<a href="https://git-scm.com/" target="_blank">Git</a> is a distributed version control system to handle projects with efficiency. Git is the best tools for development. 
          and saved my projects mutiple times. This is my <a href="https://github.com/Toshi14141414" target="_blank">GitHub</a>.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 21,
          label: "Docker",
          description: `<a href="https://www.docker.com/" target="_blank">Docker</a> makes it possible to let different languages work on the same platform.
          Containers are isolated from each other, but they can communicate with each other through well-defined channels. `,
          comment: `Proficiency: ★★★☆☆`
        },
        {
          id: 22,
          label: "Firebase",
          description: `<a href="https://firebase.google.com" target="_blank">Firebase</a> is a mobile and web application development platform. Firebase provides functionality like analytics, 
          databases, messaging and crash reporting. The first time I learned firebase is in my intern.`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 23,
          label: "MongoDB",
          description: `<a href="https://www.mongodb.com/" target="_blank">MongoDB</a> is a cross-platform document-oriented database program.
          Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.`,
          comment: `Proficiency: ★★★☆☆`
        },
        {
          id: 24,
          label: "PhotoShop",
          description: `Photoshop is the best photo editing and compositing software. Photoshop makes my photos look better even I'm bad at photography.`,
          comment: `Proficiency: ★★★★★`
        },
        {
          id: 25,
          label: "Illustrator",
          description: `Adobe Illustrator is a vector graphics editor. I always use it with photoshop or for laser cut and 3D printing.`,
          comment: `Proficiency: ★★★★☆`
        },
        {
          id: 28,
          label: "Wordpress",
          description: `The largest self-hosted <a href="https://wordpress.org/" target="_blank">blogging tool</a>
          in the world, used on millions of sites.`,
          comment: `Proficiency: ★★★★☆`
        }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        id: "",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which === 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };

    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `0 - ${anchor.offsetHeight}`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        id: this.state.activatedItem,
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            id={this.state.activatedItem}
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
