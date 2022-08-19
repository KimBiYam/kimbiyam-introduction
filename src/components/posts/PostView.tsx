import { useMediaQuery } from 'react-responsive';

import dynamic from 'next/dynamic';

import { m } from 'framer-motion';

import useClientSide from '../../hooks/useClientSide';
import breakPoints from '../../lib/styles/breakPoints.json';
import { routingMotion } from '../../lib/styles/motions';
import { PostDetail } from '../../types/post.types';
import ProfileCard from '../base/ProfileCard';
import MarkdownView from './MarkdownView';
import TagBadge from './TagBadge';
import Utterances from './Utterances';

const DynamicTableOfContents = dynamic(() => import('./TableOfContents'));

interface PostViewProps {
  postDetail: PostDetail;
}

const PostView = ({ postDetail }: PostViewProps) => {
  const { title, date, contentHtml, tag } = postDetail;

  const isClientSide = useClientSide();
  const isUpExtraLargeScreen = useMediaQuery({ minWidth: breakPoints.xl });

  return (
    <m.article className="relative pb-24 mt-8" {...routingMotion}>
      <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
      <div className="flex items-center justify-between my-4">
        <p className="text-sm">{date}</p>
        <TagBadge tag={tag.toUpperCase()} />
      </div>
      <MarkdownView contentHtml={contentHtml} />
      <div className="py-4 my-10 border-t border-b">
        <ProfileCard />
      </div>
      <Utterances />
      {isClientSide && isUpExtraLargeScreen && <DynamicTableOfContents />}
    </m.article>
  );
};

export default PostView;
