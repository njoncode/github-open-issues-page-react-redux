import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import '../styles/navbar.css';
import {incrementCounterAction, decrementCounterAction, toggleCounterAction} from '../redux/actions/counterAction';
import { makeSelectWatch, makeSelectStar, makeSelectFork, makeSelectToggleCounter } from '../redux/selectors/counterSelector';

const Navbar = ({incrementCounterDispatch, decrementCounterDispatch, toggleCounterDispatch, watch, star, fork, toggleCounter}) => {

    const handleOnClick = (e) => {
        const text = e.target.innerText.toLowerCase()
        // console.log('e.target.innerText: ', e.target.innerText.toLowerCase())
        !toggleCounter ? incrementCounterDispatch(text) : decrementCounterDispatch(text)
        toggleCounterDispatch()
    }
    return (
        <div className='main-header'>
            <div className='left-side'>
                <h1 classname='h1'>
                    <svg className="octicon octicon-repo color-text-secondary mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                    <span className="author flex-self-stretch" itemprop="author">
                        <a className="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/facebook/hovercard" href="/facebook">facebook</a>
                    </span>
                    <span className="mx-1 flex-self-stretch color-text-secondary">/</span>
                    <strong itemprop="name" className="mr-2 flex-self-stretch">
                        <a data-pjax="#js-repo-pjax-container" href="/facebook/create-react-app">create-react-app</a>
                    </strong>
                </h1>
            </div>

            <ul className='pagehead-actions'>
                <li>
                    <button className='btn btn-sm'>
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-heart icon-sponsor text-pink mr-1">
                        <path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>
                        </svg>
                        Sponsor
                    </button>
                </li>
                <li>
                    <button className='btn btn-sm btn-with-count' onClick={handleOnClick}>   
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-eye">
                            <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                    Watch
                    </button>
                    <a class="social-count" href="/facebook/create-react-app/watchers" aria-label="1916 users are watching this repository" data-target="notifications-list-subscription-form.socialCount">
                        {watch}
                    </a>
                </li>
                <li>
                    <button className='btn btn-sm btn-with-count' onClick={handleOnClick}>
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-star mr-1">
                            <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </svg>
                    Star
                    </button>
                    <a class="social-count js-social-count" href="/facebook/create-react-app/stargazers" aria-label="89329 users starred this repository">
                        {star}
                    </a>
                </li>
                <li>
                    <button className='btn btn-sm btn-with-count' onClick={handleOnClick}>
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon octicon-repo-forked">
                            <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        Fork
                         </button>  
                        <a href="/facebook/create-react-app/network/members" class="social-count" aria-label="22462 users forked this repository">
                            {fork}
                        </a>
                </li>
            </ul>

        </div>
         )       
}
   
const mapStateToProps = createStructuredSelector({
    watch: makeSelectWatch,
    star: makeSelectStar,
    fork: makeSelectFork,
    toggleCounter: makeSelectToggleCounter
})

const mapDispatchToProps = dispatch => ({
    incrementCounterDispatch: (data) => dispatch(incrementCounterAction(data)),
    decrementCounterDispatch: (data) => dispatch(decrementCounterAction(data)),
    toggleCounterDispatch: () => dispatch(toggleCounterAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);




        // <div className='action-header'>
        //     <p className=''>
        //     <svg class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
        //         Code</p>
        //     <p className=''>Issues</p>
        //     <p className=''>Pull Requests</p>
        //     <p className=''>Discussions</p>
        //     <p className=''>Actions</p>
        //     <p className=''>Projects</p>
        //     <p className=''>Security</p>
        //     <p className=''>Insights</p>
        // </div>



    // function convert(val) {
    //     // thousands, millions, billions etc..
    //        var s = ["", "k", "m", "b", "t"];
   
    //        // dividing the value by 3.
    //        var sNum = Math.floor(("" + val).length / 3);
   
    //        // calculating the precised value.
    //        var sVal = parseFloat((
    //          sNum != 0 ? (val / Math.pow(1000, sNum)) : val).toPrecision(2));
          
    //        if (sVal % 1 != 0) {
    //            sVal = sVal.toFixed(1);
    //        }
   
    //        // appending the letter to precised val.
    //        return sVal + s[sNum];
    //    }