import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todo = useSelector((state) => state.task);
    return (
        <>
            <ul className="list-group">
                {todo.map((todo) => {
                    return <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />;
                })}
            </ul>
        </>
    );
};

export default TodoList;
