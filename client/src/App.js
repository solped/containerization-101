import React, {useEffect} from "react";
import "./App.css";
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function Todo({todo, index, markTodo, removeTodo}) {
    return (
        <div
            className="todo"

        >
            <span style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

function FormTodo({addTodo}) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)}
                              placeholder="Add new todo"/>
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function App() {


    const [todos, setTodos] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tasks")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            }).then(data => {
            setTodos(data)
        }).catch(error => {
            console.log(error)
        });
    }, [])

    const addTodo = text => {
        axios.post('http://localhost:5000/tasks', {
            text: text,
            isDone: false
        })
            .then((response) => {
                console.log(response);
                const newTodos = [...todos, response.data];
                console.log(newTodos);
                setTodos(newTodos);
            }, (error) => {
                console.log(error);
            });
    };

    const markTodo = id => {
        const newTodos = [...todos];
        const updatedIndex = newTodos.findIndex(x => x.id === id);
        newTodos[updatedIndex].isDone = true;
        console.log(`==== markTodo - index: ${id}`)
        setTodos(newTodos);
        axios.put(`http://localhost:5000/tasks/${id}`, {
            isDone: true
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    };

    const removeTodo = id => {
        const newTodos = [...todos];
        const updatedTodos = newTodos.filter(x => x.id !== id);
        setTodos(updatedTodos);
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormTodo addTodo={addTodo}/>
                <div>
                    {todos.map((todo) => (
                        <Card>
                            <Card.Body>
                                <Todo
                                    key={todo.id}
                                    index={todo.id}
                                    todo={todo}
                                    markTodo={markTodo}
                                    removeTodo={removeTodo}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
