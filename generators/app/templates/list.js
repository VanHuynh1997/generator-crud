import { EyeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Form, Table } from "antd";
import ActiveButton from "components/shared-components/ActiveButton";
import ButtonGroup from "components/shared-components/ButtonGroup";
import Flex from "components/shared-components/Flex";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    count<%= nameUpper %>PagingList,
    deactive<%= nameUpper %>,
    fetchList<%= nameUpper %>,
    fetchList<%= nameUpper %>OnSearch,
    reset<%= nameUpper %>SearchFilters,
} from "redux/actions/<%= nameUpper %>";
import utils from "utils";
import AdvancedSearch from "components/shared-components/AdvancedSearch";
import IntlMessage from "components/util-components/IntlMessage";
import { DEACTIVE_<%= action %>_SUCCESS } from "redux/constants/<%= nameUpper %>";

const getStatuses = (status) => {
    switch (status) {
        case "O":
            return (
                <>
                    <Badge status="success" />
                    <span>
            <IntlMessage id="status.available" />
          </span>
                </>
            );
        default:
            return (
                <>
                    <Badge status="error" />
                    <span>
            <IntlMessage id="status.disabled" />
          </span>
                </>
            );
    }
};

const <%= nameUpper %>List = (props) => {
    const {
        fetchList<%= nameUpper %>,
        fetchList<%= nameUpper %>OnSearch,
        getList,
        deactive<%= nameUpper %>,
        type,
        count<%= nameUpper %>PagingList,
        count,
        search,
        status,
        numberCurrent,
        reset<%= nameUpper %>SearchFilters,
    } = props;
    let history = useHistory();
    const [list, setList] = useState(getList);
    const [current, setCurrent] = useState(numberCurrent);
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };
    useEffect(() => {
        switch (type) {
            case DEACTIVE_<%= action %>_SUCCESS:
                fetchList<%= nameUpper %>({
                    loadCfg: {
                        offset: 0,
                        limit: 10,
                        sortDir: "DESC",
                        sortField: "makerDate",
                        filters: [],
                    },
                });
                break;
            default:
                break;
        }
    }, [type]);

    useEffect(() => {
        //resetPartnerGroupSearchFilters();
        fetchList<%= nameUpper %>({
            loadCfg: {
                offset: 0,
                limit: 10,
                sortDir: "DESC",
                sortField: "makerDate",
                filters: [],
            },
        });

        count<%= nameUpper %>PagingList({
            loadCfg: {
                offset: 0,
                limit: -1,
                sortDir: "DESC",
                sortField: "makerDate",
                filters: [],
            },
        });
    }, []);

    useEffect(() => {
        setList(getList);
    }, [getList]);

    const handleTableChange = (pagination) => {
        const offset = (pagination.current - 1) * pagination.pageSize;
        const pageSize =
            pagination.pageSize !== undefined ? pagination.pageSize : 10;
        setCurrent(pagination.current);

        let dataFilter = [];
        if (search !== null && search !== undefined && search !== "") {
            dataFilter = [
                ...dataFilter,
                { field: "ftsValue", value: search, comparison: "like" },
            ];
        }

        if (status !== null && status !== undefined && status !== "") {
            dataFilter = [
                ...dataFilter,
                {
                    field: "recordStatus",
                    value: status,
                    comparison: "eq",
                },
            ];
        }
        fetchList<%= nameUpper %>({
            loadCfg: {
                offset: offset,
                limit: pageSize,
                sortDir: "DESC",
                sortField: "makerDate",
                filters: dataFilter,
            },
        });

        count<%= nameUpper %>PagingList({
            loadCfg: {
                offset: offset,
                limit: pageSize,
                sortDir: "DESC",
                sortField: "makerDate",
                filters: dataFilter,
            },
        });
    };

    const addButton = () => {
        history.push(`/app/<%= directory %>/<%= name %>/add`);
    };

    const viewDetails = (row) => {
        history.push(`/app/<%= directory %>/<%= name %>/view/${row.id}`);
    };

    const deleteRow = (row) => {
        deactive<%= nameUpper %>({
            id: row.id,
            status: row.recordStatus === "C" ? "O" : "C",
        });
    };

    const tableColumns = [
        {
            title: <IntlMessage id="<%= nameUpper %>.code" />,
            dataIndex: "code",
            render: (_, record) => (
                <div className="d-flex">
                    <strong>{record.code}</strong>
                </div>
            ),
        },
        {
            title: <IntlMessage id="<%= nameUpper %>.name" />,
            dataIndex: "name",
            render: (_, record) => (
                <div className="d-flex">
                    <strong>{record.name}</strong>
                </div>
            ),
        },
        {
            title: <IntlMessage id="<%= nameUpper %>.status" />,
            dataIndex: "recordStatus",
            render: (status) => (
                <Flex alignItems="center">{getStatuses(status)}</Flex>
            ),
            sorter: (a, b) => utils.antdTableSorter(a, b, "recordStatus"),
        },
        {
            title: <IntlMessage id="<%= nameUpper %>.creator" />,
            dataIndex: "makerId",
        },
        {
            title: <IntlMessage id="<%= nameUpper %>.markerDate" />,
            dataIndex: "makerDate",
            render: (data) =>
                Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                }).format(data),
            sorter: (a, b) => utils.antdTableSorter(a, b, "makerDate"),
        },
        {
            title: <IntlMessage id="<%= nameUpper %>.action" />,
            dataIndex: "actions",
            render: (_, elm) => (
                <ButtonGroup alignRight>
                    <Button
                        icon={<EyeOutlined />}
                        type={"primary"}
                        onClick={() => viewDetails(elm)}
                    />
                    <ActiveButton
                        message="<%= nameUpper %>"
                        popConfirmplacement="topRight"
                        status={elm.recordStatus}
                        onClick={() => deleteRow(elm)}
                    />
                </ButtonGroup>
            ),
        },
    ];

    const onSearch = (values) => {
        setCurrent(1);
        fetchList<%= nameUpper %>OnSearch(values);
    };

    return (
        <Card>
            <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
                <AdvancedSearch
                    searchDateStatus={true}
                    showStatus={false}
                    onSearch={onSearch}
                    form={form}
                    onReset={onReset}
                />
                <div className="mb-4">
                    <Button
                        onClick={() => addButton()}
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        block
                    >
                        {" "}
                        <IntlMessage id="<%= nameUpper %>.add" />
                    </Button>
                </div>
            </Flex>
            <div className="table-responsive">
                <Table
                    columns={tableColumns}
                    dataSource={list}
                    rowKey="id"
                    onChange={handleTableChange}
                    pagination={{ total: count, current }}
                />
            </div>
        </Card>
    );
};

const mapStateToProps = ({ <%= nameUpper %> }) => {
    return {
        getList: <%= nameUpper %>.list,
        type: <%= nameUpper %>.type,
        searchFilter: <%= nameUpper %>.search,
        count: <%= nameUpper %>.count,
        page: <%= nameUpper %>.page,
        search: <%= nameUpper %>.search,
        status: <%= nameUpper %>.status,
        numberCurrent: <%= nameUpper %>.current,
    };
};
const mapDispatchToProps = {
    fetchList<%= nameUpper %>,
    fetchList<%= nameUpper %>OnSearch,
    deactive<%= nameUpper %>,
    count<%= nameUpper %>PagingList,
    reset<%= nameUpper %>SearchFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= nameUpper %>List);
