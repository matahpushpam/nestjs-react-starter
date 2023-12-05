import React, { lazy, Suspense, useEffect, useState } from 'react';
import Loader from '../Core/Loading';

const LazyPosts = lazy(() => import('./Posts'));

const Posts = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/post')
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
  }, [])

  return (
    <Suspense fallback={<Loader/>}>
      <LazyPosts {...props} postData={data} />
    </Suspense>
  )
}


export default Posts;
