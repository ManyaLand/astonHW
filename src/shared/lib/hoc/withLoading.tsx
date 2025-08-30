import type { ComponentType } from 'react';

export function withLoading(WrappedComponent: ComponentType) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Загрузка...</div>;
    }
    return <WrappedComponent {...(props)} />;
  };
}