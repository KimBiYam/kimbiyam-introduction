import TagButton from "./TagButton";

export type TagSelectorProps = {
  tags: string[];
  onTagClick: (tag: string) => void;
  selectedTag: string;
};

const TagSelector = ({ tags, onTagClick, selectedTag }: TagSelectorProps) => {
  return (
    <div className="w-full pt-4 flex sticky top-12 transition-container z-40 overflow-auto scrollbar-hide">
      {tags.map((tag) => (
        <TagButton
          key={tag}
          tag={tag}
          onTagClick={onTagClick}
          isSelected={tag === selectedTag}
        />
      ))}
    </div>
  );
};

export default TagSelector;
