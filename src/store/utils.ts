import axios from 'axios';

export const getVideoList = async (value: string) => {
  const YT_KEY = 'AIzaSyBMU44vVKKtJ0xpfMPRDvHzQh_EUfPRFhY';
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${YT_KEY}&part=snippet,id&order=date&maxResults=5&q=${value}`;

  return await axios
    .get(URL)
    .then((res: any) => {
      return res;
    })
    .catch((err) => console.log(err));
};
