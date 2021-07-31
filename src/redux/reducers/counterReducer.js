import counterConstants from '../constants/counterConstant';

export const INITIAL_STATE = {
        watch: 1900,
        star: 89344,
        fork: 22500,
        toggleCounter: false
    }


export const counterReducer = (state = INITIAL_STATE, action) => {
   
    console.log('reducer state: ', state)

    switch(action.type) {
        case counterConstants.INCREMENT_COUNTER:
          if(action.payload === 'watch') {
            return {
                ...state,
                watch: state.watch + 1 
            }
          } else if(action.payload === 'star') {
            return {
                ...state,
                star: state.star + 1
            }
          } else if(action.payload === 'fork') {
            return {
                ...state,
                fork: state.fork + 1
            }
          }
          break;
        case counterConstants.DECREMENT_COUNTER:
            if(action.payload === 'watch') {
                return {
                    ...state,
                    watch: state.watch - 1 
                }
              } else if(action.payload === 'star') {
                return {
                    ...state,
                    star: state.star - 1
                }
              } else if(action.payload === 'fork') {
                return {
                    ...state,
                    fork: state.fork - 1
                }
              }
              break;
        case counterConstants.TOGGLE_COUNTER:
            return {
                ...state,
                toggleCounter: !state.toggleCounter
            }
            break;
        default:
            return state;
    }
}
