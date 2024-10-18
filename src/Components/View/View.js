import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const [storedPostDetails, setStoredPostDetails] = useState(() => {
    const savedPost = localStorage.getItem('postDetails');
    return savedPost ? JSON.parse(savedPost) : null;
  });

  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);


  useEffect(() => {
    if (postDetails) {
      localStorage.setItem('postDetails', JSON.stringify(postDetails));
      setStoredPostDetails(postDetails); 
    }
  }, [postDetails]);


  useEffect(() => {
    const post = postDetails || storedPostDetails;
    if (post) {
      const { userId } = post;
      firebase
        .firestore()
        .collection('user')
        .where('id', '==', userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        })
        .catch((err) => {
          console.error('Error fetching user details:', err);
        });
    }
  }, [postDetails, storedPostDetails, firebase]);


  if (!postDetails && !storedPostDetails) {
    return <div>Loading post details...</div>;
  }

  const displayPostDetails = postDetails || storedPostDetails;

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={displayPostDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {displayPostDetails.price} </p>
          <span>{displayPostDetails.name}</span>
          <p>{displayPostDetails.category}</p>
          <span>{displayPostDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.userName}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
