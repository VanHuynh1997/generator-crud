import React from "react";
import { Input, Row, Col, Card, Form } from "antd";
import IntlMessage from "components/util-components/IntlMessage";
const rules = {
    partnerGroupCode: [
        {
            required: true,
            message: <IntlMessage id="partnerGroup.requiredCode" />,
        },
    ],
    partnerGroupName: [
        {
            required: true,
            message: <IntlMessage id="partnerGroup.requiredName" />,
        },
    ],
};
const GeneralField = (props) => (
    <Row gutter={16}>
        <Col xs={24} sm={24} md={24}>
            <Card title={<IntlMessage id="<%= nameUpper %>.basicInfo" />}>
                <Row gutter={16}>
                    <Col xs={12}>
                        <Form.Item
                            name="code"
                            label={<IntlMessage id="<%= nameUpper %>.code" />}
                            rules={rules.partnerGroupCode}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={12}>
                        <Form.Item
                            name="name"
                            label={<IntlMessage id="<%= nameUpper %>.name" />}
                            rules={rules.partnerGroupName}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="description"
                    label={<IntlMessage id="<%= nameUpper %>.description" />}
                >
                    <Input.TextArea rows={2} />
                </Form.Item>
            </Card>
        </Col>
    </Row>
);

export default GeneralField;
