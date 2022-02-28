import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
        {isLoggedIn && <PostForm /> }
        {mainPosts.map((v) => <PostCard key={v.id} post={v} />)}
    </AppLayout>
 );
}

export default Home;