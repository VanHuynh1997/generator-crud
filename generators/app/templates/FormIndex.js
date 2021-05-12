import { Button, Form, message, Modal, Tabs } from "antd";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import Flex from "components/shared-components/Flex";
import IntlMessage from "components/util-components/IntlMessage";
import en_US from "lang/entries/en_US";
import vi_VN from "lang/entries/vi_VN";
import React, { useEffect, useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    add<%= nameUpper %>,
    edit<%= nameUpper %>,
    get<%= nameUpper %>Details,
    reset<%= nameUpper %>Action,
} from "redux/actions/<%= nameUpper %>";
import GeneralField from "./GeneralField";

import {
    ADD_<%= action %>_SUCCESS,
    EDIT_<%= action %>_SUCCESS,
} from "redux/constants/<%= nameUpper %>";

const { TabPane } = Tabs;

const ADD = "ADD";
const EDIT = "EDIT";

const <%= nameUpper %>Form = (props) => {
    const { mode = ADD, param } = props;
    const {
        add<%= nameUpper %>,
        edit<%= nameUpper %>,
        addCo,
        type,
        reset<%= nameUpper %>Action,
        get<%= nameUpper %>Details,
        details,
        locale,
        template,
    } = props;
    const [form] = Form.useForm();
    const [uploadedImg, setImage] = useState("");
    const [uploadLoading, setUploadLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [detail, setDetail] = useState(details);
    const [visible, setVisible] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const toggle = () => setVisible((prev) => !prev);
    const messages = {
        en: en_US.messages,
        vi: vi_VN.messages,
    };

    let history = useHistory();

    useEffect(() => {
        switch (type) {
            case ADD_<%= action %>_SUCCESS:
                setSubmitLoading(false);
                if (addCo != null && addCo.id) {
                    if (mode === ADD) {
                        message.success(
                            <IntlProvider locale={locale} messages={messages[locale]}>
                                <FormattedMessage
                                    id="company.create.success"
                                    values={{ company: addCo.name }}
                                />
                            </IntlProvider>
                        );
                        history.push(`/app/<%= directory %>/<%= name %>/list`);
                    }
                } else {
                    message.error(
                        <IntlProvider locale={locale} messages={messages[locale]}>
                            <FormattedMessage id="<%= nameUpper %>.isExist" />
                        </IntlProvider>
                    );
                    setDisabled(false);
                }
                break;
            case EDIT_<%= action %>_SUCCESS:
                setSubmitLoading(false);
                if (mode === EDIT) {
                    const { id } = param;
                    const viewId = parseInt(id);
                    message.success(
                        <IntlProvider locale={locale} messages={messages[locale]}>
                            <FormattedMessage id="form.update.success" />
                        </IntlProvider>
                    );
                    history.push(
                        `/app/<%= directory %>/<%= name %>/view/${viewId}`
                    );
                }
                break;
        }
        return function cleanup() {
            reset<%= nameUpper %>Action();
        };
    }, [type]);
    useEffect(() => {
        setDetail(details);
    }, [details]);

    useEffect(() => {
        if (mode === EDIT) {
            const { id } = param;
            const companyId = parseInt(id);
            get<%= nameUpper %>Details({ id: companyId });
        }
    }, []);

    useEffect(() => {
        if (mode === EDIT) {
            form.setFieldsValue({
                name: details && details.name,
                code: details && details.code,
                description: details && details.description,
            });
        }
    }, [form, mode, param, props]);

    const onFinish = () => {
        setSubmitLoading(true);
        setDisabled(true);
        form
            .validateFields()
            .then((values) => {
                setTimeout(() => {
                    setSubmitLoading(false);
                    setDisabled(true);
                    if (mode === ADD) {
                        add<%= nameUpper %>(values);
                    }
                    if (mode === EDIT) {
                        values.id = details.id;
                        values.code = details.code;
                        edit<%= nameUpper %>(values);
                    }
                }, 1500);
            })
            .catch((info) => {
                setSubmitLoading(false);
                setDisabled(false);
                message.error(
                    <IntlProvider locale={locale} messages={messages[locale]}>
                        <FormattedMessage id="input.validation.require" />
                    </IntlProvider>
                );
            });
    };

    const discardUpdate = () => {
        setVisible(true);
    };
    const confirm = () => {
        history.push(`/app/<%= directory %>/<%= name %>/list`);
    };

    return (
        <>
            <Form
                layout="vertical"
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                initialValues={{
                    heightUnit: "cm",
                    widthUnit: "cm",
                    weightUnit: "kg",
                }}
            >
                <PageHeaderAlt className="border-bottom" overlap>
                    <div className="container">
                        <Flex
                            className="py-2"
                            mobileFlex={false}
                            justifyContent="between"
                            alignItems="center"
                        >
                            <h2 className="mb-3">
                                {mode === "ADD" ? (
                                    <IntlMessage id="<%= nameUpper %>.add" />
                                ) : (
                                    <IntlMessage id="<%= nameUpper %>.update" />
                                )}{" "}
                            </h2>
                            <div className="mb-3">
                                <Button className="mr-2" onClick={discardUpdate}>
                                    <IntlMessage id="discard" />
                                </Button>
                                <Modal
                                    onOk={confirm}
                                    okText={<IntlMessage id="yes" />}
                                    cancelText={<IntlMessage id="cancel" />}
                                    visible={visible}
                                    onCancel={toggle}
                                >
                                    {<IntlMessage id="company.backList" />}
                                </Modal>
                                <Button
                                    type="primary"
                                    onClick={() => onFinish()}
                                    htmlType="submit"
                                    loading={submitLoading}
                                    disabled={disabled}
                                >
                                    {mode === "ADD" ? (
                                        <IntlMessage id="add" />
                                    ) : (
                                        <IntlMessage id="save" />
                                    )}
                                </Button>
                            </div>
                        </Flex>
                    </div>
                </PageHeaderAlt>
                <div className="container">
                    <Tabs defaultActiveKey="1" style={{ marginTop: 30 }}>
                        <TabPane tab={<IntlMessage id="<%= nameUpper %>.general" />} key="1">
                            <GeneralField
                                dataTree={template}
                                uploadedImg={uploadedImg}
                                uploadLoading={uploadLoading}
                            />
                        </TabPane>
                    </Tabs>
                </div>
            </Form>
        </>
    );
};
const mapDispatchToProps = {
    add<%= nameUpper %>,
    edit<%= nameUpper %>,
    reset<%= nameUpper %>Action,
    get<%= nameUpper %>Details,
};
const mapStateToProps = ({ <%= nameUpper %>, theme }) => {
    const { locale } = theme;
    return {
        addCo: <%= nameUpper %>.add,
        type: <%= nameUpper %>.type,
        details: <%= nameUpper %>.details,
        locale,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= nameUpper %>Form);
