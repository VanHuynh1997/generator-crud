import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
    ADD_<%= action %>,
    COUNT_<%= action %>_PAGING_LIST,
    DEACTIVE_<%= action %>,
    EDIT_<%= action %>,
    FETCH_<%= action %>,
    FETCH_<%= action %>_ON_SEARCH,
    GET_<%= action %>_DETAIL,
} from "../constants/<%= nameUpper %>";
import {
    add<%= nameUpper %>Fail,
    add<%= nameUpper %>Success,
    count<%= nameUpper %>PagingListFailure,
    count<%= nameUpper %>PagingListSuccess,
    deactive<%= nameUpper %>Failure,
    deactive<%= nameUpper %>Success,
    edit<%= nameUpper %>Fail,
    edit<%= nameUpper %>Success,
    getList<%= nameUpper %>Failed,
    getList<%= nameUpper %>Success,
    get<%= nameUpper %>DetailsFailure,
    get<%= nameUpper %>DetailsSuccess,
} from "../actions/<%= nameUpper %>";
import <%= nameUpper %>Service from "../../services/<%= nameUpper %>Services";

export function* fetch<%= nameUpper %>() {
    yield takeEvery(FETCH_<%= action %>, function* (params) {
        try {
            const getList = yield call(
                <%= nameUpper %>Service.getList<%= nameUpper %>,
                params.params
            );
            yield put(getList<%= nameUpper %>Success(getList));
        } catch (error) {
            yield put(getList<%= nameUpper %>Failed());
        }
    });
}

export function* get<%= nameUpper %>Details() {
    yield takeEvery(GET_<%= action %>_DETAIL, function* ({ params }) {
        try {
            const details = yield call(<%= nameUpper %>Service.get<%= nameUpper %>Details, params);
            yield put(get<%= nameUpper %>DetailsSuccess(details));
        } catch (error) {
            yield put(get<%= nameUpper %>DetailsFailure());
        }
    });
}

export function* count<%= nameUpper %>PagingList() {
    yield takeEvery(COUNT_<%= action %>_PAGING_LIST, function* (params) {
        try {
            const pagingList = yield call(
                <%= nameUpper %>Service.count<%= nameUpper %>PagingList,
                params.params
            );
            yield put(count<%= nameUpper %>PagingListSuccess(pagingList));
        } catch (error) {
            yield put(count<%= nameUpper %>PagingListFailure());
        }
    });
}

export function* add<%= nameUpper %>() {
    yield takeEvery(ADD_<%= action %>, function* ({ payload }) {
        const { name, code, description } = payload;
        const info = {
            code: code,
            name: name,
            description: description,
        };
        const data = { cmd: info };
        try {
            const addData = yield call(
                <%= nameUpper %>Service.add<%= nameUpper %>,
                data
            );
            yield put(add<%= nameUpper %>Success(addData));
        } catch (error) {
            yield put(add<%= nameUpper %>Fail());
        }
    });
}

export function* edit<%= nameUpper %>() {
    yield takeEvery(EDIT_<%= action %>, function* ({ payload }) {
        const { name, code, id, description } = payload;
        const info = {
            id: id,
            code: code,
            name: name,
            description: description,
        };
        const data = { cmd: info };
        try {
            const editData = yield call(
                <%= nameUpper %>Service.edit<%= nameUpper %>,
                data
            );
            yield put(edit<%= nameUpper %>Success(editData));
        } catch (error) {
            yield put(edit<%= nameUpper %>Fail());
        }
    });
}

export function* deactive<%= nameUpper %>() {
    yield takeEvery(DEACTIVE_<%= action %>, function* ({ params }) {
        try {
            const res = yield call(<%= nameUpper %>Service.deactive<%= nameUpper %>, params);
            yield put(deactive<%= nameUpper %>Success(res));
        } catch (error) {
            yield put(deactive<%= nameUpper %>Failure());
        }
    });
}

export function* fetch<%= nameUpper %>OnSearch() {
    yield takeEvery(FETCH_<%= action %>_ON_SEARCH, function* (values) {
        try {
            let searchParams = [
                {
                    field: "ftsValue",
                    value: values.search ? values.search : "",
                    comparison: "like",
                },
            ];
            if (values.status !== undefined && values.status !== "") {
                searchParams = [
                    ...searchParams,
                    {
                        field: "recordStatus",
                        value: values.status,
                        comparison: "eq",
                    },
                ];
            }
            const getList = yield call(
                <%= nameUpper %>Service.getList<%= nameUpper %>,
                {
                    loadCfg: {
                        offset: 0,
                        limit: -1,
                        sortDir: "DESC",
                        sortField: "makerDate",
                        filters: searchParams,
                    },
                }
            );
            yield put(getList<%= nameUpper %>Success(getList));

            const pagingList = yield call(<%= nameUpper %>Service.count<%= nameUpper %>PagingList, {
                loadCfg: {
                    offset: 0,
                    limit: -1,
                    sortDir: "DESC",
                    sortField: "makerDate",
                    filters: searchParams,
                },
            });
            yield put(count<%= nameUpper %>PagingListSuccess(pagingList));
        } catch (error) {
            yield put(getList<%= nameUpper %>Failed());
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(fetch<%= nameUpper %>),
        fork(get<%= nameUpper %>Details),
        fork(count<%= nameUpper %>PagingList),
        fork(add<%= nameUpper %>),
        fork(edit<%= nameUpper %>),
        fork(deactive<%= nameUpper %>),
        fork(fetch<%= nameUpper %>OnSearch),
    ]);
}
