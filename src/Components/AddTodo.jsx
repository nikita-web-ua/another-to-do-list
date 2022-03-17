import {Button, Input, Form} from "antd"
import { PlusOutlined } from '@ant-design/icons'
import {useState} from "react"

const AddTodo = ({addNewTask}) => {

    let [value, setValue] = useState('')

    const handleSubmit = () => {

        if(value.trim()) {
            addNewTask(value)
            setValue('')
        }
    }

    return (
        <div>
            <Form name="basic" onFinish={handleSubmit}>
                <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 133px)'}}>
                    <Input  value={value} size={'large'} onChange={(e) => {setValue(e.target.value)}}/>
                </Form.Item>
                <Form.Item style={{ display: 'inline-block'}}>
                    <Button type="primary" htmlType={'submit'} icon={<PlusOutlined />} size={"large"}>ADD TASK</Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default AddTodo