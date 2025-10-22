import { useEffect } from 'react';

// A simple component to update head tags since react-helmet is not available.
const PageHead = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }, [title, description]);

  return null;
};

export default PageHead;