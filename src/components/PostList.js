import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        date: '06/10/2019',
        name: 'Isaac Miranda',
        img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',
        post: 'What is Lorem Ipsum?',
        comments: [
          {
            id:3,
            name: 'Robert',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
          },
          {
            id:4,
            name: 'Isaac',
            content: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',
          }
        ]
      },
      {
        id: 5,
        date: '06/10/2019',
        name: 'Robert',
        img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
        post: 'Where does it come from?',
        comments: [
          {
            id:6,
            name: 'Isaac',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            img: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png',

          },
          {
            id:7,
            name: 'Robert',
            content: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            img: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
          }
        ]
      }
    ]
  }
  render() {
    const { posts } = this.state;
    return(
    <div className="PostList">
      {posts.map(post =>( <PostItem key={posts.id} {...post}/>))}
    </div>
    )
  }
}

export default PostList;