import React, { Component } from "react";

import PostItem from "../components/PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Felipe",
          avatar:
            "https://alternativeagencia.com.br/wp-content/uploads/2015/11/1-Felipe--wpcf_310x310.jpg"
        },
        date: "21 Jul 2019",
        content: "Alternative Sistemas.",
        comments: [
          {
            id: 1,
            author: {
              name: "Monique Dallabona",
              avatar:
                "https://alternativeagencia.com.br/wp-content/uploads/2015/11/1-Monique-01-1-900x800.jpg"
            },
            content: "Essa empresa vai longe."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Fernando Duwe",
          avatar:
            "https://alternativeagencia.com.br/wp-content/uploads/2015/11/Duwe-wpcf_310x310.png"
        },
        date: "21 Jul 2019",
        content: "Alternative Sistemas.",
        comments: [
          {
            id: 2,
            author: {
              name: "Agnaldo Loch",
              avatar:
                "https://alternativeagencia.com.br/wp-content/uploads/2015/11/1-Agnaldo-01-900x800.jpg"
            },
            content: "Sucesso Alternative."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <ul>
        <div className="postList">
          {posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </ul>
    );
  }
}

export default PostList;
