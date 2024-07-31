import React, {useEffect} from  "react";
import EditModel from "./editmodel";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/slice/get.todo.slice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const { data: todos, isLoading, error } = useSelector((state) => state.todo);
    console.log(todos, "todos")

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Priority
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center">Loading...</td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan="6" className="px-6 py-4 text-center">Error loading data</td>
                        </tr>
                    ) : (
                        todos && todos.data.map((todo) => (
                            <tr key={todo._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {todo._id}
                                </th>
                                <td className="px-6 py-4">{todo.title}</td>
                                <td className="px-6 py-4">{todo.status}</td>
                                <td className="px-6 py-4">{todo.priority}</td>
                                <td className="px-6 py-4">
                                    <div className="action">
                                        <EditModel />
                                        <button
                                            className="block text-white bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mb-5"
                                            type="button"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home;