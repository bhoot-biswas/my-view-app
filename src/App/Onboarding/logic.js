import React from 'react';
import View from './view.js';
import { useSetFlowTo, normalizePath } from 'Views/Flow.js';

export default function Logic(props) {
  const setFlowTo = useSetFlowTo();
  return <View {...props} onClick={onClick} />;

  function onClick() {
    setFlowTo(normalizePath(props.viewPath, '../AppContent'));
  }
}
