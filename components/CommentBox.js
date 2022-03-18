import React from "react";
import marked from "marked";

export function Comments() {
  return (
    <div className="card card-page">
      <div className="flex">
        <img
          width="50"
          height="25"
          src="http://placehold.jp/3d4070/ffffff/150x150.png"
          alt=""
          className="rounded-full"
        />
        <div className="ml-4 mt-1">
          <h3 className="font-bold">username</h3>
          <div className="text-sm">Posted on info@example.com</div>
        </div>
      </div>
      <div className="mt-2 ml-2">
        <div
          dangerouslySetInnerHTML={{
            __html: marked(
              `#include <stdio.h>
                int main() {
               // printf() displays the string inside quotation
               printf("Hello, World!");
               return 0;
            }`
            ),
          }}
        ></div>
      </div>
    </div>
  );
}

export class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
    # React Markdown Previewer!
    ## This is a sub-heading...
        
    Or... wait for it... **_both!_**
      
    And feel free to go crazy ~~crossing stuff out~~.
          
    There's also [links](https://ashusingh.me), and
    > Block Quotes!
         
      
        `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      maxWidth: "60vh",
      minHeight: "20vh",
      margin: "0vh 0vh 0vh 0vh",
      float: "left",
      padding: "10px",
    };
    var outputStyle = {
      maxWidth: "60vh",
      minHeight: "20vh",
      backgroundColor: "#DCDCDC",
      margin: "0vh 0vh 0vh 0vh",
      padding: "10px",
      float: "right",
    };

    return (
      <div className="flex m-10">
        <div>
          <div className="input" style={inputStyle}>
            <textarea
              className="input"
              style={inputStyle}
              value={this.state.markdown}
              onChange={(e) => {
                this.updateMarkdown(e.target.value);
              }}
            ></textarea>
          </div>
          <div
            style={outputStyle}
            dangerouslySetInnerHTML={{
              __html: marked(this.state.markdown),
            }}
          ></div>
        </div>
      </div>
    );
  }
}
