import React, { ReactNode } from 'react';

export interface SampleComponentProps {
  children: ReactNode;
}

export function SampleComponent({ children }: SampleComponentProps) {
  return <p>{children}</p>;
}
