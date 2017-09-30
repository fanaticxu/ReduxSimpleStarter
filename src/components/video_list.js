import React from 'react';
import VideoListItem from './video_list_item';

// const VideoList = (props) => {
//     const videoItems = props.videos.map((video) => {
// below {videos} is a syntax suger. it's same as above code
const VideoList = ({videos}) => {
    const videoItems = videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className='col-md-4 list-group'>
            {videoItems}
            </ul>
    );
};

export default VideoList;