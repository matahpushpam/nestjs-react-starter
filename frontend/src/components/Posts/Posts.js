import React from 'react';
import PropTypes from 'prop-types';
import { PostsWrapper } from './Posts.styled';

const Posts = (props) => {
return (
   <PostsWrapper data-testid="Posts">
      Posts Component props
      {props.postData ? props.postData.map(d => {
         <div>{d.name}</div>
      }): 'Nothing'}
   </PostsWrapper>
   )
};

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
