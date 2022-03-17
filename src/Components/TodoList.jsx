import {Button, Divider, List, Typography} from "antd"
import {DeleteOutlined} from '@ant-design/icons'
const {Text} = Typography

const TodoList = ({taskList, setTaskList}) => {

    const statusToggler = (id) => {
        setTaskList(taskList.map( obj => {
            if (obj.id == id){
                obj.completed = !obj.completed
            }
            return obj
        }))
    }

    const onDelete = (id) => {
        setTaskList( taskList.filter( title =>  title.id != id))
    }
    return (
        <div className={'todolist'}>
            <Divider orientation="left">Task List:</Divider>
            <List
                bordered
                size={'large'}
                dataSource={taskList}
                renderItem={task => (
                    <List.Item>
                        <span>
                            <b>{task.id}</b>
                            <input style={{marginLeft: '5px'}} type="checkbox" checked={task.completed} onChange={() => {statusToggler(task.id)}}/>
                        </span>
                        <span style={{alignItems: 'left', width:'80%'}}>
                            {task.completed
                                ? <Text disabled delete>{task.title}</Text>
                                : <Text >{task.title}</Text>}
                        </span>
                        <Button style={{marginLeft: '5px'}} type={'primary'} danger onClick={() => {onDelete(task.id)}}><DeleteOutlined /></Button>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoList