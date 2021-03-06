import React, { useState, useEffect } from 'react';

const IG_ACCESS_TOKEN = process.env.REACT_APP_IG_ACCESS_TOKEN;
const IG_API_URL = 'https://graph.instagram.com/me/media/';
const IG_MEDIA_FIELDS = 'id,caption,media_url,media_type';

function InstagramMedia() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [mediaList, setMediaList] = useState([]);

  const getInstagramMedia = () => {
    setLoading(true);
    fetch(`${IG_API_URL}?fields=${IG_MEDIA_FIELDS}&access_token=${IG_ACCESS_TOKEN}`)
      .then(response => response.json())
      .then(({data}) => {
        setLoading(false);
        setMediaList(data);
      })
      .catch(err => {
        setHasError(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    getInstagramMedia();
  }, []);

  return (
    <>
      <h3>Lifestyle</h3>
      {
        loading 
        ? <div>Loading Instagram feed...</div> 
        : hasError 
          ? <div>Error occured.</div> 
          : mediaList.map(m => (
            <div key={m.id}>
              <img src={m.media_url} alt="" />
              {m.caption}
            </div>
            ))
      }
    </>
  );
}

export default InstagramMedia;
