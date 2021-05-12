import {
    ADD_<%= action %>,
    ADD_<%= action %>_FAILURE,
    ADD_<%= action %>_SUCCESS,
    COUNT_<%= action %>_PAGING_LIST,
    COUNT_<%= action %>_PAGING_LIST_FAILURE,
    COUNT_<%= action %>_PAGING_LIST_SUCCESS,
    DEACTIVE_<%= action %>,
    DEACTIVE_<%= action %>_FAILURE,
    DEACTIVE_<%= action %>_SUCCESS,
    EDIT_<%= action %>,
    EDIT_<%= action %>_FAILURE,
    EDIT_<%= action %>_SUCCESS,
    FETCH_<%= action %>,
    FETCH_<%= action %>_FAILURE,
    FETCH_<%= action %>_SUCCESS,
    FETCH_<%= action %>_ON_SEARCH,
    GET_<%= action %>_DETAIL,
    GET_<%= action %>_DETAIL_FAILURE,
    GET_<%= action %>_DETAIL_SUCCESS,
    RESET_<%= action %>_ACTION,
    RESET_<%= action %>_SEARCH_FILTERS,
} from "../constants/<%= nameUpper %>";

export const fetchList<%= nameUpper %> = (params) => {
    return {
        type: FETCH_<%= action %>,
        params,
    };
};

export const getList<%= nameUpper %>Success = (payload) => {
    return {
        type: FETCH_<%= action %>_SUCCESS,
        list: payload.data.data,
    };
};

export const getList<%= nameUpper %>Failed = () => {
    return {
        type: FETCH_<%= action %>_FAILURE,
    };
};

export const count<%= nameUpper %>PagingList = (params) => {
    return {
        type: COUNT_<%= action %>_PAGING_LIST,
        params,
    };
};

export const fetchList<%= nameUpper %>OnSearch = (values) => {
    if (values.search !== undefined) {
        values.search = values.search.trim();
    }
    return {
        type: FETCH_<%= action %>_ON_SEARCH,
        search: values.search,
        status: values.status,
    };
};

export const count<%= nameUpper %>PagingListSuccess = (params) => {
    return {
        type: COUNT_<%= action %>_PAGING_LIST_SUCCESS,
        count: params.data,
    };
};

export const count<%= nameUpper %>PagingListFailure = () => {
    return {
        type: COUNT_<%= action %>_PAGING_LIST_FAILURE,
    };
};

export const get<%= nameUpper %>Details = (params) => {
    return {
        type: GET_<%= action %>_DETAIL,
        params,
    };
};

export const get<%= nameUpper %>DetailsSuccess = (payload) => {
    return {
        type: GET_<%= action %>_DETAIL_SUCCESS,
        details: payload.data,
    };
};

export const get<%= nameUpper %>DetailsFailure = () => {
    return {
        type: GET_<%= action %>_DETAIL_FAILURE,
    };
};

export const deactive<%= nameUpper %> = (params) => {
    return {
        type: DEACTIVE_<%= action %>,
        params: {
            cmd: params,
        },
        loading: "loading",
    };
};

export const deactive<%= nameUpper %>Success = (details) => {
    return {
        type: DEACTIVE_<%= action %>_SUCCESS,
        details: details.data,
        message: "success",
    };
};

export const deactive<%= nameUpper %>Failure = () => {
    return {
        type: DEACTIVE_<%= action %>_FAILURE,
        error: "error",
    };
};

export const add<%= nameUpper %> = (values) => {
    return {
        type: ADD_<%= action %>,
        payload: values,
    };
};

export const add<%= nameUpper %>Success = (payload) => {
    return {
        type: ADD_<%= action %>_SUCCESS,
        payload: payload.data,
    };
};
export const add<%= nameUpper %>Fail = () => {
    return {
        type: ADD_<%= action %>_FAILURE,
    };
};
export const edit<%= nameUpper %> = (values) => {
    return {
        type: EDIT_<%= action %>,
        payload: values,
    };
};

export const edit<%= nameUpper %>Success = (payload) => {
    return {
        type: EDIT_<%= action %>_SUCCESS,
        payload: payload.data,
    };
};
export const edit<%= nameUpper %>Fail = () => {
    return {
        type: EDIT_<%= action %>_FAILURE,
    };
};

export const reset<%= nameUpper %>Action = () => {
    return {
        type: RESET_<%= action %>_ACTION,
    };
};

export const reset<%= nameUpper %>SearchFilters = () => {
    return {
        type: RESET_<%= action %>_SEARCH_FILTERS,
    };
};
