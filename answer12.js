import React, { useState } from 'react';

const DummyRequest = () => {
    const [name, setName] = useState('')
    const [className, setClassName] = useState('')

    const handleSubmitFormData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('className', className)

        fetch('/myapi', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(data => {
                console.log('Response', data)
            })
            .catch(err => {
                console.error('Error:', err)
            });
    };

    const handleSubmitJson = (e) => {
        e.preventDefault()

        const jsonData = { name: name, className: className }
        fetch('/myapijson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Response from server (JSON):', data)
            })
            .catch(err => {
                console.error('Error:', err)
            });
    };

    return (
        <div>
            <h2>Make A Request</h2>
            <form onSubmit={handleSubmitFormData}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                <label>Class Name</label>
                <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} /><br/>
                <button type="submit">Submit In Form</button>
            </form>
            <br />
            <form onSubmit={handleSubmitJson}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
                <label>Class Name</label>
                <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} /><br/>
                <button type="submit">Submit In JSON</button>
            </form>
        </div>
    );
};

export default DummyRequest;
