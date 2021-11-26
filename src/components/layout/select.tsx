import React, { useState } from "react";
import { Button, Form, Select } from "antd"
const { Option } = Select;
interface SelectAction {
    selectKey: string
}


const Selects: React.FC<SelectAction> = ({ selectKey }) => {
    const [form] = Form.useForm();
    const [value, setValue] = useState("rmb")

    const onFinish = (selectValue: string) => {
        console.log(selectValue, selectKey)
    }
    return <div>
        <Form
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                name="Select"
                initialValue={value}
            >
                <Select
                    style={{ width: 80, margin: '0 8px' }}
                    onChange={(value: string) => setValue(value)}
                >
                    <Option value="rmb">RMB</Option>
                    <Option value="dollar">Dollar</Option>
                </Select>
            </Form.Item>
            <div className="FormButton">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </div>
        </Form >
    </div>
}

export default Selects