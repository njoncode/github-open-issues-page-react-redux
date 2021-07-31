import githubConstants from "../constants/githubConstant";

export const openIssuesFetchRequestAction = () => ({
    type: githubConstants.OPEN_ISSUES_FETCH_REQUEST
})

export const openIssuesFetchSuccessAction = (payload) => ({
    type: githubConstants.OPEN_ISSUES_FETCH_SUCCESS,
    payload
})

export const openIssuesFetchFailureAction = (payload) => ({
    type: githubConstants.OPEN_ISSUES_FETCH_FAILURE,
    payload
})



