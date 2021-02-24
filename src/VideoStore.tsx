import React from 'react';
import { connect } from 'react-redux';
import {
  store,
  getVideoList,
  VIDEO_ACTIONS,
  IVideoStoreProps,
} from '../src/store';
import SearchBox from '../src/components/SearchBox';
import {
  VideoPlayer,
  VideoList,
  IVideoProps,
} from '../src/components/VideoList';

function VideoStore(props: IVideoStoreProps) {

  const getUserEnteredValue = async (value: string = '') => {
    const result = await getVideoList(value);

    await store.dispatch({
      type: VIDEO_ACTIONS.SEARCH_VIDEOS,
      payload: result?.data?.items,
    });
  };

  const onVideoSelect = (activeVideo: IVideoProps = {}) => {
    store.dispatch({
      type: VIDEO_ACTIONS.LOAD_VIDEO,
      payload: activeVideo,
    });
  };

  return (
    <>
      <SearchBox onUserSearch={getUserEnteredValue} />
      <div className="video-details">
        <VideoPlayer activeVideo={props.activeVideo} />
        <VideoList list={props.videos || []} onSelectItem={onVideoSelect} />
      </div>
    </>
  );
}

const mapStateToProps = (state: IVideoStoreProps) => {
  return {
    videos: state.videos,
    activeVideo: state.activeVideo,
  };
};

export default connect(mapStateToProps)(VideoStore);
