import React, { useState, useEffect } from 'react'


const Hoc = (WrappedComponent, entity, deleteData, id, name) => {
    function All() {
        const [list, updateList] = useState([]);
        const [message, updateMessage] = useState('');


        const getList = () => {
            fetch("http://localhost:" + entity)
                .then(response => response.json())
                .then(data => {
                    updateList(data);
                    console.log(data);
                })
        }

        useEffect(() => {
            getList();
        }, [1]);

        const deleteList = (id, name) => {
            var input = {
                "id": id,
                "name": name
            }

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input)
            }

            var url = "http://localhost:" + deleteData;
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(data => {
                    updateMessage(data)
                    getList();
                })
        }

        return (
            <div>
                <WrappedComponent data={list} deleteList={deleteList} message={message} />
            </div>
        )
    }

    return All;
}

export default Hoc