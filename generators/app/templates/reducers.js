import {
    ADD_<%= action %>_SUCCESS,
    COUNT_<%= action %>_PAGING_LIST_SUCCESS,
    DEACTIVE_<%= action %>,
    DEACTIVE_<%= action %>_SUCCESS,
    EDIT_<%= action %>_SUCCESS,
    FETCH_<%= action %>_FORM,
    FETCH_<%= action %>_SUCCESS,
    FETCH_<%= action %>_ON_SEARCH,
    GET_<%= action %>_DETAIL_SUCCESS,
    RESET_<%= action %>_ACTION,
    RESET_<%= action %>_SEARCH_FILTERS,
} from "../constants/<%= nameUpper %>";

const initialState = {
    type: null,
    message: null,
    loading: null,
    error: null,
    list: [],
    count: null,
    page: null,
    current: 1,
    details: [],
    add: null,
    search: null,
    status: null,
    edit: null,
    active: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_<%= action %>_SUCCESS: {
            return {
                ...state,
                list: action.list,
            };
        }

        case COUNT_<%= action %>_PAGING_LIST_SUCCESS: {
            return {
                ...state,
                count: action.count,
                // page: action.page,
                // current: action.current,
            };
        }

        case FETCH_<%= action %>_ON_SEARCH: {
            return {
                ...state,
                search: action.search,
                status: action.status,
            };
        }

        case GET_<%= action %>_DETAIL_SUCCESS: {
            return {
                ...state,
                details: action.details,
            };
        }

        case FETCH_<%= action %>_FORM: {
            return {
                ...state,
                formData: action,
                status: action.status,
            };
        }

        case DEACTIVE_<%= action %>: {
            return {
                ...state,
                type: action.type,
                loading: action.loading,
            };
        }

        case DEACTIVE_<%= action %>_SUCCESS: {
            return {
                ...state,
                active: action.details,
                type: action.type,
                message: action.message,
                error: action.error,
            };
        }

        case ADD_<%= action %>_SUCCESS: {
            const newState = {
                ...state,
                add: action.payload,
                type: action.type,
            };
            return newState;
        }

        case RESET_<%= action %>_ACTION:
            return {
                ...state,
                add: null,
                type: null,
                message: null,
                error: null,
            };
        case EDIT_<%= action %>_SUCCESS: {
            return {
                ...state,
                edit: action.payload,
                type: action.type,
            };
        }
        case RESET_<%= action %>_SEARCH_FILTERS:
            return {
                ...state,
                type: null,
                search: null,
            };

        default:
            return state;
    }
};

export default reducer;
