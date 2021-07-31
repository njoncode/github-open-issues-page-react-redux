import { createSelector } from "reselect";

import { INITIAL_STATE } from '../reducers/counterReducer';

const selectCounter = state => state.counter || INITIAL_STATE;

const makeSelectWatch = createSelector(
    selectCounter,
    substate => substate.watch
);

const makeSelectStar = createSelector(
    selectCounter,
    substate => substate.star
);

const makeSelectFork = createSelector(
    selectCounter,
    substate => substate.fork
);

const makeSelectToggleCounter = createSelector(
    selectCounter,
    substate => substate.toggleCounter
);


 export {
   selectCounter,
   makeSelectWatch,
   makeSelectStar,
   makeSelectFork,
   makeSelectToggleCounter
};
  