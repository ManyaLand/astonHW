import type { ComponentType } from 'react';
type WithLoadingProps = { isLoading: boolean };

export function withLoading(WrappedComponent: ComponentType) {
  return function WithLoadingComponent({ isLoading, ...props }: WithLoadingProps) {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <WrappedComponent {...(props)} />;
  };
}