import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/slice/get.by.id.todo.slice";
import { editTodo } from "../redux/slice/update.todo.slice";

const EditModel = ({ _id }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [formdata, setformData] = useState({
        title : "",
        description : "",
        status : "",
        priority : ""
    })

    // const success = useSelector((state) => state.updatedtodo.success);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if(_id){
            dispatch(getTodo(_id));
        }
    }, [_id, dispatch])
 

    const oldData = useSelector((state) => state.getTodoById);

    useEffect(() => {
        if(oldData.data) {
            setformData({
                title : oldData.data.title || "",
                description : oldData.data.description || "",
                status : oldData.data.status || "",
                priority : oldData.data.priority || ""
            })
        }

    }, [oldData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            console.log(formdata, "form wala data---")
        try {
            await dispatch(editTodo({_id, formdata}));

            // setTimeout(() => {
            //     if (success) {
            //         setMessage("Task added successfully");
            //         navigator("/home");
            //     } else {
            //         setMessage("Failed to add task");
            //     }
            // }, 500); 
        } catch (error) {
            console.error("Error adding task:", error);
            // setMessage("An error occurred");
        } finally {
            closeModal();
        }
    };
    

    return (
        <>
            <button 
                onClick={openModal} 
                className="block text-white bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-ray-700 dark:focus:ring-gray-800 mb-5" 
                type="button">
                Edit
            </button>

            {isModalOpen && (
                <div 
                    tabIndex="-1" 
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit Task
                                </h3>
                                <button 
                                    type="button" 
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                                    onClick={closeModal}>
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                        <input 
                                            type="text" 
                                            name="title" 
                                            id="title" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            placeholder="Title" 
                                            value={formdata.title}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <input 
                                            type="text" 
                                            name="description" 
                                            id="description" 
                                            placeholder="Description" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                            required 
                                            value={formdata.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                        
                                    <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                    <select id="small" name="status" value={formdata.status}  onChange={handleChange} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Choose status</option>
                                        <option value="US"></option>
                                        <option value="pending">Pending</option>
                                        <option value="progress">Progress</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                    <select id="default" name="priority" value={formdata.priority}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">Choose priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>

                                    <button 
                                        type="submit" 
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditModel;
