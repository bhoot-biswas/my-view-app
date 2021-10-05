import { useFonts } from 'expo-font';
import { ViewsFlow } from 'Views/Flow.js';
import React from 'react';
import View from './view.js';

export default function Logic(props) {
  let [loaded] = useFonts({
    // At some point, Views will do this automatically. For now, you
    // need to write your fonts by hand.
    //
    // 1) Download the font into src/DesignSystem/Fonts. The name of the file is FontFamily-Weight.ttf
    // 2) Use it in a view:
    //    Text
    //    fontFamily Robot Mono
    //    fontWeight 300
    //    text hey I'm using Roboto Mono!
    // 3) Add it to this object like:
    //
    // 'Montserrat-300': require('../DesignSystem/Fonts/Montserrat-300.ttf'),
  });

  if (!loaded) return null;

  return (
    <ViewsFlow>
      <View {...props} />
    </ViewsFlow>
  );
}
