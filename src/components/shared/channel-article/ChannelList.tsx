import ChannelArticle from './ChannelArticle';
import { IVideoData } from './types/ChannelArticleType';

interface ChannelListProps {
  dataList: IVideoData[]
}

function ChannelList({ dataList } :ChannelListProps) {
  return (
    <section>
      {dataList.map((data) => {
        return (
          <ChannelArticle key={data.id} />
        );
      })}
    </section>
  );
}

export default ChannelList;
