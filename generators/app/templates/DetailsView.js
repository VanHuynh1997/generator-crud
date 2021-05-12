import React, { Component, useState } from "react";
import { Row, Col, Descriptions, Badge } from "antd";
import IntlMessage from "../../../../../components/util-components/IntlMessage";

const DetailsView = (props) => {
    const details = props.details;
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
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={12}>
                    <Descriptions size="default" column={1}>
                        <Descriptions.Item
                            labelStyle={{ fontWeight: "bold" }}
                            label={<IntlMessage id="<%= nameUpper %>.code" />}
                        >
                            {details && details.code}
                        </Descriptions.Item>
                        <Descriptions.Item
                            labelStyle={{ fontWeight: "bold" }}
                            // label="Status"
                            label={<IntlMessage id="<%= nameUpper %>.status" />}
                        >
                            {getStatuses(details.recordStatus)}
                        </Descriptions.Item>
                        <Descriptions.Item
                            labelStyle={{ fontWeight: "bold" }}
                            label={<IntlMessage id="<%= nameUpper %>.markerDate" />}
                        >
                            {Intl.DateTimeFormat("en-GB", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                            }).format(details && details.makerDate)}
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Descriptions size="default" column={1}>
                        <Descriptions.Item
                            labelStyle={{ fontWeight: "bold" }}
                            label={<IntlMessage id="<%= nameUpper %>.creator" />}
                        >
                            {details.makerId && details.makerId}
                        </Descriptions.Item>
                        <Descriptions.Item
                            labelStyle={{ fontWeight: "bold" }}
                            label={<IntlMessage id="<%= nameUpper %>.description" />}
                        >
                            {details && details.description}
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </div>
    );
};

export default DetailsView;
