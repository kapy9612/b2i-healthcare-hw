import React, { PropsWithChildren } from 'react';

const SectionLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className={'max-w-screen-xl px-4 w-full m-auto xl:px-0 bg-gray-400 rounded-lg'}>
      <div className={'px-4 py-6'}>{children}</div>
    </section>
  );
};

export default SectionLayout;
