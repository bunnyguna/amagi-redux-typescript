import React from 'react';
import VideoCard from './VideoCard';
import { IVideoCardProps, IVideoListProps } from './typings';

function VideoList(props: IVideoListProps) {
  const { list = [], onSelectItem = () => {} } = props;

  return (
    <div className="video-list-wrapper">
      {list.map((item: IVideoCardProps, idx: number) => {
        return (
          <VideoCard
            key={`video-item-${idx}`}
            data={item}
            onSelect={onSelectItem}
          />
        );
      })}
    </div>
  );
}

export { VideoList };
export default VideoList;
