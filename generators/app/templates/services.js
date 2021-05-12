import fetch from "../auth/FetchInterceptor";

const <%= nameUpper %>Service = {};

<%= nameUpper %>Service.getList<%= nameUpper %> = function (params) {
    return fetch({
        url: "/mcrecontract/services/partnerGroupServices/getPagingList",
        method: "post",
        params,
    });
};

<%= nameUpper %>Service.count<%= nameUpper %>PagingList = function (params) {
    return fetch({
        url: "/mcrecontract/services/partnerGroupServices/countPagingList",
        method: "post",
        params,
    });
};

<%= nameUpper %>Service.get<%= nameUpper %>Details = function (params) {
    return fetch({
        url: "/mcrecontract/services/partnerGroupServices/getById",
        method: "post",
        params,
    });
};

<%= nameUpper %>Service.add<%= nameUpper %> = function (params) {
    return fetch({
        url: "/mcrecontract/services/partnerGroupServices/create",
        method: "post",
        params,
    });
};

<%= nameUpper %>Service.edit<%= nameUpper %> = function (params) {
    return fetch({
        url: "/mcrecontract/services/partnerGroupServices/update",
        method: "post",
        params,
    });
};

<%= nameUpper %>Service.get<%= nameUpper %> = function () {
    return fetch({
        url: "/mcrecontract/services/businessAreaServices/getTree",
        method: "post",
    });
};

<%= nameUpper %>Service.deactive<%= nameUpper %> = function (params) {
    return fetch({
        url: "/mcrecontract/services/partnerGroupServices/activeDeactive",
        method: "post",
        params,
    });
};

export default <%= nameUpper %>Service;
