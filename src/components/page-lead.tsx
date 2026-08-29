import type { ReactNode } from 'react';

type PageLeadProps = {
  title: string;
  children?: ReactNode;
};

export const PageLead = ({ title, children }: PageLeadProps) => {
  return (
    <div className="max-w-2xl space-y-5">
      <h1 className="text-4xl md:text-5xl">{title}</h1>
      {children}
    </div>
  );
};
