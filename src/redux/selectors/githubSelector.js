import { createSelector } from "reselect";

import { INITIAL_STATE } from '../reducers/githubReducer';

const selectGithub = state => state.github || INITIAL_STATE;

const makeSelectOpenIssues = createSelector(
   selectGithub,
   substate => substate.openIssues
);

const makeSelectOpenIssuesisLoading = createSelector(
   selectGithub,
   substate => substate.isLoading
);

const makeSelectOpenIssuesSuccess = createSelector(
   selectGithub,
   substate => substate.success
);
const makeSelectOpenIssuesError = createSelector(
   selectGithub,
   substate => substate.error
);

 export {
   selectGithub,
   makeSelectOpenIssues,
   makeSelectOpenIssuesisLoading,
   makeSelectOpenIssuesSuccess,
   makeSelectOpenIssuesError
};
  