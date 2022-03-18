import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import {useEffect, useState} from "react";
import {Loader} from "./Loader";
import {Col, Divider, Row} from "antd";

const TodoBlock = (props) => {

    let [taskList, setTaskList] = useState([])
    let [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(json => {
                setLoader(false)
                setTaskList(json)})
    }, [])

    const addNewTask = (value) => {
        let newTask = {id: parseInt(taskList.length + 1), title: value, status: false}
        setTaskList([...taskList, newTask])
    }

    return (
        <Row justify={'center'}>
            <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                <div className={'todoBlock'} >
                    <h1>Your To Do List:</h1>
                    <Divider/>
                    <AddTodo addNewTask={addNewTask} />
                    { loader && <Loader />}
                    {taskList.length < 1
                        ? loader ? null : <Divider orientation="left">No tasks for now:)</Divider>
                        : <TodoList taskList={taskList} setTaskList={setTaskList}/>}
                </div>
            </Col>
        </Row>

    )
}

export default TodoBlock