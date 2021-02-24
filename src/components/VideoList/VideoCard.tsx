import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IVideoCardProps } from './typings';

function VideoCard(props: IVideoCardProps) {
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 300,
      marginBottom: '30px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
  }));

  const { data = {}, onSelect = () => {} } = props;

  const onVideoItemSelect = () => {
    onSelect(data);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onVideoItemSelect}>
      <CardMedia
        className={classes.media}
        image={data?.snippet?.thumbnails?.medium?.url}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data?.snippet?.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export { VideoCard };
export default VideoCard;
