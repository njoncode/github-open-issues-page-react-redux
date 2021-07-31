import githubConstants from '../constants/githubConstant';

export const INITIAL_STATE = {
    openIssues: [],
    isLoading: false,
    success: '',
    error: ''
};

export const githubReducer = (state = INITIAL_STATE, action) => {
   
    console.log('reducer state: ', state)

    switch(action.type) {
        case githubConstants.OPEN_ISSUES_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                success: '',
                error: ''
            }
        case githubConstants.OPEN_ISSUES_FETCH_SUCCESS:
            return {
                ...state,
                openIssues: [...state.openIssues, ...action.payload],
                isLoading: false,
                success: 'Successful',
                error: ''
            }
        case githubConstants.OPEN_ISSUES_FETCH_FAILURE:
            return {
                ...state,
                openIssues: [],
                isLoading: false,
                success: '',
                error: action.payload
            }
        default:
            return state;
    }
}
