export interface IVideoThumbnail {
  url?: string;
  width?: number;
  height?: number;
}

export interface IVideoThumbnailProps {
  default?: IVideoThumbnail;
  medium?: IVideoThumbnail;
  high?: IVideoThumbnail;
}

export interface IVideoSnippetProps {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: IVideoThumbnailProps;
  channelTitle?: string;
  liveBroadcastContent?: string;
  publishTime?: string;
}

export interface IVideoIdProps {
  kind?: string;
  videoId?: string;
}

export interface IVideoProps {
  kind?: string;
  etag?: string;
  id?: IVideoIdProps;
  snippet?: IVideoSnippetProps;
}

export interface IVideoCardProps {
  data: IVideoProps;
  onSelect?: (data?: IVideoProps) => void;
}

export type TVideoCardList = IVideoCardProps[];

export interface IVideoListProps {
  list?: TVideoCardList;
  onSelectItem?: (video: IVideoProps) => void;
}

export interface IActivatedVideoProps {
  activeVideo: IVideoProps;
}
