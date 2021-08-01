import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InfiniteScroll from 'react-infinite-scroll-component';

import '../styles/githubPage.css'
import {openIssuesFetchRequestAction, openIssuesFetchSuccessAction, openIssuesFetchFailureAction} from '../redux/actions/githubAction';
import { makeSelectOpenIssues, makeSelectOpenIssuesisLoading, makeSelectOpenIssuesSuccess, makeSelectOpenIssuesError } from '../redux/selectors/githubSelector';
import Loading from './Loading';


const GithubIssues = ({ openIssues, openIssuesRequestDispatch, openIssuesFetchSuccessDispatch, openIssuesFetchFailureDispatch, isLoading, success, error }) => {

    const [page, setPage] = React.useState(1)
    const [start, setStart] = React.useState(0)
    const [dataCount, setDataCount] = React.useState('')


    const timeago = (createdAt) => {
        return moment(createdAt).fromNow();
    }

    const fetchNextIssues = () => {
        setStart((10 * page))
        setPage(p => p + 1)
        getOpenIssues();
    }  

    const getOpenIssues = () => {
        axios.get("https://api.github.com/repos/facebook/create-react-app/issues")
                .then(res => {
                    setDataCount(res.data.length)
                    openIssuesRequestDispatch();
                    if(res.status === 200 || res.statusText === "OK") {
                        openIssuesFetchSuccessDispatch(res.data.slice(start, 10*page))
                    }
                })
                .catch(err => {
                    openIssuesFetchFailureDispatch('Some error has been countered while fetching the data.')
                })
    }

    React.useEffect(() => {
            getOpenIssues();
    }, [])


    const openIssuesData = openIssues.map(({id, number, title, created_at, user: { login }, labels}, index) => (
        <div className='issue-container' key={`${id} ${index}`}>
        <div className='issue'>
            <svg className="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg>
            <h3>{title}</h3>
            <span className="labels">{labels && labels.length > 0 && 
                labels.map(label => <a key={label.id} href={label.url} className={`issue-label ${label.name === 'issue: bug report' ? 'bug-report' : label.name === 'issue: proposal' ? 'proposal' : 'triage'}`}>{label.name}</a>)
            }
            </span>
        </div>
        <p className='opened-by'>#{number} opened {timeago(created_at)} by {login}</p>
        </div>
    ))

    return (
        <div className='issues-wrapper'>
            {isLoading && <Loading />}
            {/* {error && error.length && <p className='error-message'>{error}</p>} */}
            <InfiniteScroll
                dataLength = {openIssues.length}
                next = {fetchNextIssues}
                hasMore = {openIssues.length === dataCount ? false  :true}
                loader = {<Loading />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {openIssuesData}
            </InfiniteScroll>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    openIssues: makeSelectOpenIssues,
    isLoading: makeSelectOpenIssuesisLoading,
    success: makeSelectOpenIssuesSuccess,
    error: makeSelectOpenIssuesError
})

const mapDispatchToProps = dispatch => ({
    openIssuesRequestDispatch: () => dispatch(openIssuesFetchRequestAction()),
    openIssuesFetchSuccessDispatch: (data) => dispatch(openIssuesFetchSuccessAction(data)),
    openIssuesFetchFailureDispatch: (data) => dispatch( openIssuesFetchFailureAction(data))
})

  
export default connect(mapStateToProps, mapDispatchToProps)(GithubIssues);
