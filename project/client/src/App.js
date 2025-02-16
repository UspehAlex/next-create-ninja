import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatingPictures from './Pages/CreatingPictures';
import CreatingVideos from './Pages/CreatingVideos';
import WritingTexts from './Pages/WritingTexts';
import Analysis from './Pages/Analysis';
import Marketing from './Pages/Marketing';
import Promotion from './Pages/Promotion';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/creating-pictures" component={CreatingPictures} />
        <Route path="/creating-videos" component={CreatingVideos} />
        <Route path="/writing-texts" component={WritingTexts} />
        <Route path="/analysis" component={Analysis} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/promotion" component={Promotion} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
