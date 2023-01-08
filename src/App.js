import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap';

import Home from "./components/Home/Home";
import Instructions from './components/Instructions';
import Score from './components/Score';
import Error from './components/Error/Error';
import Leaderboard from './components/Leaderboard';


//INFINITI
import InfinitiGenericQ1 from './components/Questions/Infiniti/Generic/Q1';
import InfinitiGenericQ2 from './components/Questions/Infiniti/Generic/Q2';
import InfinitiGenericQ3 from './components/Questions/Infiniti/Generic/Q3';
import InfinitiGenericQ4 from './components/Questions/Infiniti/Generic/Q4';
import InfinitiGenericQ5 from './components/Questions/Infiniti/Generic/Q5';
import InfinitiGenericQ6 from './components/Questions/Infiniti/Generic/Q6';

import Q50Q1 from './components/Questions/Infiniti/Q50/Q1';
import Q50Q2 from './components/Questions/Infiniti/Q50/Q2';
import Q50Q3 from './components/Questions/Infiniti/Q50/Q3';
import Q50Q4 from './components/Questions/Infiniti/Q50/Q4';

import Q60Q1 from './components/Questions/Infiniti/Q60/Q1';
import Q60Q2 from './components/Questions/Infiniti/Q60/Q2';
import Q60Q3 from './components/Questions/Infiniti/Q60/Q3';
import Q60Q4 from './components/Questions/Infiniti/Q60/Q4';

import QX50Q1 from './components/Questions/Infiniti/QX50/Q1';
import QX50Q2 from './components/Questions/Infiniti/QX50/Q2';
import QX50Q3 from './components/Questions/Infiniti/QX50/Q3';
import QX50Q4 from './components/Questions/Infiniti/QX50/Q4';

import QX55Q1 from './components/Questions/Infiniti/QX55/Q1';
import QX55Q2 from './components/Questions/Infiniti/QX55/Q2';
import QX55Q3 from './components/Questions/Infiniti/QX55/Q3';
import QX55Q4 from './components/Questions/Infiniti/QX55/Q4';

import QX60Q1 from './components/Questions/Infiniti/QX60/Q1';
import QX60Q2 from './components/Questions/Infiniti/QX60/Q2';
import QX60Q3 from './components/Questions/Infiniti/QX60/Q3';
import QX60Q4 from './components/Questions/Infiniti/QX60/Q4';

import QX80Q1 from './components/Questions/Infiniti/QX80/Q1';
import QX80Q2 from './components/Questions/Infiniti/QX80/Q2';
import QX80Q3 from './components/Questions/Infiniti/QX80/Q3';
import QX80Q4 from './components/Questions/Infiniti/QX80/Q4';





//NISSAN
import NissanGenericQ1 from './components/Questions/Nissan/Generic/Q1';
import NissanGenericQ2 from './components/Questions/Nissan/Generic/Q2';
import NissanGenericQ3 from './components/Questions/Nissan/Generic/Q3';
import NissanGenericQ4 from './components/Questions/Nissan/Generic/Q4';
import NissanGenericQ5 from './components/Questions/Nissan/Generic/Q5';
import NissanGenericQ6 from './components/Questions/Nissan/Generic/Q6';
import NissanGenericQ7 from './components/Questions/Nissan/Generic/Q7';
import NissanGenericQ8 from './components/Questions/Nissan/Generic/Q8';
import NissanGenericQ9 from './components/Questions/Nissan/Generic/Q9';
import NissanGenericQ10 from './components/Questions/Nissan/Generic/Q10';
import NissanGenericQ11 from './components/Questions/Nissan/Generic/Q11';
import NissanGenericQ12 from './components/Questions/Nissan/Generic/Q12';
import NissanGenericQ13 from './components/Questions/Nissan/Generic/Q13';
import NissanGenericQ14 from './components/Questions/Nissan/Generic/Q14';
import NissanGenericQ15 from './components/Questions/Nissan/Generic/Q15';

import AltimaQ1 from './components/Questions/Nissan/Altima/Q1';
import AltimaQ2 from './components/Questions/Nissan/Altima/Q2';
import AltimaQ3 from './components/Questions/Nissan/Altima/Q3';
import AltimaQ4 from './components/Questions/Nissan/Altima/Q4';
import AltimaQ5 from './components/Questions/Nissan/Altima/Q5';
import AltimaQ6 from './components/Questions/Nissan/Altima/Q6';
import AltimaQ7 from './components/Questions/Nissan/Altima/Q7';
import AltimaQ8 from './components/Questions/Nissan/Altima/Q8';
import AltimaQ9 from './components/Questions/Nissan/Altima/Q9';
import AltimaQ10 from './components/Questions/Nissan/Altima/Q10';

import KicksQ1 from './components/Questions/Nissan/Kicks/Q1';
import KicksQ2 from './components/Questions/Nissan/Kicks/Q2';
import KicksQ3 from './components/Questions/Nissan/Kicks/Q3';
import KicksQ4 from './components/Questions/Nissan/Kicks/Q4';
import KicksQ5 from './components/Questions/Nissan/Kicks/Q5';
import KicksQ6 from './components/Questions/Nissan/Kicks/Q6';
import KicksQ7 from './components/Questions/Nissan/Kicks/Q7';
import KicksQ8 from './components/Questions/Nissan/Kicks/Q8';
import KicksQ9 from './components/Questions/Nissan/Kicks/Q9';
import KicksQ10 from './components/Questions/Nissan/Kicks/Q10';

import NissanZQ1 from './components/Questions/Nissan/NissanZ/Q1';
import NissanZQ2 from './components/Questions/Nissan/NissanZ/Q2';
import NissanZQ3 from './components/Questions/Nissan/NissanZ/Q3';
import NissanZQ4 from './components/Questions/Nissan/NissanZ/Q4';
import NissanZQ5 from './components/Questions/Nissan/NissanZ/Q5';
import NissanZQ6 from './components/Questions/Nissan/NissanZ/Q6';
import NissanZQ7 from './components/Questions/Nissan/NissanZ/Q7';
import NissanZQ8 from './components/Questions/Nissan/NissanZ/Q8';
import NissanZQ9 from './components/Questions/Nissan/NissanZ/Q9';
import NissanZQ10 from './components/Questions/Nissan/NissanZ/Q10';

import PathfinderQ1 from './components/Questions/Nissan/Pathfinder/Q1';
import PathfinderQ2 from './components/Questions/Nissan/Pathfinder/Q2';
import PathfinderQ3 from './components/Questions/Nissan/Pathfinder/Q3';
import PathfinderQ4 from './components/Questions/Nissan/Pathfinder/Q4';
import PathfinderQ5 from './components/Questions/Nissan/Pathfinder/Q5';
import PathfinderQ6 from './components/Questions/Nissan/Pathfinder/Q6';
import PathfinderQ7 from './components/Questions/Nissan/Pathfinder/Q7';
import PathfinderQ8 from './components/Questions/Nissan/Pathfinder/Q8';
import PathfinderQ9 from './components/Questions/Nissan/Pathfinder/Q9';
import PathfinderQ10 from './components/Questions/Nissan/Pathfinder/Q10';

import PatrolQ1 from './components/Questions/Nissan/Patrol/Q1';
import PatrolQ2 from './components/Questions/Nissan/Patrol/Q2';
import PatrolQ3 from './components/Questions/Nissan/Patrol/Q3';
import PatrolQ4 from './components/Questions/Nissan/Patrol/Q4';
import PatrolQ5 from './components/Questions/Nissan/Patrol/Q5';
import PatrolQ6 from './components/Questions/Nissan/Patrol/Q6';
import PatrolQ7 from './components/Questions/Nissan/Patrol/Q7';
import PatrolQ8 from './components/Questions/Nissan/Patrol/Q8';
import PatrolQ9 from './components/Questions/Nissan/Patrol/Q9';
import PatrolQ10 from './components/Questions/Nissan/Patrol/Q10';

import XTrailQ1 from './components/Questions/Nissan/XTrail/Q1';
import XTrailQ2 from './components/Questions/Nissan/XTrail/Q2';
import XTrailQ3 from './components/Questions/Nissan/XTrail/Q3';
import XTrailQ4 from './components/Questions/Nissan/XTrail/Q4';
import XTrailQ5 from './components/Questions/Nissan/XTrail/Q5';
import XTrailQ6 from './components/Questions/Nissan/XTrail/Q6';
import XTrailQ7 from './components/Questions/Nissan/XTrail/Q7';
import XTrailQ8 from './components/Questions/Nissan/XTrail/Q8';
import XTrailQ9 from './components/Questions/Nissan/XTrail/Q9';
import XTrailQ10 from './components/Questions/Nissan/XTrail/Q10';

import MaximaQ1 from './components/Questions/Nissan/Maxima/Q1';
import MaximaQ2 from './components/Questions/Nissan/Maxima/Q2';
import MaximaQ3 from './components/Questions/Nissan/Maxima/Q3';
import MaximaQ4 from './components/Questions/Nissan/Maxima/Q4';
import MaximaQ5 from './components/Questions/Nissan/Maxima/Q5';
import MaximaQ6 from './components/Questions/Nissan/Maxima/Q6';
import MaximaQ7 from './components/Questions/Nissan/Maxima/Q7';
import MaximaQ8 from './components/Questions/Nissan/Maxima/Q8';

import Nismo370ZQ1 from './components/Questions/Nissan/Nismo370Z/Q1';
import Nismo370ZQ2 from './components/Questions/Nissan/Nismo370Z/Q2';
import Nismo370ZQ3 from './components/Questions/Nissan/Nismo370Z/Q3';
import Nismo370ZQ4 from './components/Questions/Nissan/Nismo370Z/Q4';
import Nismo370ZQ5 from './components/Questions/Nissan/Nismo370Z/Q5';
import Nismo370ZQ6 from './components/Questions/Nissan/Nismo370Z/Q6';
import Nismo370ZQ7 from './components/Questions/Nissan/Nismo370Z/Q7';
import Nismo370ZQ8 from './components/Questions/Nissan/Nismo370Z/Q8';
import Nismo370ZQ9 from './components/Questions/Nissan/Nismo370Z/Q9';
import Nismo370ZQ10 from './components/Questions/Nissan/Nismo370Z/Q10';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Score" element={<Score />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Error />} />
          
          {/* INFINITI */}
          <Route path="/InfinitiGenericQ1" element={<InfinitiGenericQ1 />} />
          <Route path="/InfinitiGenericQ2" element={<InfinitiGenericQ2 />} />
          <Route path="/InfinitiGenericQ3" element={<InfinitiGenericQ3 />} />
          <Route path="/InfinitiGenericQ4" element={<InfinitiGenericQ4 />} />
          <Route path="/InfinitiGenericQ5" element={<InfinitiGenericQ5 />} />
          <Route path="/InfinitiGenericQ6" element={<InfinitiGenericQ6 />} />
          
          <Route path="/Q50Q1" element={<Q50Q1 />} />
          <Route path="/Q50Q2" element={<Q50Q2 />} />
          <Route path="/Q50Q3" element={<Q50Q3 />} />
          <Route path="/Q50Q4" element={<Q50Q4 />} />

          <Route path="/Q60Q1" element={<Q60Q1 />} />
          <Route path="/Q60Q2" element={<Q60Q2 />} />
          <Route path="/Q60Q3" element={<Q60Q3 />} />
          <Route path="/Q60Q4" element={<Q60Q4 />} />

          <Route path="/QX50Q1" element={<QX50Q1 />} />
          <Route path="/QX50Q2" element={<QX50Q2 />} />
          <Route path="/QX50Q3" element={<QX50Q3 />} />
          <Route path="/QX50Q4" element={<QX50Q4 />} />

          <Route path="/QX55Q1" element={<QX55Q1 />} />
          <Route path="/QX55Q2" element={<QX55Q2 />} />
          <Route path="/QX55Q3" element={<QX55Q3 />} />
          <Route path="/QX55Q4" element={<QX55Q4 />} />

          <Route path="/QX60Q1" element={<QX60Q1 />} />
          <Route path="/QX60Q2" element={<QX60Q2 />} />
          <Route path="/QX60Q3" element={<QX60Q3 />} />
          <Route path="/QX60Q4" element={<QX60Q4 />} />
          
          <Route path="/QX80Q1" element={<QX80Q1 />} />
          <Route path="/QX80Q2" element={<QX80Q2 />} />
          <Route path="/QX80Q3" element={<QX80Q3 />} />
          <Route path="/QX80Q4" element={<QX80Q4 />} />

          {/* NISSAN */}
          <Route path="/NissanGenericQ1" element={<NissanGenericQ1 />} />
          <Route path="/NissanGenericQ2" element={<NissanGenericQ2 />} />
          <Route path="/NissanGenericQ3" element={<NissanGenericQ3 />} />
          <Route path="/NissanGenericQ4" element={<NissanGenericQ4 />} />
          <Route path="/NissanGenericQ5" element={<NissanGenericQ5 />} />
          <Route path="/NissanGenericQ6" element={<NissanGenericQ6 />} />
          <Route path="/NissanGenericQ7" element={<NissanGenericQ7 />} />
          <Route path="/NissanGenericQ8" element={<NissanGenericQ8 />} />
          <Route path="/NissanGenericQ9" element={<NissanGenericQ9 />} />
          <Route path="/NissanGenericQ10" element={<NissanGenericQ10 />} />
          <Route path="/NissanGenericQ11" element={<NissanGenericQ11 />} />
          <Route path="/NissanGenericQ12" element={<NissanGenericQ12 />} />
          <Route path="/NissanGenericQ13" element={<NissanGenericQ13 />} />
          <Route path="/NissanGenericQ14" element={<NissanGenericQ14 />} />
          <Route path="/NissanGenericQ15" element={<NissanGenericQ15 />} />

          <Route path="/AltimaQ1" element={<AltimaQ1 />} />
          <Route path="/AltimaQ2" element={<AltimaQ2 />} />
          <Route path="/AltimaQ3" element={<AltimaQ3 />} />
          <Route path="/AltimaQ4" element={<AltimaQ4 />} />
          <Route path="/AltimaQ5" element={<AltimaQ5 />} />
          <Route path="/AltimaQ6" element={<AltimaQ6 />} />
          <Route path="/AltimaQ7" element={<AltimaQ7 />} />
          <Route path="/AltimaQ8" element={<AltimaQ8 />} />
          <Route path="/AltimaQ9" element={<AltimaQ9 />} />
          <Route path="/AltimaQ10" element={<AltimaQ10 />} />

          <Route path="/KicksQ1" element={<KicksQ1 />} />
          <Route path="/KicksQ2" element={<KicksQ2 />} />
          <Route path="/KicksQ3" element={<KicksQ3 />} />
          <Route path="/KicksQ4" element={<KicksQ4 />} />
          <Route path="/KicksQ5" element={<KicksQ5 />} />
          <Route path="/KicksQ6" element={<KicksQ6 />} />
          <Route path="/KicksQ7" element={<KicksQ7 />} />
          <Route path="/KicksQ8" element={<KicksQ8 />} />
          <Route path="/KicksQ9" element={<KicksQ9 />} />
          <Route path="/KicksQ10" element={<KicksQ10 />} />

          <Route path="/NissanZQ1" element={<NissanZQ1 />} />
          <Route path="/NissanZQ2" element={<NissanZQ2 />} />
          <Route path="/NissanZQ3" element={<NissanZQ3 />} />
          <Route path="/NissanZQ4" element={<NissanZQ4 />} />
          <Route path="/NissanZQ5" element={<NissanZQ5 />} />
          <Route path="/NissanZQ6" element={<NissanZQ6 />} />
          <Route path="/NissanZQ7" element={<NissanZQ7 />} />
          <Route path="/NissanZQ8" element={<NissanZQ8 />} />
          <Route path="/NissanZQ9" element={<NissanZQ9 />} />
          <Route path="/NissanZQ10" element={<NissanZQ10 />} />

          <Route path="/PathfinderQ1" element={<PathfinderQ1 />} />
          <Route path="/PathfinderQ2" element={<PathfinderQ2 />} />
          <Route path="/PathfinderQ3" element={<PathfinderQ3 />} />
          <Route path="/PathfinderQ4" element={<PathfinderQ4 />} />
          <Route path="/PathfinderQ5" element={<PathfinderQ5 />} />
          <Route path="/PathfinderQ6" element={<PathfinderQ6 />} />
          <Route path="/PathfinderQ7" element={<PathfinderQ7 />} />
          <Route path="/PathfinderQ8" element={<PathfinderQ8 />} />
          <Route path="/PathfinderQ9" element={<PathfinderQ9 />} />
          <Route path="/PathfinderQ10" element={<PathfinderQ10 />} />

          <Route path="/PatrolQ1" element={<PatrolQ1 />} />
          <Route path="/PatrolQ2" element={<PatrolQ2 />} />
          <Route path="/PatrolQ3" element={<PatrolQ3 />} />
          <Route path="/PatrolQ4" element={<PatrolQ4 />} />
          <Route path="/PatrolQ5" element={<PatrolQ5 />} />
          <Route path="/PatrolQ6" element={<PatrolQ6 />} />
          <Route path="/PatrolQ7" element={<PatrolQ7 />} />
          <Route path="/PatrolQ8" element={<PatrolQ8 />} />
          <Route path="/PatrolQ9" element={<PatrolQ9 />} />
          <Route path="/PatrolQ10" element={<PatrolQ10 />} />

          <Route path="/XTrailQ1" element={<XTrailQ1 />} />
          <Route path="/XTrailQ2" element={<XTrailQ2 />} />
          <Route path="/XTrailQ3" element={<XTrailQ3 />} />
          <Route path="/XTrailQ4" element={<XTrailQ4 />} />
          <Route path="/XTrailQ5" element={<XTrailQ5 />} />
          <Route path="/XTrailQ6" element={<XTrailQ6 />} />
          <Route path="/XTrailQ7" element={<XTrailQ7 />} />
          <Route path="/XTrailQ8" element={<XTrailQ8 />} />
          <Route path="/XTrailQ9" element={<XTrailQ9 />} />
          <Route path="/XTrailQ10" element={<XTrailQ10 />} />

          <Route path="/MaximaQ1" element={<MaximaQ1 />} />
          <Route path="/MaximaQ2" element={<MaximaQ2 />} />
          <Route path="/MaximaQ3" element={<MaximaQ3 />} />
          <Route path="/MaximaQ4" element={<MaximaQ4 />} />
          <Route path="/MaximaQ5" element={<MaximaQ5 />} />
          <Route path="/MaximaQ6" element={<MaximaQ6 />} />
          <Route path="/MaximaQ7" element={<MaximaQ7 />} />
          <Route path="/MaximaQ8" element={<MaximaQ8 />} />

          <Route path="/Nismo370ZQ1" element={<Nismo370ZQ1 />} />
          <Route path="/Nismo370ZQ2" element={<Nismo370ZQ2 />} />
          <Route path="/Nismo370ZQ3" element={<Nismo370ZQ3 />} />
          <Route path="/Nismo370ZQ4" element={<Nismo370ZQ4 />} />
          <Route path="/Nismo370ZQ5" element={<Nismo370ZQ5 />} />
          <Route path="/Nismo370ZQ6" element={<Nismo370ZQ6 />} />
          <Route path="/Nismo370ZQ7" element={<Nismo370ZQ7 />} />
          <Route path="/Nismo370ZQ8" element={<Nismo370ZQ8 />} />
          <Route path="/Nismo370ZQ9" element={<Nismo370ZQ9 />} />
          <Route path="/Nismo370ZQ10" element={<Nismo370ZQ10 />} />
      </Routes>
    </>
  )
}
export default App
