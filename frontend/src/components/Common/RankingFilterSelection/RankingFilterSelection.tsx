import { categories, sorts } from '@/constants/RankingConstants.ts';
import FilterButton from '@/components/Common/FilterButton/FilterButton.tsx';
import SortSpan from '@/components/Common/SortOption/SortOption.tsx';
import {
  CategoryFilter,
  SortOptions,
} from '@/components/Common/RankingFilterSelection/RankingFilterSelection.style.ts';

export default function RankingFilterSelection({ category, setCategory, sort, setSort }) {
  return (
    <>
      <CategoryFilter>
        {categories.map(({ label, icon }) => (
          <FilterButton
            key={label}
            label={label}
            icon={icon}
            isActive={category === label}
            onClick={() => setCategory(label)}
          />
        ))}
      </CategoryFilter>

      <SortOptions>
        {sorts.map(option => (
          <SortSpan
            key={option}
            label={option}
            isActive={sort === option}
            onClick={() => setSort(option)}
          />
        ))}
      </SortOptions>
    </>
  )
}