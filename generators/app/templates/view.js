import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
    get<%= nameUpper %>Details,
    deactive<%= nameUpper %>,
    reset<%= nameUpper %>Action,
} from "redux/actions/<%= nameUpper %>";
import Flex from "components/shared-components/Flex";
import { Badge, Button, Card, Col, message, Modal, Row, Tabs } from "antd";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import DetailsView from "./DetailsView";
import { useHistory } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import ActiveButton from "components/shared-components/ActiveButton";
import IntlMessage from "components/util-components/IntlMessage";
import {
    DEACTIVE_<%= action %>,
    DEACTIVE_<%= action %>_SUCCESS,
} from "redux/constants/<%= nameUpper %>";

const { TabPane } = Tabs;

const <%= nameUpper %>Details = (props) => {
    const {
        get<%= nameUpper %>Details,
        details,
        type,
        deactive<%= nameUpper %>,
        reset<%= nameUpper %>Action,
    } = props;
    const [list, setList] = useState(details);
    const viewId = props.match.params.viewId;
    let history = useHistory();

    useEffect(() => {
        switch (type) {
            case DEACTIVE_<%= action %>:
                break;

            case DEACTIVE_<%= action %>_SUCCESS:
                get<%= nameUpper %>Details({ id: viewId });
                break;
            default:
                break;
        }

        return function cleanup() {
            reset<%= nameUpper %>Action();
        };
    }, [type]);

    useEffect(() => {
        get<%= nameUpper %>Details({ id: viewId });
    }, []);

    useEffect(() => {
        setList(details);
    }, [details]);
    const updateCompany = () => {
        history.push(`/app/<%= directory %>/<%= name %>/edit/${viewId}`);
    };

    const changeStatusButton = () => {
        deactive<%= nameUpper %>({
            id: viewId,
            status: details.recordStatus === "C" ? "O" : "C",
        });
    };

    const updateButton = (status) => {
        let btn = null;
        if (status === "O") {
            btn = (
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    className="mr-2"
                    onClick={() => {
                        updateCompany();
                    }}
                >
                    &nbsp;
                    <IntlMessage id="update" />
                </Button>
            );
        }
        return btn;
    };
    return (
        <div>
            <PageHeaderAlt className="border-bottom" overlap>
                <div className="container">
                    <Flex
                        className="py-2"
                        mobileFlex={false}
                        justifyContent="between"
                        alignItems="center"
                    >
                        <h2 className="mb-3">
                            <IntlMessage id="<%= nameUpper %>.view" />
                        </h2>
                        <div className="mb-3">
                            {updateButton(details.recordStatus)}
                            <ActiveButton
                                message="<%= nameUpper %>"
                                onClick={changeStatusButton}
                                status={details.recordStatus}
                                showText={true}
                            />
                        </div>
                    </Flex>
                </div>
            </PageHeaderAlt>
            <div className="container">
                <Tabs defaultActiveKey="1" style={{ marginTop: 30 }}>
                    <TabPane tab={<IntlMessage id="<%= nameUpper %>.general" />} key="1">
                        <Row gutter={24}>
                            <Col xs={24} sm={24} md={24}>
                                <Card title={details.name}>
                                    <DetailsView details={details} />
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

const mapStateToProps = ({ <%= nameUpper %> }) => {
    return {
        details: <%= nameUpper %>.details,
        type: <%= nameUpper %>.type,
    };
};
const mapDispatchToProps = {
    get<%= nameUpper %>Details,
    deactive<%= nameUpper %>,
    reset<%= nameUpper %>Action,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(<%= nameUpper %>Details);
