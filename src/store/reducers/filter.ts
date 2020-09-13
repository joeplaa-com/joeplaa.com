import { Action, Reducer } from 'redux';
import { IFilterState } from '../interfaces';
import { KnownAction } from '../actions/filter';
import { navigation } from '../../lib/data'

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialFilterState: IFilterState = {
    userFilter: {
        '/howto': [],
        '/portfolio': []
    },
    initialFilter: {
        '/howto': [],
        '/portfolio': []
    }
};

export const filterReducer: Reducer<IFilterState> = (state: IFilterState | undefined, incomingAction: Action): IFilterState => {
    if (state === undefined) {
        return initialFilterState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
    // Add user and initial tags
    case 'ADD_TAGS_FILTER':
        switch (action.page) {
        case navigation.howto:
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    '/howto': [...action.tags]
                },
                initialFilter: {
                    ...state.initialFilter,
                    '/howto': [...action.tags]
                }
            };
        case navigation.portfolio:
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    '/portfolio': [...action.tags]
                },
                initialFilter: {
                    ...state.initialFilter,
                    '/portfolio': [...action.tags]
                }
            };
        }
        break;
    // Set user tags
    case 'SET_TAGS_FILTER':
        switch (action.page) {
        case navigation.howto:
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    '/howto': action.tags
                }
            };
        case navigation.portfolio:
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    '/portfolio': action.tags
                }
            };
        }
        break;
    // Copy initial to user
    case 'RESET_TAG_FILTER':
        return {
            ...state,
            userFilter: state.initialFilter
        };
    }
    return state;
};
