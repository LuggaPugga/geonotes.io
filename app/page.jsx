import { Suspense } from 'react';
import GeoNotesList from './_components/GeoNotesList';
import OnlineIndicator from './_components/OnlineIndicator';
import ContributorBanner from './_components/ContributorBanner';
import GeoNoteSearch from './_components/GeoNoteSearch';
import PostFilter from './_components/PostFilter';

export default async function Home({ searchParams }) {
  return (
    <div className="max-w-5xl w-full">
      <ContributorBanner />
      <OnlineIndicator />
      <GeoNoteSearch />
      <PostFilter />
      <Suspense fallback={null}>
        <GeoNotesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
