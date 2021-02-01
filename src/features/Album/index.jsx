import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Tết 50: Zing Choice',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/f/4/6/2f467dab6b61f8b63d07b45420ee25a2.jpg'
        },
        {
            id: 2,
            name: 'Chào Xuân Mới 2021',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/9/2/1/2921b5f9c7cdfbd5b5dd1974f0397e71.jpg'
        },
        {
            id: 3,
            name: 'Rap Vui Ngày Tết',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/f/6/4/9f641fbc3ee3f9f565d1b4d55edec09e.jpg'
        },
    ]
    return (
        <div>
            <h2> Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;