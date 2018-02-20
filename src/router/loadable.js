import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@utils/loading';

const LoadableNested = Loadable({
  loader: () => import('@components/home'),
  loading: Loading
});

export default function test() {
  return (
    <div>
      <h1>Hello</h1>
      <LoadableNested />
    </div>
  );
}